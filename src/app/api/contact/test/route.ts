import { NextRequest, NextResponse } from 'next/server';
import { testEmail } from '@/utils/mail';

export async function GET(request: NextRequest) {
    try {
        const result = await testEmail();

        if (result.success) {
            return NextResponse.json(
                {
                    success: true,
                    message: 'Test email sent successfully',
                    messageId: result.messageId
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to send test email',
                    details: result.error
                },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Error in test email API:', error);

        return NextResponse.json(
            {
                error: 'Failed to send test email',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}