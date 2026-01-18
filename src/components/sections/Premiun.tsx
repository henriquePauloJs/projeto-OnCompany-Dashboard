import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "../animations/fadeIn"
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Premiun() {
    const [openModal, setOpenModal] = useState(false)
    const [company, setCompany] = useState("")
    const [contact, setContact] = useState("")
    const [phone, setPhone] = useState("")
    const [revenue, setRevenue] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `
🚀 *Solicitação – OnCompany Premium*

🏢 Empresa: ${company}
👤 Contato: ${contact}
📞 Telefone: ${phone}
💰 Faturamento Mensal: ${revenue}
📧 Email: ${email}
  `

        const whatsappUrl = `https://wa.me/5573999973035?text=${encodeURIComponent(
            message
        )}`

        window.open(whatsappUrl, "_blank")
        setOpenModal(false)
    }


    return (
        <>
            <section className="px-4">
                <FadeIn direction="up">
                    <Card className="relative mt-20 rounded-3xl bg-black p-8 border border-yellow-500/30 shadow-[0_0_40px_-10px_rgba(234,179,8,0.35)]">
                        <div className="flex flex-col gap-6">

                            {/* Foto */}
                            <FadeIn direction="up" delay={0.1}>
                                <div className="flex justify-center">
                                    <div className="h-28 w-28 rounded-full border border-yellow-500/40 flex items-center justify-center text-white bg-yellow-500/5">
                                        (FOTO DE ALEFF)
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Título */}
                            <FadeIn direction="up" delay={0.2}>
                                <h2 className="text-center text-3xl font-semibold uppercase bg-linear-to-r
                                 from-yellow-300 via-yellow-400 to-yellow-500 
                                 bg-clip-text text-transparent">
                                    SUA EMPRESA PRECISA DE ATENÇÃO EXCLUSIVA?
                                </h2>
                            </FadeIn>

                            {/* Descrição */}
                            <div className="space-y-4">
                                <FadeIn direction="up" delay={0.3}>
                                    <p className="text-center text-white/90 leading-relaxed">
                                        O Plano Premium foi criado para empresas que não buscam apenas presença digital,
                                        mas crescimento estruturado, previsível e escalável.
                                    </p>
                                </FadeIn>

                                <FadeIn direction="up" delay={0.4}>
                                    <p className="text-center text-white/80 leading-relaxed text-sm">
                                        Aqui, não entregamos serviços genéricos — entregamos resultado, clareza e controle do crescimento.
                                    </p>
                                </FadeIn>
                            </div>

                            {/* Lista */}
                            <ul className="mx-auto mt-4 max-w-md space-y-3 text-white">
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

                            {/* Botão */}
                            <FadeIn direction="up" delay={1.1}>
                                <div className="mt-6 flex justify-center">
                                    <Button
                                        className="rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 px-8 py-6 text-sm font-bold text-black hover:opacity-90 transition-all hover:scale-105"
                                        onClick={() => setOpenModal(true)}
                                    >
                                        CONTRATE O ONCOMPANY PREMIUM
                                    </Button>
                                </div>
                            </FadeIn>

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
                            />                        </div>

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
                            type="submit"
                            className="w-full mt-4 bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold"
                        >
                            Enviar Solicitação
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}