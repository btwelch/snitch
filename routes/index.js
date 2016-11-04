var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Server.findAll().then(function(servers) {
     res.render('index', {
       title: 'Snitch',
       servers: servers
     });
   });
});

module.exports = router;
