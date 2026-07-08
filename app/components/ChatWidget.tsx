"use client";

import { useEffect, useRef, useState } from "react";

const GREETING =
  "Hey! Ask me anything about our services, hours, or how to book. 💈";

const SUGGESTIONS = [
  "What are your hours?",
  "How much for a haircut?",
  "What should I get?",
  "How do I book?",
];

type Message = { role: "user" | "assistant"; content: string };

function ChatBubbleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ size = 5 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`h-${size} w-${size}`}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );
}

function renderContent(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\n)/).map((part, i) => {
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // True only while it's just the initial greeting — no user messages yet
  const showSuggestions =
    messages.length === 1 && messages[0].role === "assistant";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 160);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function sendMessage(quickText?: string) {
    const text = (quickText ?? input).trim();
    if (!text || loading) return;

    setInput("");
    const userMsg: Message = { role: "user", content: text };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setLoading(true);

    try {
      // Exclude the leading assistant greeting from the API call
      const apiMessages = newHistory.filter(
        (_, i) => !(i === 0 && newHistory[0].role === "assistant"),
      );

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok || !res.body) throw new Error("Bad response");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        if (firstChunk) {
          setLoading(false);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: chunk },
          ]);
          firstChunk = false;
        } else {
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            return [
              ...prev.slice(0, -1),
              { ...last, content: last.content + chunk },
            ];
          });
        }
      }

      if (firstChunk) setLoading(false);
    } catch {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting. Give us a call at 604-499-2551!",
        },
      ]);
    }
  }

  return (
    <>
      {/* ── Chat panel ──
          Mobile:  bottom-40 (160px) — clears the full-width Booksy banner
          sm+:     bottom-[86px]     — sits snug above the toggle button
          z-[60] keeps both panel and button above the Booksy banner (z-50)
      */}
      <div
        className={`fixed bottom-40 left-4 z-[60] w-80 max-w-[calc(100vw-2rem)] origin-bottom-left overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl transition-all duration-200 sm:bottom-[86px] ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        aria-label="Chat with Fade District"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-700 bg-zinc-800 px-4 py-3">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-amber-400">
              Fade District
            </p>
            <p className="text-xs text-zinc-400">Virtual Assistant</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
          >
            <XIcon size={4} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex h-60 flex-col gap-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] break-words rounded-2xl rounded-br-sm bg-amber-400 px-3 py-2 text-sm font-medium text-black">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-start">
                <div className="max-w-[85%] break-words rounded-2xl rounded-bl-sm bg-zinc-700 px-3 py-2 text-sm leading-relaxed text-white">
                  {renderContent(m.content)}
                </div>
              </div>
            ),
          )}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-zinc-700 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick-reply suggestions — shown only before the first user message */}
        {showSuggestions && (
          <div className="border-t border-zinc-800 px-3 pb-2 pt-2.5">
            <div className="grid grid-cols-2 gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-2 py-1.5 text-left text-xs leading-snug text-amber-300 transition-colors hover:bg-amber-400/20 active:bg-amber-400/30"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-zinc-700 p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about hours, services…"
              disabled={loading}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white placeholder-zinc-500 outline-none transition focus:ring-1 focus:ring-amber-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black transition-colors hover:bg-amber-300 disabled:opacity-40"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>

      {/* ── Toggle button ── z-[60] keeps it above the Booksy banner (z-50) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-amber-300"
      >
        <span
          className={`absolute transition-all duration-200 ${open ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-90 opacity-0"}`}
        >
          <XIcon size={5} />
        </span>
        <span
          className={`absolute transition-all duration-200 ${open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
        >
          <ChatBubbleIcon />
        </span>
      </button>
    </>
  );
}
