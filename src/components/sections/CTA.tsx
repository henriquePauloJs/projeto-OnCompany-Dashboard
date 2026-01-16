import { Button } from "../../components/ui/button"
import { FadeIn } from "../animations/fadeIn" // Ajuste o caminho se necessário

export function CTA() {
    return (
        <section className="px-4">
            <FadeIn direction="up">
                <div className="mx-auto rounded-3xl bg-black p-8 text-center text-primary-foreground">
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-2xl font-bold">
                            Pronto para escalar seu negócio?
                        </h2>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <p className="mt-3 text-sm opacity-90">
                            Fale com um especialista agora mesmo.
                        </p>
                    </FadeIn>

                    {/* Animamos o botão com um leve "pulo" (delay maior) para atrair o clique */}
                    <FadeIn direction="up" delay={0.3}>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="mt-6 w-full rounded-full font-bold uppercase"
                        >
                            Quero uma estratégia
                        </Button>
                    </FadeIn>
                </div>
            </FadeIn>
        </section>
    )
}