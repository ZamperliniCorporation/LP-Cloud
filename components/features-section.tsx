"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Palette, FileText, BarChart3, Zap, Library } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import Image from "next/image";

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <LayoutGrid className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.dragDrop.title"),
      description: t("features.dragDrop.description"),
    },
    {
      icon: <Palette className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.customization.title"),
      description: t("features.customization.description"),
    },
    {
      icon: <FileText className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.publishing.title"),
      description: t("features.publishing.description"),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.metrics.title"),
      description: t("features.metrics.description"),
    },
    {
      icon: <Zap className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.implementation.title"),
      description: t("features.implementation.description"),
    },
    {
      icon: <Library className="h-8 w-8 text-hywork-orange dark:text-hywork-orange-light" />,
      title: t("features.modules.title"),
      description: t("features.modules.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative" id="recursos">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hywork-blue dark:text-blue-300 mb-4">{t("features.title")}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              variants={itemVariants}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,

                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-hywork-blue dark:text-blue-300 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201000004278%202-Xmbk8lH4NwxBP2EQmebcnzYX7HVjCX.png"
          alt="HyWork Logo"
          width={200}
          height={100}
          className="mx-auto absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
}
