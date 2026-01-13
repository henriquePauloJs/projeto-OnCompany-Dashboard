import { Card, CardContent } from "@/components/ui/card"

const clients = [
    { name: "Empresa Alpha" },
    { name: "Empresa Beta" },
    { name: "Empresa Gamma" },
    { name: "Empresa Delta" },
]

export function Clients() {
    return (
        <section className="px-4">
            <Card className="bg-black rounded-3xl p-8">

                <div className="mx-auto flex max-w-xl flex-col gap-6">
                    <h2 className="text-2xl font-bold text-green-500 uppercase mb-4">
                        QUEM CONFIA NO NOSSO TRABALHO
                    </h2>

                    <p className="text-lg text-white mb-6 font-semibold">
                        Já ajudamos empresas de diferentes segmentos a crescer no digital,
                        unindo estratégia, tráfego pago e tecnologia para gerar resultados reais.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        {clients.map((client) => (
                            <Card
                                key={client.name}
                                className="bg-green-600 flex items-center justify-center rounded-2xl "
                            >
                                <CardContent className="p-6">
                                    <span className="text-sm font-semibold text-black uppercase">
                                        {client.name}
                                    </span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Card>
        </section>
    )
}
