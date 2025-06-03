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
    image: "/E1.png",
    isActive: false,
  },
  {
    id: "access-groups",
    title: "Crie grupos de acesso",
    description: "Defina permissões e organize sua equipe",
    image: "/E2.png",
    isActive: false,
  },
  {
    id: "customize-intranet",
    title: "Comece a personalizar sua intranet",
    description: "Use nosso editor drag & drop para criar páginas incríveis",
    image: "/E3.png",
    isActive: true,
  },
  {
    id: "publish",
    title: "Publique",
    description: "Torne seu conteúdo visível para toda a equipe",
    image: "/E4.png",
    isActive: false,
  },
  {
    id: "invite-users",
    title: "Convide os usuários",
    description: "Adicione sua equipe e comece a colaborar",
    image: "/E5.png",
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
    <section className="py-20 bg-[#F8F9FA] dark:bg-gray-900 relative overflow-hidden min-h-[800px]">
      <div className=" mx-auto px-6 md:px-12 lg:px-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Vertical Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-1"
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
            className="relative lg:col-span-2"
          >
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">
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
                  <div className="h-full">
                    <Image
                      src={steps[activeStep].image || "/placeholder.svg"}
                      alt={steps[activeStep].title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-contain md:object-scale-down"
                      priority={activeStep === 2}
                    />
                  </div>

                  {/* Floating Elements for Visual Enhancement */}
                  <motion.div
                    className="hidden sm:absolute top-5 right-2"
                    animate={{
                      y: [0, 25, 0],
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image src="/Vector.png" alt="Vector decoration" width={56} height={56} className="opacity-70" />
                  </motion.div>
                  <motion.div
                    className="hidden sm:absolute bottom-1 left-2"
                    animate={{
                      y: [0, 25, 0],
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <Image src="/Vector2.png" alt="Vector decoration" width={66} height={66} className="opacity-50" />
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
