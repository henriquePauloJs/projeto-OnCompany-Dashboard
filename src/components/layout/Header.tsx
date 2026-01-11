import { Button } from "@/components/ui/button"
export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
                <span className="text-lg font-bold">OnCompany</span>

                <Button size="sm" className="rounded-full">
                    Fale conosco
                </Button>
            </div>
        </header>
    )
}
