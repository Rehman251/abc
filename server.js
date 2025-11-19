const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
service: "gmail",
auth:{
  user:"abdulrehman7033126@gmail.com",
  pass:"bubinsynmzswvfir"

},
})
const mailOptions = {
from: "abdulrehman7033126@gmail.com",
to:"abdulrehman7033126@gmail.com",
subject:"hello this is a mail from nodemailer",
text: 'this is first text mailer'


}
transporter.sendMail(mailOptions)