import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New message from ${name} — Portfolio`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #10b981;">New Contact Message</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold; width: 30%;">Name</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Email</td>
                            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Message</td>
                            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
                        </tr>
                    </table>
                    <p style="color: #888; font-size: 12px; margin-top: 24px;">Sent from your portfolio contact form.</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
