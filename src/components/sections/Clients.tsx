import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "../animations/fadeIn"

const clients = [
    { name: "Empresa Alpha" },
    { name: "Empresa Beta" },
    { name: "Empresa Gamma" },
    { name: "Empresa Delta" },
]

export function Clients() {
    return (
        <section className="px-4">
            <FadeIn direction="up">
                <Card className="bg-black rounded-3xl p-8 border-none">
                    <div className="mx-auto flex flex-col gap-6">

                        {/* Título e Descrição surgem juntos */}
                        <div>
                            <h2 className="text-2xl font-bold text-green-500 uppercase mb-4">
                                QUEM CONFIA NO NOSSO TRABALHO
                            </h2>

                            <p className="text-lg text-white mb-6 font-semibold">
                                Já ajudamos empresas de diferentes segmentos a crescer no digital,
                                unindo estratégia, tráfego pago e tecnologia para gerar resultados reais.
                            </p>
                        </div>

                        {/* Grid de Clientes com delay em cascata */}
                        <div className="grid grid-cols-1 gap-4">
                            {clients.map((client, i) => (
                                <FadeIn
                                    key={client.name}
                                    direction="up"
                                    delay={i * 0.1} // Cada cliente aparece 0.1s após o anterior
                                >
                                    <Card
                                        className="bg-green-600 flex items-center justify-center rounded-2xl border-none"
                                    >
                                        <CardContent className="p-6">
                                            <span className="text-sm font-semibold text-black uppercase">
                                                {client.name}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Card>
            </FadeIn>
        </section>
    )
}