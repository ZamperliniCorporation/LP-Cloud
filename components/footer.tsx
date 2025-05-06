"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-hywork-gray-lighter dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("footer.developedBy")}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-6">
            <Image src="./Logo.png" alt="HyWork Logo" width={120} height={40} className="h-8 w-auto" />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex space-x-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-hywork-blue dark:hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-hywork-blue dark:hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-hywork-blue dark:hover:text-blue-400 transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
