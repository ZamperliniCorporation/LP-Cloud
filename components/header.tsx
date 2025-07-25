"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const isNotLandingPage = pathname !== "/" && !pathname.startsWith("/#");

  const getNavHref = (anchor: string) => {
    // Se não está na landing page, prefixa com /
    return isNotLandingPage ? `/${anchor}` : anchor;
  };

  return (
    <header className="bg-white dark:bg-gray-900 py-4 px-6 md:px-12 lg:px-20 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/">
            <div className="relative h-10 w-28">
              <Image src="/Logo.png" alt="HyWork Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8 ml-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href={getNavHref("#recursos")}
            className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors"
          >
            {t("header.resources")}
          </Link>
          <Link
            href={getNavHref("#preco")}
            className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors"
          >
            {t("header.pricing")}
          </Link>
          <Link
            href="/contato"
            className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors"
          >
            {t("header.contact")}
          </Link>
        </motion.nav>

        <motion.div
          className="hidden md:flex items-center gap-4 ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contato">
            <button className="bg-[#104a74] dark:bg-[#1a6ca0] text-white font-medium py-2.5 px-6 rounded-lg transition-all shadow-sm hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90">
              {t("header.earlyAccess")}
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 z-50 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href={getNavHref("#recursos")}
              className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.resources")}
            </Link>
            <Link
              href={getNavHref("#preco")}
              className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.pricing")}
            </Link>
            <Link
              href="/contato"
              className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
            <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-primary text-primary-foreground font-medium py-2.5 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow w-full">
                {t("header.earlyAccess")}
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
