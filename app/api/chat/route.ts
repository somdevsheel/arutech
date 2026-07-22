import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        content: "Hi! I'm Arut, Arutech's assistant. Our AI chat is being set up. In the meantime, please reach out via the contact form or email hello@arutechconsultancy.com — we respond within 24 hours!",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini history format (all except last user message)
    const recent = messages.slice(-10);
    const history = recent.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history });
    const lastMessage = recent[recent.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const content = result.response.text();

    return NextResponse.json({ content });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "";
    console.error("Chat API error:", msg);
    if (msg.includes("429") || msg.includes("quota")) {
      return NextResponse.json({
        content: "I'm getting a lot of requests right now — please try again in a moment, or reach out directly at hello@arutechconsultancy.com.",
      });
    }
    return NextResponse.json({
      content: "I'm having a momentary issue. Please try again or contact us at hello@arutechconsultancy.com.",
    });
  }
}
