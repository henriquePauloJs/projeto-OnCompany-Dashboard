import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="px-4 pt-16">
      <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
        <span className="text-3xl font-bold uppercase text-green-500">
          Cresça com estratégia
        </span>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight uppercase">
          Transformamos negócios em
          <span className="text-primary"> máquinas de crescimento</span>
        </h1>

        <p className="mt-4text-lg text-muted-foreground">
          Estratégia, tráfego e tecnologia para empresas que querem escalar de
          verdade.
        </p>

        <div>
          <Button
            asChild
            className="
      rounded-2xl
      px-10
      py-6
      text-xl
      font-bold
      text-green-500
      hover:scale-105
      transition-transform
    "
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
  );
}
