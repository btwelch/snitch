"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Servers',
      'order',
      Sequelize.INTEGER
    )
  }
};
