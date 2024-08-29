import { NextResponse } from 'next/server';

export async function GET(req) {
  // Fetch the IP address from an external service (ipify)
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  // Return the IP address as a JSON response
  return NextResponse.json({ ip: data.ip });
}
