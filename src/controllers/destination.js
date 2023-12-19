const db = require("../models");
const asyncHandler = require("express-async-handler")

const createNewDestination = asyncHandler(async (req, res) => {
    const destination = db.Destination.findOrCreate({
        where: { code: req.body.code },
        default: req.body
    })
    return res.json({
        success: destination[1] ? true : false,
        message: destination[1] ? 'Tạo địa điểm thành công' : 'Tên địa điểm đã tồn tại'
    })
})