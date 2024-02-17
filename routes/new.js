const express = require('express');
const router = express.Router();
const messages = require('./messages'); // Import the messages array

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res, next) {
  const { text, user } = req.body;
  const newMessage = {
    text: text,
    user: user,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
