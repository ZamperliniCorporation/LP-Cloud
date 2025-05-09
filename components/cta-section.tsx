"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "./ui/typewriter";
import { useLanguage } from "@/i18n/language-context";
import { useState } from "react";
import { EarlyAccessDialog } from "./ui/early-access-dialog";
import { trackEarlyAccessClick } from "@/lib/gtag";

export default function CTASection() {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section id="contato" className="py-20 bg-hywork-gray-lighter dark:bg-gray-800 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div className="max-w-5xl mx-auto text-center bg-white dark:bg-gray-900 p-16 shadow-sm rounded-xl relative rounded-br-[80px]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-hywork-blue dark:text-blue-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Typewriter text={t("cta.title") as string} speed={30} delay={300} className="inline-block" />
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                viewport={{ once: true }}
              >
                {t("cta.subtitle")}
              </motion.p>

              <motion.div>
                <Image src="./Artefacts-invert.png" alt="Artefacts" width={200} height={100} className="mx-auto absolute right-0 bottom-0" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => {
                    setIsDialogOpen(true);
                    trackEarlyAccessClick("cta");
                  }}
                  className="bg-[#104a74] dark:bg-[#1a6ca0] text-primary-foreground font-medium py-3 px-8 rounded-md hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90 transition-all"
                >
                  {t("cta.button")}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <EarlyAccessDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
