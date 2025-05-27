"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { Template } from "./data/templates";
import { Button } from "@/components/ui/button";

interface TemplateDetailProps {
  template: Template;
}

export function TemplateDetail({ template }: TemplateDetailProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {template.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 mb-6"
        >
          {template.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${template.color} p-8 rounded-lg mb-6`}
        >
          <Image
            src={template.detailedPreview || "/placeholder.svg"}
            alt={`${template.title} detailed preview`}
            width={800}
            height={500}
            className="w-full rounded-md shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recursos Inclusos</h3>
            <ul className="space-y-3">
              {template.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sobre este Template</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{template.detailedDescription}</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#104a74] hover:bg-[#0a3b55] text-white px-6 py-3 rounded-md font-medium transition-colors">
                Usar este Template
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
