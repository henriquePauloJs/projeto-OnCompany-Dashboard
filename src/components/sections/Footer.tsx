import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

                {/* Informações da empresa */}
                <div className="text-sm space-y-1">
                    <p>
                        <strong>CNPJ:</strong> 12.345.678/0001-90
                    </p>
                    <p>
                        <strong>Endereço:</strong> Rua Exemplo, 123 – Centro, Teixeira de Freitas – BA
                    </p>
                </div>

                {/* Redes sociais */}
                <div className="flex gap-6">
                    <a
                        href="https://wa.me/5573999973035"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="hover:text-green-500 transition"
                    >
                        <FaWhatsapp size={28} />
                    </a>

                    <a
                        href="https://www.instagram.com/oncompanymarketingbr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-pink-500 transition"
                    >
                        <FaInstagram size={28} />
                    </a>

                    <a
                        href="https://www.tiktok.com/@suaempresa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="hover:text-white transition"
                    >
                        <FaTiktok size={28} />
                    </a>
                </div>

                {/* Direitos autorais */}
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
