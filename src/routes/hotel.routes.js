const router = require("express").Router();
const joi = require("joi");
const { name, code, image, stringRequired, arrayRequired, string } = require("../middlewares/joiSchema");
const customValidate = require("../middlewares/validation");
const { isAdmin, verifyToken } = require("../middlewares/verifyToken");
const ctrls = require("../controllers/hotel.controllers");
const validate = require('../middlewares/validation')


router.post(
    "/create",
    verifyToken,
    isAdmin,
    ctrls.createNewHotel,
    validate(joi.object({
      name: stringRequired,
      destinationCode: stringRequired,
      images: arrayRequired,
      facilities: arrayRequired,
      address: stringRequired,
      description: string
    }))
  );
  router.get('/', ctrls.getHotels)
  module.exports = router;