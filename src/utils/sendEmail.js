const sgMail = require('@sendgrid/mail');
const config = require('config');

sgMail.setApiKey(config.get('sendGrid').apiKey);

module.exports = (to, from, subject, html, attachments) => {
  sgMail.send({
    to,
    from,
    subject,
    html,
    attachments,
  });
};
