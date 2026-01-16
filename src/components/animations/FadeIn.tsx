"use strict";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const FadeIn = ({ children, delay = 0, direction }: FadeInProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
                x: direction === "left" ? 40 : direction === "right" ? -40 : 0
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // "once: true" evita que a animação repita ao subir a página
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
};