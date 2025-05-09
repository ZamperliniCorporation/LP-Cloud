"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-context";
import { EarlyAccessDialog } from "./ui/early-access-dialog";
import { trackEarlyAccessClick } from "@/lib/gtag";
import { useState } from "react";

export default function FlexibilitySection() {
  const { t } = useLanguage();
  const categories = t("flexibility.categories") as string[];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-40 bg-hywork-gray-lighter dark:bg-gray-800 relative ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image src="./Noticias.png" alt="HyWork Platform Customization" width={600} height={500} className="rounded-lg shadow-xl" />
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-hywork-blue dark:text-blue-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("flexibility.title")}{" "}
              <motion.span
                animate={{
                  rotate: [0, 20, 0, 20, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
                className="inline-block"
              >
                🚀
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("flexibility.subtitle")}
            </motion.p>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#104a74",
                    color: "white",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-full transition-all">
                    {category}
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                className="bg-[#104a74] dark:bg-[#1a6ca0] text-primary-foreground font-medium py-2 px-6 rounded-md transition-all hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90"
                onClick={() => {
                  setIsDialogOpen(true);
                  trackEarlyAccessClick("flexibility");
                }}
              >
                {t("flexibility.cta")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <EarlyAccessDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} forceLightMode />
    </section>
  );
}
