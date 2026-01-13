import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Premiun() {
    return (
        <section className="px-4">

            <Card className="
    relative mt-20 rounded-3xl bg-black p-8
    border border-yellow-500/30
    shadow-[0_0_40px_-10px_rgba(234,179,8,0.35)]
">
                <div className="flex flex-col gap-6">

                    {/* Foto */}
                    <div className="flex justify-center">
                        <div className="h-28 w-28 rounded-full border border-yellow-500/40 flex items-center justify-center text-white">
                            (FOTO DE ALEFF)
                        </div>
                    </div>

                    {/* Título */}
                    <h2 className="text-center text-3xl font-semibold uppercase
            bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500
            bg-clip-text text-transparent">
                        SUA EMPRESA PRECISA DE ATENÇÃO EXCLUSIVA?
                    </h2>

                    <p className="text-center text-white/90 leading-relaxed">
                        O Plano Premium foi criado para empresas que não buscam apenas presença digital,
                        mas crescimento estruturado, previsível e escalável. Atuamos de forma exclusiva,
                        com estratégias personalizadas, acompanhamento próximo e soluções completas que
                        unem tráfego pago avançado, estratégia digital de alto nível e tecnologia sob medida.
                    </p>

                    <p className="text-center text-white/80 leading-relaxed">
                        Cada projeto recebe atenção total, decisões baseadas em dados e execução focada
                        em performance. Aqui, não entregamos serviços genéricos — entregamos resultado,
                        clareza e controle do crescimento.
                    </p>

                    {/* Lista Premium */}
                    <ul className="mx-auto mt-4 max-w-md space-y-3 text-white">
                        {[
                            "Estratégia digital personalizada",
                            "Gestão avançada de tráfego pago",
                            "Desenvolvimento e otimização de tecnologia",
                            "Acompanhamento estratégico contínuo",
                            "Foco total em performance e escala",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex justify-center">
                        <Button
                            asChild
                            className="rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 px-8 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                        >
                            <a
                                href="https://wa.me/5573999973035?text=Olá!%20Gostaria%20de%20conversar%20sobre%20o%20Plano%20Premium%20da%20ONCOMPANY."
                                className="
          rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600
          px-10 py-4 text-sm font-semibold text-black
          transition hover:scale-105 hover:opacity-95"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CONTRATE O ONCOMPANY PREMIUM
                            </a>
                        </Button>
                    </div>

                </div>
            </Card>
        </section>
    )
}


