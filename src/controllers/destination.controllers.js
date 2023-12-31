const db = require("../models");
const asyncHandler = require("express-async-handler")

const createNewDestination = asyncHandler(async (req, res) => {
    const destination = await db.Destination.findOrCreate({
        where: { code: req.body.code },
        defaults: req.body
    })
    console.log(destination)
    return res.json({
        success: destination[1] ? true : false,
        message: destination[1] ? 'Tạo địa điểm thành công' : 'Tên địa điểm đã tồn tại'
    })
})

module.exports = { createNewDestination }