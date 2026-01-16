import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "../animations/fadeIn"

const services = [
    {
        title: "Tráfego Pago",
        description: "Anúncios estratégicos criados para gerar vendas todos os dias. Atuamos com dados, testes e otimizações constantes para transformar investimento em resultados previsíveis, escaláveis e mensuráveis."
    },
    {
        title: "Estratégia Digital",
        description: "Planejamento inteligente baseado em objetivos reais de negócio. Unimos posicionamento, funil e métricas para criar estratégias que geram crescimento consistente e decisões seguras."
    },
    {
        title: "Tecnologia",
        description: "Desenvolvemos sites, sistemas e automações pensados para converter. Tecnologia aplicada ao negócio, com foco em performance, experiência do usuário e eficiência operacional."
    }
]

export function Services() {
    return (
        <section className="px-2">
            <div className="mx-auto flex flex-col gap-6">
                {/* O título da seção aparece primeiro */}
                <FadeIn direction="up">
                    <h2 className="text-2xl font-bold uppercase">
                        O QUE FAZEMOS ?
                    </h2>
                </FadeIn>

                <div className="flex flex-col gap-4">
                    {services.map((service, i) => (
                        /* Cada card terá um delay baseado na sua posição (index) */
                        <FadeIn key={service.title} direction="up" delay={i * 0.1}>
                            <Card className="rounded-2xl bg-linear-to-r from-green-400 to-green-600 text-black">
                                <CardContent className="pt-6 px-6 pb-6"> {/* Ajustei pt-6 para o título não ficar colado no topo do card */}
                                    <div className="flex flex-col">
                                        <h3 className="m-0 text-lg font-extrabold uppercase">
                                            {service.title}
                                        </h3>
                                        <p className="mt-4 text-lg text-white font-bold">
                                            {service.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}