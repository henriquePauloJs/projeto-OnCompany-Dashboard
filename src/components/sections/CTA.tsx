import { Button } from "../../components/ui/button"

export function CTA() {
    return (
        <section className="px-4 pb-24">
            <div className="mx-auto max-w-xl rounded-3xl bg-black p-8 text-center text-primary-foreground">
                <h2 className="text-2xl font-bold">
                    Pronto para escalar seu negócio?
                </h2>

                <p className="mt-3 text-sm opacity-90">
                    Fale com um especialista agora mesmo.
                </p>

                <Button
                    size="lg"
                    variant="secondary"
                    className="mt-6 w-full rounded-full"
                >
                    Quero uma estratégia
                </Button>
            </div>
        </section>
    )
}