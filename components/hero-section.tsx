"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "./ui/typewriter";
import { useRef } from "react";
import { useLanguage } from "@/i18n/language-context";

export default function HeroSection() {
  const ref = useRef(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative hywork-banner-bg py-16 md:py-24 overflow-hidden min-h-[90vh] flex items-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative hidden md:block md:absolute right-0 bottom-0"
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
          <Image src="./hero.png" alt="HyWork Platform Interface" width={800} height={800} className="rounded-tl-3xl shadow-xl" />
        </motion.div>
      </motion.div>
      <motion.div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10" style={{ opacity, y }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight h-[160px] md:h-[200px]">
              <Typewriter text={t("hero.title") as string} speed={40} delay={500} className="inline-block" />
            </h1>
            <motion.p className="text-lg mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}>
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              <button className="bg-[#104a74] dark:bg-[#1a6ca0] text-white font-medium py-2 px-6 rounded-md hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90 transition-all">
                {t("hero.cta")}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative block md:hidden"
          >
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
              <Image src="./hero.png" alt="HyWork Platform Interface" width={600} height={400} className="rounded-lg shadow-xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <p className="text-sm mb-2">{t("hero.scrollText")}</p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
