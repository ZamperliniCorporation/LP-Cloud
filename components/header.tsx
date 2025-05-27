"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme/theme-toggle";
import { EarlyAccessDialog } from "./ui/early-access-dialog";
import { trackEarlyAccessClick } from "@/lib/gtag";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  // Check if we're on the templates page
  const isTemplatesPage = pathname?.includes("/modelos");

  // Function to get the correct href for navigation links
  const getNavHref = (anchor: string) => {
    return isTemplatesPage ? `/${anchor}` : anchor;
  };

  return (
    <>
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
            className="hidden md:flex items-center justify-center flex-1 mx-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors"
              >
                {t("header.home")}
              </Link>
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
                href={getNavHref("#contato")}
                className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors"
              >
                {t("header.contact")}
              </Link>
            </div>
          </motion.nav>

          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <LanguageSwitcher /> */}
            {/* Dark mode temporarily disabled
            <ThemeToggle />
            */}
            <button
              onClick={() => {
                setIsDialogOpen(true);
                trackEarlyAccessClick("header");
              }}
              className="bg-[#104a74] dark:bg-[#1a6ca0] text-white font-medium py-2.5 px-6 rounded-lg transition-all shadow-sm hover:bg-[#104a74]/90 dark:hover:bg-[#1a6ca0]/90"
            >
              {t("header.earlyAccess")}
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            {/* Dark mode temporarily disabled
            <ThemeToggle />
            */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} className="p-2">
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
                href="/"
                className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.home")}
              </Link>
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
                href={getNavHref("#contato")}
                className="text-hywork-blue dark:text-blue-300 font-medium hover:text-hywork-blue-light dark:hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.contact")}
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDialogOpen(true);
                  trackEarlyAccessClick("header-mobile");
                }}
                className="bg-primary text-primary-foreground font-medium py-2.5 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow w-full"
              >
                {t("header.earlyAccess")}
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <EarlyAccessDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
