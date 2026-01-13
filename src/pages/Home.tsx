import { Clients } from "@/components/sections/Clients"
import { CTA } from "@/components/sections/CTA"
import { Hero } from "@/components/sections/Hero"
import { Premiun } from "@/components/sections/Premiun"
import { Proof } from "@/components/sections/Proof"
import { Services } from "@/components/sections/Services"

export function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col gap-20">
            <Hero />
            <Services />
            <Proof />
            <Clients />
            <CTA />
            <Premiun />
        </main>
    )
}
