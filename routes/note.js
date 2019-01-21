let express = require('express');
let router = express.Router();
let Note = require('../models/Note.js');

router.get('/', function(req, res, next) {
  Note.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post('/', function(req, res, next) {
  Note.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
