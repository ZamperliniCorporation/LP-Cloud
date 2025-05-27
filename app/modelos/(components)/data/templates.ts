export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  useCase: string;
  color: string;
  preview: string;
  detailedPreview: string;
  features: string[];
  detailedDescription: string;
}

export const templates: Template[] = [
  {
    id: "campanhas-1",
    title: "Campanhas",
    description: "Engaje seu time com campanhas internas",
    category: "Campanhas",
    useCase: "Intranet",
    color: "bg-orange-200",
    preview: "/H1.png",
    detailedPreview: "/H1.png",
    features: ["Gestão de Campanhas", "Engajamento de Funcionários", "Métricas em Tempo Real"],
    detailedDescription:
      "A Semana da Saúde Mental foi criada para cuidar em primeiro lugar do bem-estar emocional dos nossos colaboradores. Ao longo de uma semana, vamos promover conversas, atividades práticas e conteúdos que refletem na importância de cuidar da mente no dia a dia trabalho. Esta é uma oportunidade para descobrir, aprender e se reconectar com o que realmente importa: você!",
  },
  {
    id: "campanhas-2",
    title: "Campanhas",
    description: "Engaje seu time com campanhas internas",
    category: "Campanhas",
    useCase: "Intranet",
    color: "bg-blue-200",
    preview: "/H2.png",
    detailedPreview: "/H2.png",
    features: ["Templates Personalizáveis", "Comunicação Visual", "Análise de Engajamento"],
    detailedDescription:
      "Template versátil para campanhas internas que permite comunicação efetiva com sua equipe através de layouts visuais atraentes e funcionalidades de engajamento.",
  },
  {
    id: "campanhas-3",
    title: "Campanhas",
    description: "Engaje seu time com campanhas internas",
    category: "Campanhas",
    useCase: "Intranet",
    color: "bg-green-200",
    preview: "/H3.png",
    detailedPreview: "/H3.png",
    features: ["Automação de Processos", "Notificações Push", "Dashboard Analytics"],
    detailedDescription:
      "Solução completa para automatizar suas campanhas internas com recursos avançados de notificação e análise de resultados em tempo real.",
  },
  {
    id: "campanhas-4",
    title: "Campanhas",
    description: "Engaje seu time com campanhas internas",
    category: "Campanhas",
    useCase: "Intranet",
    color: "bg-pink-200",
    preview: "/H4.png",
    detailedPreview: "/H4.png",
    features: ["Design Responsivo", "Integração Social", "Feedback em Tempo Real"],
    detailedDescription:
      "Template moderno e responsivo que facilita a criação de campanhas envolventes com recursos de integração social e coleta de feedback.",
  },
];

export const useCases = ["Tudo", "Intranet", "Portal do Funcionário", "Portal do Cliente", "Portal do Fornecedor"];

export const models = ["Campanhas", "Página Inicial", "Profissionais", "Notícias", "Documentos"];
