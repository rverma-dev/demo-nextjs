import getServerSession from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/app/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ name: session?.auth?.name ?? 'Not Logged In' });
}
