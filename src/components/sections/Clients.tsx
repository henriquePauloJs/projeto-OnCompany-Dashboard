import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../animations/fadeIn";
import ClaroLogo from "@/assets/ClaroLogo.png";
import PapitoLogo from "@/assets/PapitoLogo.png";
import InovaLogo from "@/assets/logoInova.png";
import LogoAttiva from "@/assets/LOGO-ATTIVA.png";
import LogoLiderBaterias from "@/assets/LiderBaterias.png";

const clients = [
  { name: "Empresa Alpha", logo: ClaroLogo, needsBg: false },
  { name: "Empresa Beta", logo: PapitoLogo, needsBg: false },
  { name: "Empresa Gamma", logo: InovaLogo, needsBg: true },
  { name: "Empresa Delta", logo: LogoAttiva, needsBg: true },
  { name: "Empresa Epsilon", logo: LogoLiderBaterias, needsBg: false },
];

export function Clients() {
  return (
    <section className="px-4 lg:px-16 ">
      <div className="mx-auto max-w-7xl">
        <FadeIn direction="up">
          <Card className="bg-black rounded-3xl p-8 lg:p-16 border-none">
            {/* Título */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-4xl font-extrabold text-green-500 uppercase mb-4">
                Quem confia no nosso trabalho
              </h2>

              <p className="text-base lg:text-lg text-white font-semibold max-w-3xl">
                Já ajudamos empresas de diferentes segmentos a crescer no
                digital, unindo estratégia, tráfego pago e tecnologia para gerar
                resultados reais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
              {clients.map((client, i) => (
                <FadeIn key={client.name} direction="up" delay={i * 0.08}>
                  <div
                    className={`
                        flex items-center justify-center
                        rounded-2xl
                        p-4 lg:p-6
                        transition
                        lg:hover:scale-105
                        ${client.needsBg ? "bg-white" : ""}
                        `}
                  >
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="h-24 lg:h-20 object-contain"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
