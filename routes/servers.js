var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/snitch', function(req, res) {
  models.Server
  .findOrCreate({
    where: {
      name: req.body.name
    }, 
    defaults: {
      name: req.body.name,
      ip: req.body.ip,
      restapi_branch: req.body.restapi_branch,
      bravestorm_branch: req.body.bravestorm_branch,
      status: req.body.status,
      server_order: req.body.order,
      server_group: req.body.group
    }
  })
  .spread(function(server, created) {
    if(!created){
      server.update({
        name: req.body.name,
        ip: req.body.ip,
        restapi_branch: req.body.restapi_branch,
        bravestorm_branch: req.body.bravestorm_branch,
        status: req.body.status,
        server_order: req.body.order,
        server_group: req.body.group
      }).then(function () {
        res.redirect("/");
      });
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
