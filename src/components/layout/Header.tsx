import { Button } from "@/components/ui/button"



export function Header() {

    return (
        <header className="sticky top-0 z-50 w-full bg-green-400 text-black">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                <span className="text-lg font-bold">OnCompany</span>

                <Button
                    size="sm"
                    className="rounded-full bg-white text-black hover:bg-white/90"
                >
                    Fale conosco
                </Button>
            </div>
        </header>
    )
}
