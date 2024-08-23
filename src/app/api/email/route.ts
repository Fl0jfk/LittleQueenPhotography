import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, telephone, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL,
        pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
      },
    });
  
    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_MY_EMAIL,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: `Tu as reçu un mail de ${name}, son email est : ${email} depuis LittleQueenPhotography.`,
      text: `Son numéro de tél est : ${telephone} et son message est : ${message}`,
    };
  
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email envoyé, nous répondrons rapidement !');
          } else {
            reject(`Nous n'avons pas réussi à envoyer votre message. :( Erreur = ${err.message}`);
          }
        });
      });
  
    try {
      await sendMailPromise();
      return NextResponse.json({ message: 'Email envoyé' });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
}