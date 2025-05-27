"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/language-context";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
}

const processSteps: ProcessStep[] = [
  {
    id: "create-space",
    title: "Crie seu espaço",
    description: "Configure seu ambiente de trabalho personalizado",
    image: "/placeholder.svg?height=500&width=800&query=create workspace interface",
    isActive: false,
  },
  {
    id: "access-groups",
    title: "Crie grupos de acesso",
    description: "Defina permissões e organize sua equipe",
    image: "/placeholder.svg?height=500&width=800&query=access groups management interface",
    isActive: false,
  },
  {
    id: "customize-intranet",
    title: "Comece a personalizar sua intranet",
    description: "Use nosso editor drag & drop para criar páginas incríveis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing_Page_Cloud-jB1ceyN8npfbvhaqzWwT9D1ho9goWC.png",
    isActive: true,
  },
  {
    id: "publish",
    title: "Publique",
    description: "Torne seu conteúdo visível para toda a equipe",
    image: "/placeholder.svg?height=500&width=800&query=publish content interface",
    isActive: false,
  },
  {
    id: "invite-users",
    title: "Convide os usuários",
    description: "Adicione sua equipe e comece a colaborar",
    image: "/placeholder.svg?height=500&width=800&query=invite users interface",
    isActive: false,
  },
];

export default function QuickProcessSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(2); // Começa com "Comece a personalizar sua intranet"
  const [steps, setSteps] = useState(processSteps);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Muda automaticamente a cada 4 segundos

    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => ({
        ...step,
        isActive: index === activeStep,
      }))
    );
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden min-h-[800px]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hywork-blue dark:text-white">Veja como é rápido</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vertical Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                onClick={() => handleStepClick(index)}
                className="flex items-center cursor-pointer group"
                transition={{ duration: 0.2 }}
              >
                {/* Circle Indicator */}
                <div className="relative mr-6 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      step.isActive
                        ? "bg-hywork-orange border-hywork-orange shadow-[0_0_0_4px_rgba(240,156,38,0.2)]"
                        : "bg-transparent border-gray-300 dark:border-gray-600 group-hover:border-hywork-orange group-hover:bg-hywork-orange/20"
                    }`}
                  />

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-8 transition-colors duration-300 ${
                        step.isActive || steps[index + 1]?.isActive ? "bg-hywork-orange" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      step.isActive ? "text-hywork-orange" : "text-gray-600 dark:text-gray-400 group-hover:text-hywork-orange"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <AnimatePresence>
                    {step.isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Content Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-full"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-2xl">
                    <Image
                      src={steps[activeStep].image || "/placeholder.svg"}
                      alt={steps[activeStep].title}
                      width={800}
                      height={500}
                      className="w-full object-cover rounded-lg shadow-lg"
                      priority={activeStep === 2}
                    />
                  </div>

                  {/* Floating Elements for Visual Enhancement */}
                  <motion.div
                    className="absolute -top-4 -right-4"
                    animate={{
                      y: [0, 15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image src="/Vector.png" alt="Vector decoration" width={38} height={38} className="" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 -left-6"
                    animate={{
                      y: [0, 15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image src="/Vector2.png" alt="Vector decoration" width={48} height={48} className="" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
