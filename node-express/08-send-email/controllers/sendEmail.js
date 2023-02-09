const nodemailer = require('nodemailer');

const sendEmail = async (_req, res) => {
  // Crée un objet transporteur réutilisable en utilisant le transport SMTP par défaut
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'samson.mitchell@ethereal.email',
      pass: 'GpZkgnEgxX2JS2VJUx'
    }
  });

  // Envoie un mail avec un objet de transport défini
  const info = await transporter.sendMail({
    from: '"ForEach Academy 👻" <foreach-academy@example.com>', // adresse de l'envoyeur
    to: 'bar@example.com', // liste des destinataires
    subject: 'Hello ✔', // sujet du mail
    html: '<h1>Email envoyé avec Node.Js</h1>' // html
  });

  res.json(info);
};

module.exports = sendEmail;
