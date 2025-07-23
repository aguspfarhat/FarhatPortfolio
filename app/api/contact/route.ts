import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD!,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'aguspfarhat02@gmail.com',
            subject: `Nwe message from ${name}`,
            text: message,
            html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br>${message}</p>`,
        });

        return new Response(JSON.stringify({ message: 'Message sent succesfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar mail', error);
        return new Response(JSON.stringify({ message: 'Error sending the message' }), { status: 500 });
    }
}
