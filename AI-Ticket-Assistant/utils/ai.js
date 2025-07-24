import { createAgent, gemini } from "@inngest/agent-kit"

const analyzeTicket = async (ticket) => {
    const supportAgent = createAgent({
        model: gemini({
            model: "gemini-1.5-flash-8b",
            apiKey: process.env.GEMINI_API_KEY,
        }),
        name: "AI Ticket Triage Assistant",
        system: ``
    });

    const response = await supportAgent.run(``)
}