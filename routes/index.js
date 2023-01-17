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

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Form'});
});

router.post('/new', function(req, res, next) {
  const message = req.body.message;
  const username = req.body.username;

  messages.push({text: message, user: username, added: new Date()});

  res.redirect('/');
})

module.exports = router;
