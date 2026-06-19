import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are the virtual assistant for Fade District Barber Shop in Vancouver, BC. Help customers with questions about the shop. Be warm, friendly, and concise — keep replies to 2–3 short sentences max.

SHOP DETAILS
- Address: 422 W 8th Ave, Vancouver, BC V5Y 1N9
- Phone: 604-499-2551
- Hours: Mon–Fri 10am–8pm | Sat 10am–6pm | Sun 11am–5pm
- Walk-ins always welcome
- Book online: https://booksy.com/en-ca/10101_fresh-cuts-vancouver_barbershop_543637_vancouver#ba_s=sh_1

SERVICES & PRICES
- Regular Haircut — $35
- Skin Fade — $40
- Beard Trim (includes razor) — $30
- Hair + Beard — $55
- Skin Fade + Beard — $60
- Kids Cut — $30
- Hot Towel Shave — $35

RULES
- Only answer questions about Fade District Barber Shop.
- For anything unrelated, politely say you can only help with shop questions and suggest they call or visit.
- Never invent information not listed above.
- If asked about specific barbers by name, say we have a great team and invite them to call for more details.`;

export async function POST(request: Request) {
  console.log("[chat] ANTHROPIC_API_KEY exists:", !!process.env.ANTHROPIC_API_KEY, "| length:", process.env.ANTHROPIC_API_KEY?.length ?? 0);
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: "Chat unavailable — please call 604-499-2551." },
        { status: 503 },
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Invalid messages" }, { status: 400 });
    }

    const anthropic = new Anthropic();

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    });

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                new TextEncoder().encode(event.delta.text),
              );
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-store",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
