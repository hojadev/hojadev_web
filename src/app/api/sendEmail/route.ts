import { ContactForm } from '@/lib/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer"

export async function POST(req: NextRequest){
    if(req.method === "POST"){
        const body = await req.json();
        console.log(body)

        console.log(body.nombre)

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Puedes usar cualquier servicio, como Gmail, Outlook, etc.
            auth: {
                user: process.env.EMAIL_USER, // Tu correo electrónico
                pass: process.env.EMAIL_PASS, // Tu contraseña o app password (si usas 2FA)
            },
        });

        try{

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Nuevo mensaje de ${body.nombre}`,
                text: body.message,
                html: `
                <p>Tienes un nuevo mensaje de contacto</p>
                <p><strong>Nombre:</strong> ${body.nombre}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Asunto:</strong> ${body.asunto}</p>
                <p><strong>Mensaje:</strong><br/>${body.message}</p>`,
            });
            console.log("si")

            return NextResponse.json({ success: true });

        } catch(err) {
            console.error(err)
            return NextResponse.json({message:"Ha habido un error"}, {status:500})
        }
    } else {
        return NextResponse.json({message:"No existe ese metodo"}, {status:500})
    }
    
} 
