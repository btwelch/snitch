"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Servers', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name:   Sequelize.STRING,
        ip:     Sequelize.STRING,
        restapi_branch: Sequelize.STRING,
        bravestorm_branch: Sequelize.STRING,
        status: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Servers');
  }
};
