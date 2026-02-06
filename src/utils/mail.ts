import nodemailer from 'nodemailer';

// Define types for email options
export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

// Create transporter for sending emails
const createTransporter = () => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com', // Use your SMTP host
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
};

// Send email to Monica
export const sendToMonica = async (formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}) => {
    try {
        const transporter = createTransporter();

        const serviceLabels: Record<string, string> = {
            'general': 'General Inquiry',
            'image-management': 'Image Management',
            'life-coaching': 'Life Coaching',
            'spiritual-upliftment': 'Spiritual Upliftment',
            'past-life-regression': 'Past Life Regression',
            'workshop': 'Workshop Booking',
            'corporate': 'Corporate Training'
        };

        const serviceLabel = serviceLabels[formData.service] || 'General Inquiry';

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="background: linear-gradient(135deg, #0ea5e9, #0369a1); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                        <span style="color: white; font-size: 32px; font-weight: bold;">A</span>
                    </div>
                    <h1 style="color: #111827; margin: 0 0 10px 0;">New Contact Form Submission</h1>
                    <p style="color: #6b7280; margin: 0;">From Aaristo Consulting Website</p>
                </div>
                
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                    <h2 style="color: #111827; margin-top: 0;">Contact Details</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                            <td style="padding: 8px 0; color: #111827;">${formData.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                            <td style="padding: 8px 0; color: #0ea5e9;">
                                <a href="mailto:${formData.email}" style="color: #0ea5e9; text-decoration: none;">${formData.email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                            <td style="padding: 8px 0; color: #111827;">${formData.phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;"><strong>Service:</strong></td>
                            <td style="padding: 8px 0; color: #111827;">${serviceLabel}</td>
                        </tr>
                    </table>
                </div>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                    <h2 style="color: #111827; margin-top: 0;">Message</h2>
                    <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                </div>
                
                <div style="text-align: center; color: #6b7280; font-size: 14px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p>This message was sent from the contact form on <a href="https://aaristo.com" style="color: #0ea5e9; text-decoration: none;">aaristo.com</a></p>
                    <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Aaristo Consulting & Training</p>
                </div>
            </div>
        `;

        const text = `
New Contact Form Submission - Aaristo Consulting

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${serviceLabel}

Message:
${formData.message}

---
This message was sent from the contact form on aaristo.com
`;

        const mailOptions = {
            from: `"Aaristo Website" <${process.env.SMTP_MAIL}>`,
            to: 'monica@aaristo.com',
            subject: `New Contact Form: ${formData.name} - ${serviceLabel}`,
            text: text,
            html: html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent to Monica:', info.messageId);
        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('Error sending email to Monica:', error);
        throw error;
    }
};

// Send confirmation email to user
export const sendConfirmationToUser = async (userEmail: string, userName: string) => {
    try {
        const transporter = createTransporter();

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #111827; margin: 0 0 10px 0;">Thank You for Contacting Us!</h1>
                    <p style="color: #6b7280; margin: 0;">Your message has been received</p>
                </div>
                
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                    <h2 style="color: #111827; margin-top: 0;">Hi ${userName},</h2>
                    
                    <p style="color: #374151; line-height: 1.6;">
                        Thank you for reaching out to Aaristo Consulting & Training. We've received your message and will get back to you within 24 hours.
                    </p>
                    
                    <p style="color: #374151; line-height: 1.6;">
                        In the meantime, you can:
                    </p>
                    
                    <ul style="color: #374151; padding-left: 20px; line-height: 1.6;">
                        <li>Explore our <a href="https://aaristo.com/services" style="color: #0ea5e9; text-decoration: none;">services</a></li>
                        <li>Check out upcoming <a href="https://aaristo.com/workshops" style="color: #0ea5e9; text-decoration: none;">workshops</a></li>
                        <li>Read client <a href="https://aaristo.com/testimonials" style="color: #0ea5e9; text-decoration: none;">testimonials</a></li>
                    </ul>
                </div>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
                    <h3 style="color: #111827; margin-top: 0;">Need immediate assistance?</h3>
                    <p style="color: #374151; margin-bottom: 20px;">
                        Call us at: <a href="tel:+919823064999" style="color: #0ea5e9; text-decoration: none;">+91 98230 64999</a>
                    </p>
                    <a href="https://calendly.com/aaristo/30min" style="display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                        Book a Discovery Call
                    </a>
                </div>
                
                <div style="text-align: center; color: #6b7280; font-size: 14px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p><strong>Monica Bansal</strong><br>
                    Founder & Lead Consultant<br>
                    Aaristo Consulting & Training</p>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 5px 0;">B4, Emirates Hills, Somatne, Talegaon Dabhade, Mawal</p>
                        <p style="margin: 5px 0;">Old Mumbai Pune Highway, Pune - 410506</p>
                        <p style="margin: 5px 0;">Email: <a href="mailto:monica@aaristo.com" style="color: #0ea5e9; text-decoration: none;">monica@aaristo.com</a></p>
                        <p style="margin: 5px 0;">Phone: <a href="tel:+919823064999" style="color: #0ea5e9; text-decoration: none;">+91 98230 64999</a></p>
                    </div>
                    
                    <p>© ${new Date().getFullYear()} Aaristo Consulting & Training. All rights reserved.</p>
                </div>
            </div>
        `;

        const text = `
Thank You for Contacting Aaristo Consulting & Training!

Hi ${userName},

Thank you for reaching out to Aaristo Consulting & Training. We've received your message and will get back to you within 24 hours.

In the meantime, you can:
- Explore our services at: https://aaristo.com/services
- Check out upcoming workshops: https://aaristo.com/workshops
- Read client testimonials: https://aaristo.com/testimonials

Need immediate assistance?
Call us at: +91 98230 64999
Book a discovery call: https://calendly.com/aaristo/30min

--
Monica Bansal
Founder & Lead Consultant
Aaristo Consulting & Training

B4, Emirates Hills, Somatne, Talegaon Dabhade, Mawal
Old Mumbai Pune Highway, Pune - 410506
Email: monica@aaristo.com
Phone: +91 98230 64999

© ${new Date().getFullYear()} Aaristo Consulting & Training. All rights reserved.
`;

        const mailOptions = {
            from: `"Monica Bansal - Aaristo" <${process.env.SMTP_MAIL}>`,
            to: userEmail,
            subject: 'Thank You for Contacting Aaristo Consulting & Training',
            text: text,
            html: html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent to user:', info.messageId);
        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('Error sending confirmation email to user:', error);
        throw error;
    }
};

// Test email function
export const testEmail = async () => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: `"Aaristo Test" <${process.env.SMTP_MAIL}>`,
            to: 'monica@aaristo.com',
            subject: 'Test Email - Aaristo Contact System',
            text: 'This is a test email from the Aaristo contact system.',
            html: '<p>This is a test email from the Aaristo contact system.</p>',
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Test email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.error('Error sending test email:', error);
        return { success: false, error };
    }
};