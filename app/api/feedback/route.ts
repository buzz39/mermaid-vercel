import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, features } = await req.json();

    const body = [
      features?.length ? `Features requested: ${features.join(', ')}` : '',
      text ? `\nAdditional feedback:\n${text}` : '',
      `\nSubmitted: ${new Date().toISOString()}`,
    ].filter(Boolean).join('\n');

    await fetch('https://api.agentmail.to/v0/inboxes/oggy@agentmail.to/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AGENTMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        to: [{ email: 'thakurg39@gmail.com', name: 'Gagan Thakur' }],
        subject: `🔔 Mermaid Editor Feature Request: ${features?.join(', ') || 'Custom'}`,
        text: body,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
