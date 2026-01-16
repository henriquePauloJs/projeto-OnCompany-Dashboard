import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "../animations/fadeIn"

export function Premiun() {
    return (
        <section className="px-4">
            <FadeIn direction="up">
                <Card className="relative mt-20 rounded-3xl bg-black p-8 border border-yellow-500/30 shadow-[0_0_40px_-10px_rgba(234,179,8,0.35)]">
                    <div className="flex flex-col gap-6">

                        {/* Foto - Aparece primeiro com um efeito de escala suave */}
                        <FadeIn direction="up" delay={0.1}>
                            <div className="flex justify-center">
                                <div className="h-28 w-28 rounded-full border border-yellow-500/40 flex items-center justify-center text-white bg-yellow-500/5">
                                    (FOTO DE ALEFF)
                                </div>
                            </div>
                        </FadeIn>

                        {/* Título com gradiente Premium */}
                        <FadeIn direction="up" delay={0.2}>
                            <h2 className="text-center text-3xl font-semibold uppercase bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                SUA EMPRESA PRECISA DE ATENÇÃO EXCLUSIVA?
                            </h2>
                        </FadeIn>

                        {/* Textos de descrição */}
                        <div className="space-y-4">
                            <FadeIn direction="up" delay={0.3}>
                                <p className="text-center text-white/90 leading-relaxed">
                                    O Plano Premium foi criado para empresas que não buscam apenas presença digital,
                                    mas crescimento estruturado, previsível e escalável.
                                </p>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.4}>
                                <p className="text-center text-white/80 leading-relaxed text-sm">
                                    Aqui, não entregamos serviços genéricos — entregamos resultado, clareza e controle do crescimento.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Lista Premium com entrada em cascata (Stagger) */}
                        <ul className="mx-auto mt-4 max-w-md space-y-3 text-white">
                            {[
                                "Estratégia digital personalizada",
                                "Gestão avançada de tráfego pago",
                                "Desenvolvimento e otimização de tecnologia",
                                "Acompanhamento estratégico contínuo",
                                "Foco total em performance e escala",
                            ].map((item, i) => (
                                <FadeIn key={item} direction="right" delay={0.5 + i * 0.1}>
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>

                        {/* Botão de Ação Final */}
                        <FadeIn direction="up" delay={1.1}>
                            <div className="mt-6 flex justify-center">
                                <Button
                                    asChild
                                    className="rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 px-8 py-6 text-sm font-bold text-black hover:opacity-90 transition-all hover:scale-105"
                                >
                                    <a
                                        href="https://wa.me/5573999973035?text=Olá!%20Gostaria%20de%20conversar%20sobre%20o%20Plano%20Premium%20da%20ONCOMPANY."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CONTRATE O ONCOMPANY PREMIUM
                                    </a>
                                </Button>
                            </div>
                        </FadeIn>

                    </div>
                </Card>
            </FadeIn>
        </section>
    )
}