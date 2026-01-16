import { FadeIn } from "../animations/fadeIn";

export function Proof() {
    return (
        <section className="px-4">
            <FadeIn direction="up">
                <div className="mx-auto rounded-2xl border bg-black p-6 text-center uppercase">
                    <p className="text-lg text-white font-semibold">
                        Já ajudamos empresas a faturar mais de
                    </p>

                    <FadeIn direction="up" delay={0.2}>
                        <strong className="mt-6 text-green-500 block text-4xl font-black">
                            R$ 10 milhões
                        </strong>
                    </FadeIn>

                    <p className="mt-6 text-lg text-white font-semibold">
                        usando estratégia e execução de verdade.
                    </p>
                </div>
            </FadeIn>
        </section>
    )
}