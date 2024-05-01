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
    success: !!hotel[1],
    message: hotel[1]
      ? "Chỗ nghỉ đã được tạo thành công."
      : "Tên chỗ nghỉ đã được sử dụng.",
    hotel: hotel[0],
  });
});
const getHotels = asyncHandler(async (req, res) => {
  const { limit, page, fields, keyword, order, ...query } = req.query;
  const limitQuery = +limit || +process.env.LIMIT;
  const offset = +page - 1 || 0;
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
  if (order) queries.order = order;
  else queries.order = [["createdAt", "DESC"]];
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
        {
          model: db.GeneralRule,
          as: "rules"
        }
      ],
    });
    return res.json({
      success: response ? true : false,
      hotels: response,
    });
  }
});
const addRulesById = asyncHandler(async (req, res) => {
  const { hotelId } = req.params
  const response = await db.GeneralRule.findOrCreate({
    where: { hotelId },
    defaults: req.body
  })
  return res.json({
    success: response[1] ? true : false,
    message: response[1] ? 'Đã Thêm' : 'Thiết lập chung này đã được tạo'
  })
})
const getTypeRooms = asyncHandler(async (req, res) => {
  const response = await db.GeneralRule.findAll()
  return res.json({
    success: response ? true : false,
    message: response[1] ? 'Added' : 'Có lỗi, hãy thử lại sau',
    typerooms: response
  })
})
const createAvailable = asyncHandler(async (req, res) => {
  const response = await db.Availability.create(req.body)
  return res.json({
    success: response ? true : false,
    message: response ? 'Đã thêm quy định phòng trống' : 'có lỗi hãy thử lại sau'
  })
})
const ratings = asyncHandler(async (req, res) => {
  const { content, score } = req.body
  const { hotelId } = req.params
  const { uid } = req.user
  const alreadyRatingUser = await db.Rating.findOne({
    where: { uid, targetId: hotelId}
  })
  if (alreadyRatingUser) {
    await db.Rating.update(req.body, {
      where: { id: alreadyRatingUser.id }
    })
  } else {
    await db.Rating.create({
      content, score, targetId: hotelId, uid
    })
  }
  return res.json({
    success: true,
    message: 'Updated'
  })
})
module.exports = {
  createNewHotel,
  getHotels,
  addRulesById,
  getTypeRooms,
  createAvailable
};
