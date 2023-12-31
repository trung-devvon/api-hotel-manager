'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    name: DataTypes.STRING,
    star: DataTypes.FLOAT,
    destinationCode: DataTypes.STRING,
    postedBy: DataTypes.UUID,
    description: DataTypes.TEXT,
    images: {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue("images", JSON.stringify(value))
      },
      get() {
        const raw = this.getDataValue("images")
        return raw ? JSON.parse(raw): []
      }
    },
    facilities: {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue("facilities", JSON.stringify(value))
      },
      get() {
        const raw = this.getDataValue("facilities")
        return raw ? JSON.parse(raw): []
      }
    },
    address: DataTypes.STRING,
    // typeCode: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ["ROOMS", "OUT_OF_ROOM"]
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  Hotel.beforeCreate(function(model) {
    model.id = v4()
  })
  return Hotel;
};