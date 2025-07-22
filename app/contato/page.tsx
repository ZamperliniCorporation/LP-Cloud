'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'typewriter-effect/dist/core';

export default function Contato() {
  const [showParagraph, setShowParagraph] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const typewriter = new Typewriter(titleRef.current, {
      loop: false,
      delay: 50,
    });

    typewriter
      .typeString('Agende uma demonstração')
      .callFunction(() => setShowParagraph(true))
      .start();
  }, []);

  return (
    <div className="bg-[#f7f9fb] min-h-screen flex flex-col relative overflow-hidden">
      <Header />

      {/* Vetores decorativos - ocultos em mobile */}
      <Image
        src="/Vector.png"
        alt="Decorativo azul"
        width={360}
        height={360}
        className="hidden md:block absolute bottom-[130px] left-0 z-0 pointer-events-none select-none"
        style={{
          left: '-60px',
          maxWidth: '320px',
          width: '100%',
          objectFit: 'contain',
        }}
      />

      <Image
        src="/Vector2.png"
        alt="Decorativo laranja"
        width={360}
        height={360}
        className="hidden md:block absolute top-[45px] right-0 z-0 pointer-events-none select-none"
        style={{
          right: '-60px',
          maxWidth: '320px',
          width: '100%',
          objectFit: 'contain',
        }}
      />

      <main className="relative grow w-screen h-full flex items-center justify-center px-0 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1320px] z-10 gap-12 px-6 md:px-10 mt-10 mb-14">
          {/* Texto à esquerda */}
          <div className="w-full md:w-1/2 max-w-xl">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-[#f6a31a] mb-2 h-[70px]"
            ></h1>

            {showParagraph && (
              <motion.div
                className="text-lg md:text-xl leading-relaxed text-[#092840] mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#f6a31a] font-bold text-2xl mb-3 mt-6">
                  com nossos especialista em comunicação
                </p>
                <p className="text-[#092840]">
                  Descubra como{' '}
                  <span className="font-bold text-[#092840] text-2xl">criar, personalizar e publicar sem complicações</span>. Nossa equipe está pronta para encontrar a melhor solução para você.
                </p>
              </motion.div>
            )}
          </div>

          {/* Formulário */}
          <motion.div
            className="relative bg-white shadow-lg rounded-[4rem] px-8 pt-10 pb-20 w-full md:w-[560px] z-15"
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-base md:text-lg font-medium text-gray-800 mb-6 z-10 relative">
              Preencha as informações
            </h3>

            <form className="flex flex-col gap-3 z-10 relative">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nome*"
                  className="w-1/2 px-4 py-2 border rounded-md text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Cargo"
                  className="w-1/2 px-4 py-2 border rounded-md text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="w-full px-4 py-2 border rounded-md text-sm"
                required
              />
              <input
                type="text"
                placeholder="WhatsApp"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Número de colaboradores"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="O que você deseja melhorar?"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <textarea
                rows={3}
                placeholder="Comentários adicionais"
                className="w-full px-4 py-2 border rounded-md text-sm"
              ></textarea>

              <button
                type="submit"
                className="mt-4 bg-[#104a74] text-white py-2 px-6 rounded-md hover:bg-[#104a74]/90 transition"
              >
                Enviar
              </button>
            </form>

            {/* Logo decorativa */}
            <Image
              src="/Artefacts-invert.png"
              alt="Logo decorativa"
              width={200}
              height={200}
              className="absolute bottom-[-1px] right-[-1px] z-0 pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
