const router = require("express").Router();
const joi = require("joi");
const { name, code, image } = require("../middlewares/joiSchema");
const customValidate = require("../middlewares/validation");
const { isAdmin, verifyToken } = require("../middlewares/verifyToken");
const ctrls = require("../controllers/destination.controllers");

router.post(
  "/create",
  verifyToken,
  isAdmin,
  customValidate(joi.object({ name, code, image })),
  ctrls.createNewDestination
);
module.exports = router;
