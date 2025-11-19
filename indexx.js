const express= require('express');
const app=express();
app.use(express.json())
const cors= require('cors')
app.use(cors())
const dotenv= require('dotenv');
dotenv.config()
const {createClient} = require('@supabase/supabase-js')
const supabase= createClient(process.env.SUPABASEURL, process.env.SUPABASEKEY);
const nodemailer= require('nodemailer');
const fs=require('fs')



// Hi

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anvirosoft@gmail.com",
    pass: "mdmhkjaikjorzgno",
  },
});






    const mailOptions = {
  from: "anvirosoft@gmail.com",
  to: email,
  subject:` ${name} please pay your fees`,
  html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Email Template</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #f4f7fb;
    }
    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background: #2563eb;
      color: #fff;
      text-align: center;
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      padding: 25px;
      color: #333;
      line-height: 1.6;
      font-size: 16px;
    }
    .highlight {
      font-weight: bold;
      color: #2563eb;
    }
    .footer {
      background: #f9fafb;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #6b7280;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 20px;
      background: #2563eb;
      color: #fff !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      Fee Payment Reminder
    </div>
    <div class="content">
      <p>Hi, <span class="highlight">${name}</span>,</p>
      <p>Please pay your fees of <span class="highlight">${fees}</span> by 
         <span class="highlight">${date}</span>.</p>
      <a href="#" class="btn">Pay Now</a>
    </div>
    <div class="footer">
      Thank you for your prompt attention.
    </div>
  </div>
</body>
</html>
`
};

transporter.sendMail(mailOptions,async (err, info) => {
  if(err){
    console.log(err); 
  }else{
    console.log('info',info);


    const {data,error}=await supabase.from('emailsand').insert({name,email,fees,dates,date})
    if(data){
        console.log(data);
        
    }else{
        console.log(error);
        
    }
    

    
  }
});





app.listen(4000,()=>{
    console.log('server is listening');
    
})