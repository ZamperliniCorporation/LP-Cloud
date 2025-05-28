"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/language-context";
import { Button } from "./ui/button";
import Link from "next/link";

interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  size: "large" | "medium";
  category: string;
}

const templates: Template[] = [
  {
    id: "campanhas-main",
    title: "Campanhas",
    description: "Engaje seu time com campanhas internas",
    image: "/H1.png",
    backgroundColor: "bg-purple-200",
    size: "large",
    category: "Campanhas",
  },
  {
    id: "profissionais",
    title: "Profissionais",
    description: "Gerencie perfis e informações da equipe",
    image: "/H2.png",
    backgroundColor: "bg-orange-200",
    size: "medium",
    category: "Profissionais",
  },
  {
    id: "campanhas-2",
    title: "Campanhas",
    description: "Crie campanhas envolventes e impactantes",
    image: "/H3.png",
    backgroundColor: "bg-blue-200",
    size: "medium",
    category: "Campanhas",
  },
  {
    id: "bem-vindo",
    title: "Página Inicial",
    description: "Crie uma página de boas-vindas acolhedora",
    image: "/H4.png",
    backgroundColor: "bg-pink-200",
    size: "medium",
    category: "Página Inicial",
  },
  {
    id: "formularios",
    title: "Formulários",
    description: "Colete informações de forma organizada",
    image: "/H5.png",
    backgroundColor: "bg-green-200",
    size: "medium",
    category: "Formulários",
  },
];

export default function ReadyTemplatesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#FDF7F2] dark:bg-gray-800 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Inicie com modelos prontos para acelerar seu sucesso
          </h2>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Large Template - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <TemplateCard template={templates[0]} isLarge={true} />
          </motion.div>

          {/* Medium Templates */}
          {templates.slice(1).map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <TemplateCard template={template} isLarge={false} />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <Link
            href="/modelos"
            className="bg-hywork-orange hover:bg-hywork-orange-dark text-white font-medium py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Ver Todos os Modelos
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}

interface TemplateCardProps {
  template: Template;
  isLarge: boolean;
}

function TemplateCard({ template, isLarge }: TemplateCardProps) {
  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isLarge ? "h-96 lg:h-full" : "h-64"
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Color */}
      <div className={`absolute inset-0 ${template.backgroundColor}`} />

      {/* Template Preview Image - Connected to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center px-4">
        <motion.div className="relative w-full max-w-md" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Image
            src={template.image || "/placeholder.svg"}
            alt={template.title}
            width={isLarge ? 600 : 400}
            height={isLarge ? 400 : 300}
            className="w-full h-auto rounded-t-lg"
          />
        </motion.div>
      </div>

      {/* Hover Overlay - Partial section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <div className="text-white text-center space-y-2">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">{template.category}</span>
          <h3 className="text-lg font-bold">{template.title}</h3>
          <p className="text-white/90 text-sm">{template.description}</p>
          <button className="bg-hywork-orange hover:bg-hywork-orange-dark text-white font-medium py-1.5 px-4 rounded-lg transition-all transform hover:scale-105 text-sm mt-2">
            Ver Modelo
          </button>
        </div>
      </div>
    </motion.div>
  );
}
