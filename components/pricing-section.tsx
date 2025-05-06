"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

export default function PricingSection() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t("pricing.startup.name"),
      price: t("pricing.startup.price"),
      period: t("pricing.startup.period"),
      description: t("pricing.startup.description"),
      features: Array.isArray(t("pricing.startup.features")) ? t("pricing.startup.features") : [t("pricing.startup.features") as string],
    },
    {
      name: t("pricing.growth.name"),
      price: t("pricing.growth.price"),
      period: t("pricing.growth.period"),
      description: t("pricing.growth.description"),
      features: Array.isArray(t("pricing.growth.features")) ? t("pricing.growth.features") : [t("pricing.growth.features") as string],
    },
    {
      name: t("pricing.business.name"),
      price: t("pricing.business.price"),
      period: t("pricing.business.period"),
      description: t("pricing.business.description"),
      features: Array.isArray(t("pricing.business.features")) ? t("pricing.business.features") : [t("pricing.business.features") as string],
    },
    {
      name: t("pricing.enterprise.name"),
      price: t("pricing.enterprise.price"),
      period: t("pricing.enterprise.period"),
      description: t("pricing.enterprise.description"),
      features: Array.isArray(t("pricing.enterprise.features")) ? t("pricing.enterprise.features") : [t("pricing.enterprise.features") as string],
      custom: true,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.title")}</h2>
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
              className="h-full"
            >
              <div
                className={`h-full ${
                  plan.name === t("pricing.enterprise.name") ? "bg-primary text-white" : "bg-white text-black"
                } rounded-lg border-0 shadow-lg p-6`}
              >
                <div className="mb-4">
                  <motion.h3
                    className="text-xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.p
                    className={plan.name === t("pricing.enterprise.name") ? "text-gray-200" : "text-gray-500"}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {plan.description}
                  </motion.p>
                </div>

                {plan.custom ? (
                  <motion.p
                    className="text-lg font-medium mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {plan.price}
                  </motion.p>
                ) : (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl font-bold">{plan.price}</p>
                    <p className="text-sm text-gray-500">{plan.period}</p>
                  </motion.div>
                )}

                <ul className="space-y-3">
                  {(Array.isArray(plan.features) ? plan.features : [plan.features]).map((feature: string, idx: number) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check
                        className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.name === t("pricing.enterprise.name") ? "text-white" : "text-hywork-orange"}`}
                      />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
