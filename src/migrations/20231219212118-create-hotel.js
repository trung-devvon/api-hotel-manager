'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.FLOAT
      },
      destinationCode: {
        type: Sequelize.STRING
      },
      postedBy: {
        type: Sequelize.UUID
      },
      address: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.TEXT('long')
      },
      facilities: {
        type: Sequelize.TEXT('long')
      },
      description: {
        type: Sequelize.TEXT('long')
      },
      typeCode: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM(["ROOMS", "OUT_OF_ROOMS"]),
        defaultValue: "ROOMS",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};