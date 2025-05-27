"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowLeft } from "lucide-react";
import { templates, useCases, models, type Template } from "./data/templates";
import { TemplateCard } from "./template-card";
import { TemplateDetail } from "./template-detail";
import { useLanguage } from "@/i18n/language-context";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export default function TemplatesPage() {
  const { t } = useLanguage();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUseCase, setSelectedUseCase] = useState("Tudo");
  const [selectedModel, setSelectedModel] = useState("");
  const [isUseCaseOpen, setIsUseCaseOpen] = useState(true);
  const [isModelOpen, setIsModelOpen] = useState(true);

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) || template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUseCase = selectedUseCase === "Tudo" || template.useCase === selectedUseCase;
    const matchesModel = !selectedModel || template.category === selectedModel;

    return matchesSearch && matchesUseCase && matchesModel;
  });

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleBackClick = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 min-h-[400px] bg-[#FDF7F2] rounded-lg p-4 flex items-center justify-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 max-w-3xl">
          Inicie com modelos prontos para acelerar seu sucesso
        </h1>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Pesquise por aqui..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#104a74] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Use Case Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setIsUseCaseOpen(!isUseCaseOpen)}
                  className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white mb-3"
                >
                  Por caso de uso
                  <ChevronDown className={`h-4 w-4 transition-transform ${isUseCaseOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isUseCaseOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {useCases.map((useCase) => (
                        <button
                          key={useCase}
                          onClick={() => setSelectedUseCase(useCase)}
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            selectedUseCase === useCase
                              ? "bg-[#104a74] text-white"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {useCase}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Models Filter */}
              <div>
                <button
                  onClick={() => setIsModelOpen(!isModelOpen)}
                  className="flex items-center justify-between w-full text-left font-medium text-gray-900 dark:text-white mb-3"
                >
                  Por Modelos
                  <ChevronDown className={`h-4 w-4 transition-transform ${isModelOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isModelOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {models.map((model) => (
                        <button
                          key={model}
                          onClick={() => setSelectedModel(selectedModel === model ? "" : model)}
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            selectedModel === model
                              ? "bg-[#104a74] text-white"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {selectedTemplate ? (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <button onClick={handleBackClick} className="flex items-center text-[#104a74] hover:text-[#0a3b55] mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar
                  </button>
                  <TemplateDetail template={selectedTemplate} />
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredTemplates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <TemplateCard template={template} onClick={() => handleTemplateClick(template)} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
