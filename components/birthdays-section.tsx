"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const birthdays = [
  {
    name: "Lucas Vieira",
    date: "Hoje",
    avatar: "/placeholder.svg?key=avatar1",
  },
  {
    name: "Carlos Silva",
    date: "Amanhã",
    avatar: "/placeholder.svg?key=avatar2",
  },
  {
    name: "Amanda Rocha",
    date: "23/05",
    avatar: "/placeholder.svg?key=avatar3",
  },
]

export default function BirthdaysSection() {
  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-lg mb-4">Aniversariantes do Mês</h3>
            <div className="space-y-4">
              {birthdays.map((person, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={person.avatar || "/placeholder.svg"}
                    alt={person.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full">
              <h3 className="font-medium text-lg mb-4">Título do Projeto</h3>
              <p className="text-sm text-gray-600">Descrição curta do projeto e suas principais características.</p>
              <div className="mt-4">
                <button className="text-hywork-blue text-sm hover:underline">Leia mais →</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
