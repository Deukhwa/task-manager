const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'deukhwajeong@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  })
}

const cancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'deukhwajeong@gmail.com',
    subject: 'Sorry to leave you from us',
    text: `We are sorry to leave you, ${name}. Could you please let us know the reason?`,
  })
}

module.exports = {
  sendWelcomeEmail,
  cancelEmail,
}
