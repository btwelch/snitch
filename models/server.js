"use strict";

module.exports = function(sequelize, DataTypes) {
  var Server = sequelize.define("Server", {
    name: DataTypes.STRING,
    ip: DataTypes.STRING,
    branch: DataTypes.STRING,
    status: DataTypes.STRING
  });

  return Server;
};
