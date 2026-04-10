import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, features, email, name } = await req.json();

    const body = [
      (name || email) ? `From: ${name || 'Anonymous'}${email ? ` <${email}>` : ''}` : '',
      features?.length ? `Features requested: ${features.join(', ')}` : '',
      text ? `\nAdditional feedback:\n${text}` : '',
      `\nSubmitted: ${new Date().toISOString()}`,
    ].filter(Boolean).join('\n');

    const response = await fetch('https://api.agentmail.to/v0/inboxes/oggy%40agentmail.to/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AGENTMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        to: ['thakurg39@gmail.com'],
        subject: `🔔 Mermaid Editor Feature Request: ${features?.join(', ') || 'Custom'}`,
        text: body,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('AgentMail error:', response.status, err);
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Feedback route error:', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
