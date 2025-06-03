"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "./ui/typewriter";
import { useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import ScrollDownIndicator from "./scroll-down-indicator";
import { EarlyAccessDialog } from "./ui/early-access-dialog";
import { trackEarlyAccessClick } from "@/lib/gtag";

export default function HeroSection() {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background com duas cores */}
        <div className="absolute inset-0 z-0">
          <div className="h-2/3 hywork-banner-bg"></div>
          <div className="h-1/3 bg-white dark:bg-gray-900"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Texto centralizado */}
            <motion.div className="text-white mt-20 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <Typewriter
                text={t("hero.title") as string}
                speed={40}
                delay={500}
                className="inline-block text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-wide"
              />
              <motion.p
                className="text-lg mb-8 tracking-widest font-extralight max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                {t("hero.subtitle")}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                <button
                  onClick={() => {
                    setIsDialogOpen(true);
                    trackEarlyAccessClick("hero");
                  }}
                  className="bg-[#104a74] dark:bg-[#1a6ca0] text-white font-medium py-2 px-6 rounded-md hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90 transition-all"
                >
                  {t("hero.cta")}
                </button>
              </motion.div>
            </motion.div>

            {/* Imagem na intersecção das cores */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative w-full max-w-6xl"
            >
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
                <Image src="/gif.gif" alt="HyWork Platform Interface" width={1920} height={1080} className="rounded-lg shadow-xl w-full h-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <EarlyAccessDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
