var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hi",
    user: "test-user",
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
