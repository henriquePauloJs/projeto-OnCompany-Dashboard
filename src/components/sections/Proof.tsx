import { FadeIn } from "../animations/fadeIn";

export function Proof() {
  return (
    <section className="px-4 lg:px-16 pt-0">
      <FadeIn direction="up">
        <div
          className="
          mx-auto
          max-w-7xl
          rounded-3xl
          border border-white/10
          bg-black
          p-8 lg:p-16
        "
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Texto esquerdo */}
            <div className="text-center lg:text-left uppercase">
              <p className="text-base lg:text-lg text-white font-semibold">
                Já ajudamos empresas a faturar mais de
              </p>

              <p className="mt-4 text-base lg:text-lg text-white font-semibold">
                usando estratégia e execução de verdade.
              </p>
            </div>

            {/* Número em destaque */}
            <FadeIn direction="up" delay={0.2}>
              <strong
                className="
                text-green-500
                text-5xl lg:text-7xl
                font-black
                whitespace-nowrap
              "
              >
                R$ 10 milhões
              </strong>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
