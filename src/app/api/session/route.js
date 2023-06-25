import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import authOptions from '../../../lib/auth';

export async function GET(req) {
    const session = await getServerSession(authOptions);

    return NextResponse.json({
        authenticated: !!session,
        session
    })
}