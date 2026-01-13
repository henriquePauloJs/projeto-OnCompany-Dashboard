import { Button } from "../ui/button";


export function Hero() {
    return (
        <section className="px-4 pt-16">
            <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
                <span className="text-sm font-semibold uppercase text-muted-foreground">
                    Cresça com estratégia
                </span>

                <h1 className="text-4xl font-bold leading-tight tracking-tight uppercase">
                    Transformamos negócios em
                    <span className="text-primary"> máquinas de crescimento</span>
                </h1>

                <p className="text-base text-muted-foreground">
                    Estratégia, tráfego e tecnologia para empresas que querem escalar de
                    verdade.
                </p>

                <div>
                    <Button
                        asChild
                        className="rounded-xl text-lg text-green-500"
                    >
                        <a
                            href="https://wa.me/5573999973035?text=Olá!%20Gostaria%20de%20contratar%20a%20ONCOMPANY"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CONTRATE A ONCOMPANY
                        </a>
                    </Button>
                </div>

            </div>
        </section>
    )
}
