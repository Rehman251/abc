// THIS IS A EMAIL SENDING CODE IT SENDS EMAIL TO EACH PERSON 
// IN THIS CODE WE USE FOR LOOP 




const nodemailer = require("nodemailer");

const persons= [
{
  name: 'Abdul Rehman',
  email: 'abdulrehman7033126@gmail.com',
  fees: 1840,
  duedate: '28 September 2025'
},
{
  name: 'Muneeb',
  email: 'falah.shaoor@gmail.com',
  fees: 2000,
  duedate: '28 September 2025'
},
// {
//   name: 'Mudassir Hassan',
//   email: 'mudassarhassan710@gmail.com',
//   fees: 3000,
//   duedate: '28 September 2025'
// },
// {
//   name: 'Mudassir Nawaz',
//   email: 'ahmadnawaz7643314@gmail.com',
//   fees: 4000,
//   duedate: '28 September 2025'
// },
// {
//   name: 'Joun Abbas',
//   email: 'jounabs52@gmail.com',
//   fees: 5000,
//   duedate: '28 September 2025'
// },
// {
//   name: 'Naeem',
//   email: 'bhainaeem409@gmail.com',
//   fees: 6000,
//   duedate: '28 September 2025'
// },
// {
//   name: 'Muhammad Hamza',
//   email: 'hamza@airosofts.com',
//   fees: 7000,
//   duedate: '28 September 2025'
// },
{
  name: 'Abdul Sami',
  email: 'samich0251@gmail.com',
  fees: 7000,
  duedate: '29 September 2025'
}
]


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abdulrehman7033126@gmail.com",
    pass: "bubinsynmzswvfir", // NOT your normal password
  },
});

for (const singleperson of persons)
{

const mailOptions = {
  from: "abdulrehman7033126@gmail.com",
  to: `${singleperson.email}`,
  subject: `${singleperson.name} please pay your superior college fees`,
  html: `

name = 'noor'

  print ("hy my name is ",name,"and i am from bhakkar  ")
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Payment Reminder</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f9;">
  <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color:#ffffff; box-shadow: 0px 4px 12px rgba(0,0,0,0.1); border-radius:10px; overflow:hidden;">
    <tr>
      <td align="center" bgcolor="#4CAF50" style="padding: 20px 0; color:#ffffff; font-size:24px; font-weight:bold;">
        Payment Reminder
      </td>
    </tr>
    <tr>
      <td style="padding: 30px; color:#333333; font-size:16px; line-height:1.6;">
        <p>Hi <b>${singleperson.name}</b>,</p>
        <p>Your fees of <b style="color:#e74c3c;">${singleperson.fees}</b> is pending.</p>
        <p>Please make sure to clear this payment by <b>${singleperson.duedate}</b>.</p>
        <p style="margin-top:25px;">Thank you for your prompt attention.</p>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px;">
        <a href="#" style="background-color:#4CAF50; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold; display:inline-block;">
          Pay Now
        </a>
      </td>
    </tr>
    <tr>
      <td bgcolor="#f0f0f0" style="padding: 15px; text-align:center; font-size:12px; color:#777;">
        © 2025 AiroSofts. All Rights Reserved.
      </td>
    </tr>
  </table>
</body>
</html>`
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err){
    console.log(err)
  } 
  else {
    console.log("Email sent with CC/BCC:", info.response);
}
}

)}