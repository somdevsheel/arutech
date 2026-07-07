import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Arut, the AI assistant for Arutech Consultancy Services LLP — an Indian technology consulting company.

About Arutech:
- Services: AI & ML Solutions, Cloud Deployment (AWS/GCP/Azure), React Web Development (Next.js), React Native Mobile Apps, Digital Marketing, Business Analytics
- Products: Freenoo (free PDF tools at freenoo.com), Instachat (Android social app), Moneto AI Terminal (coming soon)
- 50+ projects delivered, 4+ years experience, 99% client satisfaction
- Based in India, works with clients remotely worldwide
- Contact: hello@arutechconsultancy.com | Website: arutechconsultancy.com

Your role:
- Answer questions about Arutech's services, expertise, process, and products
- Be helpful, concise, and professional
- For pricing: say "Our pricing depends on project scope. Contact us for a free quote."
- For technical questions: give brief, accurate answers
- For anything outside Arutech's scope: politely redirect
- Keep responses under 3 sentences unless a detailed explanation is needed
- End responses with a gentle CTA toward the contact form when relevant`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: Message[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Fallback if no API key configured
    if (!apiKey) {
      return NextResponse.json({
        content: "Hi! I'm Arut, Arutech's assistant. Our AI chat is being set up. In the meantime, please reach out via the contact form or email hello@arutechconsultancy.com — we respond within 24 hours!",
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10), // last 10 messages for context
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Claude API error:", err);
      return NextResponse.json({
        content: "I'm having a momentary issue. Please try again or contact us at hello@arutechconsultancy.com.",
      });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ content });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
