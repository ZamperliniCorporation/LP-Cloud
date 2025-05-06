"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-context"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="rounded-md p-2 text-hywork-blue dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </motion.button>
  )
}
