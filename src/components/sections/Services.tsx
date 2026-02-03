import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../animations/fadeIn";

const services = [
  {
    title: "Tráfego Pago",
    description:
      "Anúncios estratégicos criados para gerar vendas todos os dias. Atuamos com dados, testes e otimizações constantes para transformar investimento em resultados previsíveis, escaláveis e mensuráveis.",
  },
  {
    title: "Estratégia Digital",
    description:
      "Planejamento inteligente baseado em objetivos reais de negócio. Unimos posicionamento, funil e métricas para criar estratégias que geram crescimento consistente e decisões seguras.",
  },
  {
    title: "Tecnologia",
    description:
      "Desenvolvemos sites, sistemas e automações pensados para converter. Tecnologia aplicada ao negócio, com foco em performance, experiência do usuário e eficiência operacional.",
  },
  {
    title: "Produção de Conteúdo",
    description:
      "Criamos vídeos estratégicos que fortalecem sua marca, geram autoridade e aumentam suas vendas. Do roteiro à edição final, entregamos conteúdo de alto impacto para redes sociais, anúncios e sites.",
  },
  {
    title: "Treinamento de Equipe Comercial",
    description:
      "Capacitamos sua equipe para vender mais, com processos claros, abordagem estratégica e técnicas modernas de negociação. Transformamos vendedores comuns em times de alta performance.",
  },
];

export function Services() {
  return (
    <section className="px-4 lg:px-16 ">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <FadeIn direction="up">
          <h2 className="mb-12 text-2xl lg:text-4xl font-extrabold uppercase">
            O que fazemos
          </h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {services.map((service, i) => (
            <FadeIn key={service.title} direction="up" delay={i * 0.1}>
              <Card
                className="
                h-full
                rounded-3xl
                bg-linear-to-br from-green-400 to-green-600
                text-black
                transition
                lg:hover:scale-[1.03]
                lg:hover:shadow-2xl
              "
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-extrabold uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-6 text-base lg:text-lg text-white font-semibold">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
