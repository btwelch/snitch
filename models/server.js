"use strict";

module.exports = function(sequelize, DataTypes) {
  var Server = sequelize.define("Server", {
    name: DataTypes.STRING,
    ip: DataTypes.STRING,
    restapi_branch: DataTypes.STRING,
    bravestorm_branch: DataTypes.STRING,
    status: DataTypes.STRING
  });

  return Server;
};
