import * as AvatarPrimitive from "@radix-ui/react-avatar";

interface TestimonialCardProps {
    name: string;
    handle: string;
    avatar: string;
    text: string;
}

export function TestimonialCard({
    name,
    handle,
    avatar,
    text,
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 bg-[#141414] border border-[#1e1e1e] rounded-lg min-w-[320px] max-w-[380px] hover:border-[#D4A017]/30 transition-all duration-300">
            <div className="flex items-center gap-4">
                <AvatarPrimitive.Root className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center overflow-hidden rounded-full border-2 border-[#D4A017]/30">
                    <AvatarPrimitive.Image
                        src={avatar}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                    <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-[#2a2a2a] text-[#D4A017] text-sm font-bold">
                        {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarPrimitive.Fallback>
                </AvatarPrimitive.Root>
                <div>
                    <p
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {name}
                    </p>
                    <p className="text-[#D4A017] text-xs">{handle}</p>
                </div>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
        </div>
    );
}
