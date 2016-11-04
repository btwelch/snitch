"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Servers',
      'server_order',
      Sequelize.INTEGER
    )
  }
};
