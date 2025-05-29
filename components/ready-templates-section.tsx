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
    title: "Formulário de Ideias",
    description:
      "Espaço colaborativo para envio de sugestões, propostas de melhorias ou novas iniciativas. Incentive a participação ativa de todos na construção de um ambiente mais inovador e eficiente.",
    image: "/H1.png",
    backgroundColor: "bg-purple-200",
    size: "large",
    category: "Processos",
  },
  {
    id: "profissionais",
    title: "Perfil Profissional",
    description:
      "Modelo para apresentar a trajetória, competências e projetos de cada colaborador. Fortalece a visibilidade interna e facilita conexões estratégicas entre as equipes.Modelo para apresentar a trajetória, competências e projetos de cada colaborador. Fortalece a visibilidade interna e facilita conexões estratégicas entre as equipes.",
    image: "/H2.png",
    backgroundColor: "bg-orange-200",
    size: "medium",
    category: "Profissionais",
  },
  {
    id: "campanhas-2",
    title: "Projetos com Kanban",
    description:
      "Visualize e gerencie os fluxos de trabalho com o método Kanban. Acompanhe o andamento dos projetos, distribua tarefas e facilite a colaboração entre as equipes de forma organizada e transparente.",
    image: "/H3.png",
    backgroundColor: "bg-blue-200",
    size: "medium",
    category: "Processos",
  },
  {
    id: "bem-vindo",
    title: "Campanhas",
    description:
      "Centralize todas as campanhas internas: comunicados, ações de engajamento, conscientização e celebrações. Mantenha todos informados e alinhados com as iniciativas da organização",
    image: "/H4.png",
    backgroundColor: "bg-pink-200",
    size: "medium",
    category: "Conteúdos",
  },
  {
    id: "formularios",
    title: "Galeria de Fotos",
    description:
      "Reúna e compartilhe os melhores momentos da equipe: eventos, conquistas e celebrações. Um espaço para valorizar a cultura organizacional e fortalecer o sentimento de pertencimento.",
    image: "/H5.png",
    backgroundColor: "bg-green-200",
    size: "medium",
    category: "Conteúdos",
  },
];

export default function ReadyTemplatesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#FDF7F2] dark:bg-gray-800 relative">
      <div className="mx-auto px-6 md:px-12 lg:px-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        isLarge ? "h-[500px] lg:h-full" : "h-72"
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Template Preview Image */}
      <motion.div className="relative w-full h-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <Image src={template.image || "/placeholder.svg"} alt={template.title} fill className="object-contain rounded-2xl" />
      </motion.div>

      {/* Hover Overlay - Partial section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <div className="text-white text-center space-y-2">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">{template.category}</span>
          <h3 className="text-lg font-bold">{template.title}</h3>
          <p className="text-white/90 text-sm">{template.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
