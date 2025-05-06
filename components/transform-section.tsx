"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function TransformSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-hywork-blue mb-4">
              Veja como transformar sua intranet com o hywork cloud
            </h2>
            <p className="text-gray-600 mb-4">
              Descubra como transformar sua intranet rapidamente com o hywork Cloud. Personalize, colabore e engaje sua
              equipe de forma intuitiva.
            </p>
            <Button variant="outline" className="text-hywork-blue border-hywork-blue hover:bg-hywork-blue/10">
              Leia mais
            </Button>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-500 text-xs">📄</span>
                </div>
                <h3 className="font-medium text-sm">Novos Documentos</h3>
              </div>
              <p className="text-xs text-gray-500">21 min</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-500 text-xs">📄</span>
                </div>
                <h3 className="font-medium text-sm">Novos Documentos</h3>
              </div>
              <p className="text-xs text-gray-500">4 min</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
