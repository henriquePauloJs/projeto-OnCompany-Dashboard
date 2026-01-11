import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Services } from "@/components/sections/Services";


export function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex flex-col gap-20">
                <Hero />
                <Services />
                <Proof />
                <CTA />
            </main>
        </div>
    )
}
