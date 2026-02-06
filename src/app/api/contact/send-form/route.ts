import { NextRequest, NextResponse } from 'next/server';
import { sendToMonica, sendConfirmationToUser } from '@/utils/mail';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        console.log('Processing contact form submission:', {
            name: body.name,
            email: body.email,
            service: body.service
        });

        // Send email to Monica
        await sendToMonica({
            name: body.name,
            email: body.email,
            phone: body.phone || '',
            service: body.service || 'general',
            message: body.message
        });

        // Send confirmation to user
        await sendConfirmationToUser(body.email, body.name);

        return NextResponse.json(
            {
                success: true,
                message: 'Emails sent successfully'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error in contact form API:', error);

        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again later.',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

// Optional: Add GET method for testing
export async function GET(request: NextRequest) {
    return NextResponse.json(
        {
            message: 'Contact form API is working',
            endpoints: {
                POST: '/api/contact/send-form - Submit contact form'
            },
            required_fields: ['name', 'email', 'message'],
            optional_fields: ['phone', 'service']
        },
        { status: 200 }
    );
}