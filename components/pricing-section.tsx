"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import Link from "next/link";

export default function PricingSection() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t("pricing.startup.name"),
      price: t("pricing.startup.price"),
      period: t("pricing.startup.period"),
      description: t("pricing.startup.description"),
      features: [
        { label: t("pricing.startup.features.0"), type: "check" },
        { label: t("pricing.startup.features.1"), type: "check" },
        { label: t("pricing.startup.features.2"), type: "check" },
      ],
      buttonColor: "bg-gradient-to-r from-[#F6A623] to-[#F2994A] text-white",
      cardColor: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700",
    },
    {
      name: t("pricing.growth.name"),
      price: t("pricing.growth.price"),
      period: t("pricing.growth.period"),
      description: t("pricing.growth.description"),
      features: [
        { label: t("pricing.growth.features.0"), type: "check" },
        { label: t("pricing.growth.features.1"), type: "check" },
        { label: t("pricing.growth.features.2"), type: "check" },
      ],
      buttonColor: "bg-gradient-to-r from-[#F6A623] to-[#F2994A] text-white",
      cardColor: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700",
    },
    {
      name: t("pricing.business.name"),
      price: t("pricing.business.price"),
      period: t("pricing.business.period"),
      description: t("pricing.business.description"),
      features: [
        { label: t("pricing.business.features.0"), type: "check" },
        { label: t("pricing.business.features.1"), type: "check" },
        { label: t("pricing.business.features.2"), type: "check" },
      ],
      buttonColor: "bg-gradient-to-r from-[#F6A623] to-[#F2994A] text-white",
      cardColor: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700",
    },
    {
      name: t("pricing.enterprise.name"),
      price: t("pricing.enterprise.price"),
      period: t("pricing.enterprise.period"),
      description: t("pricing.enterprise.description"),
      features: [{ label: t("pricing.enterprise.features.0"), type: "check" }],
      buttonColor: "bg-[#256189] text-white",
      cardColor: "bg-[#18344A] text-white border border-[#256189]",
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative" id="preco">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preço</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`flex flex-col justify-between rounded-2xl shadow-lg border-0 p-6 min-h-[460px] ${plan.cardColor}`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.name === "Enterprise" ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <div className={`mb-3 ${plan.name === "Enterprise" ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                  {plan.name !== "Enterprise" && <div className="text-xs font-normal opacity-70 mb-1">A partir de</div>}
                  <div className={`font-semibold ${plan.name === "Enterprise" ? "text-sm leading-tight" : "text-lg"} mb-1`}>
                    {plan.price}
                  </div>
                  {plan.period && <div className="font-normal text-xs opacity-70 leading-tight">{plan.period}</div>}
                </div>
                <div className={`${plan.name === "Enterprise" ? "text-white" : "text-gray-700 dark:text-gray-200"} mb-4 opacity-80 text-sm`}>
                  {plan.description}
                </div>
                <ul className={`space-y-2 mt-4 mb-6 ${plan.name === "Enterprise" ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      {feature.type === "check" ? (
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <Clock className="h-4 w-4 text-red-500 flex-shrink-0" />
                      )}
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contato" className="w-full mt-auto">
                <button
                  className={`w-full py-2.5 rounded-lg font-semibold shadow-sm transition-all ${plan.buttonColor}`}
                >
                  Agendar Demonstração
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
