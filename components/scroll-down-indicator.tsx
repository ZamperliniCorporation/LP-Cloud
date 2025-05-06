"use client";

export default function ScrollDownIndicator() {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Contêiner do mouse */}
      <div className="w-6 h-10 border border-gray-200 rounded-full flex items-center justify-center relative">
        {/* Simulação do scroll */}
        <div className="w-1 h-3 bg-white rounded-full absolute scroll-animation" />
      </div>

      {/* Texto abaixo */}
      <p className="text-gray-200 text-xs font-light uppercase tracking-wider">Role para baixo</p>

      {/* Estilos */}
      <style jsx>{`
        .scroll-animation {
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            top: 0;
            opacity: 0;
          }
          35% {
            top: 0.4rem;
            opacity: 1;
          }
          70% {
            top: 0.8rem;
            opacity: 0;
          }
          80%,
          100% {
            top: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
