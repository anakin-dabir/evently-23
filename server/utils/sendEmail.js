import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: true,
			service: 'gmail',
			auth: {
				user: process.env.NODEMAILER_EMAIL,
				pass: process.env.NODEMAILER_PASSWORD,
			},
		});
		console.log(email);
		const a = await transporter.sendMail({
			from: process.env.NODEMAILER_EMAIL,
			to: email.email,
			subject: email.subject,
			text: email.text,
		});
		console.log(a);
		console.log('Email sent successfully');
	} catch (error) {
		console.log('Error sending email', error);
	}
};
