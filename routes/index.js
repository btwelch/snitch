var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Server.findAll(where: { group: 1 }).then(function(group1_servers) {
    models.Server.findAll(where: { group: 2 }).then(function(group2_servers) {
     res.render('index', {
       title: 'Snitch',
       group1_servers: group1_servers,
       group2_servers: group2_servers       
     });
   });
});

module.exports = router;
