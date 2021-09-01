function sendMail(email, login, password){
    let nodemailer = require('nodemailer');
  
    let transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: {
        user: 'your email',
        pass: 'your password'
      }
    });
  
    let mailOptions = {
      from: 'your email',
      to: `${email}`,
      subject: 'Thanks for registration!',
      text:`
      	Здравствуйте!
      
      	Вы получили это письмо, потому что зарегистрировались на нашем сайте
      
      	Ваши данные для входа:
      
      	Логин: ${login}
      	Пароль: ${password}
      `
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
};

module.exports = sendMail;