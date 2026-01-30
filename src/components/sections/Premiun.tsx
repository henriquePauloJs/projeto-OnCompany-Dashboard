import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "../animations/fadeIn";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Premiun() {
  const [openModal, setOpenModal] = useState(false);
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [revenue, setRevenue] = useState("");
  const [email, setEmail] = useState("");
  const isFormValid =
    company.trim() &&
    contact.trim() &&
    phone.trim() &&
    revenue.trim() &&
    email.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    const message = `
🚀 *Solicitação – OnCompany Premium*

🏢 Empresa: ${company}
👤 Contato: ${contact}
📞 Telefone: ${phone}
💰 Faturamento Mensal: ${revenue}
📧 Email: ${email}
  `;

    const whatsappUrl = `https://wa.me/5573999973035?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
    setOpenModal(false);
  };

  return (
    <>
      <section className="px-4">
        <FadeIn direction="up">
          <Card className="relative rounded-3xl bg-black p-8 md:p-12 border border-yellow-500/30 shadow-[0_0_40px_-10px_rgba(234,179,8,0.35)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* COLUNA ESQUERDA — IMAGEM */}
              <FadeIn direction="up" delay={0.1}>
                <div className="relative flex justify-center md:justify-start">
                  <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="h-[420px] w-[320px] bg-yellow-500/20 blur-3xl rounded-full" />
                  </div>

                  <div className="relative h-[420px] w-[320px] rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(234,179,8,0.6)] border border-yellow-500/30">
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <img
                      src="/src/assets/Aleff2.webp"
                      alt="Aleff"
                      className="h-full w-full object-cover object-top brightness-110 contrast-105"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* COLUNA DIREITA — CONTEÚDO */}
              <div className="flex flex-col gap-6">
                <FadeIn direction="up" delay={0.2}>
                  <h2 className="text-center md:text-left text-3xl lg:text-4xl font-semibold uppercase bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    SUA EMPRESA PRECISA DE ATENÇÃO EXCLUSIVA?
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <p className="text-white/90 leading-relaxed text-center md:text-left">
                    O Plano Premium foi criado para empresas que não buscam
                    apenas presença digital, mas crescimento estruturado,
                    previsível e escalável.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                  <p className="text-white/80 leading-relaxed text-sm text-center md:text-left">
                    Aqui, não entregamos serviços genéricos — entregamos
                    resultado, clareza e controle do crescimento.
                  </p>
                </FadeIn>

                <ul className="mt-4 space-y-3 text-white">
                  {[
                    "Estratégia digital personalizada",
                    "Gestão avançada de tráfego pago",
                    "Desenvolvimento e otimização de tecnologia",
                    "Acompanhamento estratégico contínuo",
                    "Foco total em performance e escala",
                  ].map((item, i) => (
                    <FadeIn key={item} direction="right" delay={0.5 + i * 0.1}>
                      <li className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                <FadeIn direction="up" delay={1.1}>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <Button
                      className="rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 px-10 py-6 text-sm font-bold text-black transition-all hover:scale-105"
                      onClick={() => setOpenModal(true)}
                    >
                      CONTRATE O ONCOMPANY PREMIUM
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* MODAL SHADCN */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Solicitar OnCompany Premium</DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para entrarmos em contato.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nome da Empresa</Label>
              <Input
                id="company"
                placeholder="Ex: OnCompany Digital"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="contact">Nome</Label>
              <Input
                id="contact"
                placeholder="Ex: João Silva"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue">Faturamento Mensal</Label>
              <Input
                id="revenue"
                placeholder="Ex: R$ 100.000,00"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="contato@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button
              disabled={!isFormValid}
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold"
            >
              Enviar Solicitação
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
