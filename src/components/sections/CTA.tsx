import { Button } from "@/components/ui/button";
import { FadeIn } from "../animations/fadeIn";

export function CTA() {
  return (
    <section className="px-4">
      <FadeIn direction="up">
        <div
          className="
                        mx-auto 
                        max-w-5xl 
                        rounded-3xl 
                        bg-black 
                        p-8 
                        md:p-12 
                        text-center 
                        text-primary-foreground
                    "
        >
          <FadeIn direction="up" delay={0.1}>
            <h2
              className="
                                text-2xl 
                                md:text-3xl 
                                lg:text-4xl 
                                font-bold
                            "
            >
              Pronto para escalar seu negócio?
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p
              className="
                                mt-3 
                                text-sm 
                                md:text-base 
                                opacity-90
                            "
            >
              Fale com um especialista agora mesmo.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="
                                mt-8
                                w-full 
                                md:w-auto
                                px-10
                                rounded-full 
                                font-bold 
                                uppercase
                                transition-transform
                                hover:scale-105
                            "
            >
              <a
                href="https://wa.me/5573999973035?text=Quero%20uma%20estratégia%20de%20crescimento%20para%20meu%20negócio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero uma estratégia
              </a>
            </Button>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
