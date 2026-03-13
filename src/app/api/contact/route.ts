import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

        if (!webhookUrl || webhookUrl === "https://your-webhook-url.com") {
            // Development mode - just log and return success
            console.log("Form submission received:", body);
            return NextResponse.json({
                success: true,
                message: "Form received (webhook not configured)",
            });
        }

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error("Webhook request failed");
        }

        return NextResponse.json({
            success: true,
            message: "Form submitted successfully",
        });
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to submit form" },
            { status: 500 }
        );
    }
}
