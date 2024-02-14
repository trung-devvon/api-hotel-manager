const db = require("../models");
const asyncHandler = require("express-async-handler");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const createNewHotel = asyncHandler(async (req, res) => {
  const hotel = await db.Hotel.findOrCreate({
    where: { name: req.body.name },
    defaults: req.body,
  });
  return res.json({
    success: hotel[1] ? true : false,
    message: hotel[1]
      ? "Khách sạn đã được tạo thành công."
      : "Tên khách sạn đã được sử dụng.",
  });
});
const getHotels = asyncHandler(async (req, res) => {
  const { limit, pages, fields, keyword, order, ...query } = req.query;
  const limitQuery = +limit || +process.env.LIMIT;
  const offset = +pages - 1 || 0;
  const offsetQuery = offset * limitQuery;
  if (keyword)
    query[Op.or] = [
      {
        name: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("Hotel.name")),
          {
            [Op.like]: "%" + keyword.toLowerCase() + "%",
          }
        ),
      },
      {
        facilities: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("facilities")),
          {
            [Op.like]: "%" + keyword.toLowerCase() + "%",
          }
        ),
      },
    ];
  const queries = {};
  //
  queries.offset = offsetQuery;
  queries.limit = limitQuery;
  if(order) queries.order = order
  else queries.order = [["createdAt", "DESC"]]
  if (fields) queries.attributes = fields.split(",");
  if (limit === "All") {
    const q = { raw: true };
    if (fields) q.attributes = fields.split(",");
    const response = await db.Hotel.findAll(q);
    return res.json({
      success: response ? true : false,
      hotels: response,
    });
  } else {
    const response = await db.Hotel.findAndCountAll({
      where: query,
      ...queries,
      include: [
        {
          model: db.Destination, // get data from table Destinations 
          attributes: ["code", "name", "image"], // with fields
          as: "destinationData", // with name
        },
      ],
      raw: true,
    });
    return res.json({
      success: response ? true : false,
      hotels: response,
    });
  }
});
module.exports = {
  createNewHotel,
  getHotels,
};
