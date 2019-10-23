require('dotenv').config();

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* POST send email */
router.post('/', function (req, res, next) {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  var transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",  
    secureConnection: true,
    port: 587,
    auth: {
      user: process.env.EMAIL_TMT,
      pass: process.env.TMT_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL_TMT,
    to: process.env.EMAIL_RCV,
    subject: 'Sending Email using Node.js',
    text: 'that was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })


  res.send('POST to send email');
});

module.exports = router