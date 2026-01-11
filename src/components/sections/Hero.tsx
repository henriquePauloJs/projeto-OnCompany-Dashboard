import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

export function Hero() {
    return (
        <section className="px-4 pt-16">
            <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
                <span className="text-sm font-semibold uppercase text-muted-foreground">
                    Cresça com estratégia
                </span>

                <h1 className="text-4xl font-bold leading-tight tracking-tight">
                    Transformamos negócios em
                    <span className="text-primary"> máquinas de crescimento</span>
                </h1>

                <p className="text-base text-muted-foreground">
                    Estratégia, tráfego e tecnologia para empresas que querem escalar de
                    verdade.
                </p>

                <Card>
                    <CardContent className="flex flex-col gap-3 pt-6">
                        <Button size="lg" className="rounded-full">
                            Quero crescer meu negócio
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full"
                        >
                            Ver como funciona
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
