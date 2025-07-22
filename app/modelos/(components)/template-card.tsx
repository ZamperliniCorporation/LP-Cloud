"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Template } from "./data/templates";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href="/contato">
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className={`${template.color} p-6 h-48 flex items-center justify-center`}>
          <Image
            src={template.preview || "/placeholder.svg"}
            alt={`${template.title} preview`}
            width={280}
            height={160}
            className="rounded-md shadow-sm"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{template.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{template.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
