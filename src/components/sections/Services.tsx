import { Card, CardContent } from "@/components/ui/card"


const services = [
    {
        title: "Tráfego Pago",
        description: "Anúncios que geram vendas previsíveis todos os dias."
    },
    {
        title: "Estratégia Digital",
        description: "Planejamento focado em crescimento real."
    },
    {
        title: "Tecnologia",
        description: "Sites, sistemas e automações que convertem."
    }
]

export function Services() {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-xl flex-col gap-6">
                <h2 className="text-2xl font-bold">
                    O que fazemos
                </h2>

                <div className="flex flex-col gap-4">
                    {services.map((service) => (
                        <Card key={service.title} className="rounded-2xl">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
