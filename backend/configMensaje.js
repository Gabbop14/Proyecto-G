" use strict";

const nodemailer = require("nodemailer");

module.exports = (contacto) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "proyecto.g.form@gmail.com",
      pass: "ProyectoG42",
    },
  });

  const mailOptions = {
    from: `"${contacto.nombre}" <${contacto.email}>`,
    to: "g4briel.ruiz@gmail.com",
    subject: contacto.asunto,
    html: `
            <strong>Nombre:</strong> ${contacto.nombre} <br/>
            strong>E-mail:</strong> ${contacto.email} <br/>
            <strong>Mensaje:</strong> ${contacto.mensaje}
        `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
