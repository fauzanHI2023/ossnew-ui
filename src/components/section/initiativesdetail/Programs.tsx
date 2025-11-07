"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Shield, Home, Stethoscope, GraduationCap, Droplet, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { InitiativeDetail } from "@/app/types/initiatives";

interface Props {
  data: InitiativeDetail;
}

export function Programs({ data }: Props) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <section id="programs" className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <Badge className="mb-4 bg-[#268ece]/10 text-[#268ece] hover:bg-[#268ece]/20 border-[#268ece]/20">Initiative for Disaster</Badge>
          <p className="text-gray-600 max-w-3xl mx-auto mb-2">Comprehensive programs from emergency response to long-term empowerment</p>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse" />
            Click to explore each program
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 lg:grid-cols-3 h-auto gap-3 bg-transparent max-w-4xl w-full">
              {data.featuredPrograms.map((program, index) => (
                <motion.div key={program.id} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <TabsTrigger
                    value={program.id}
                    className="w-full flex-col h-auto py-6 px-4 data-[state=active]:bg-white data-[state=active]:shadow-xl data-[state=active]:border-[#268ece]/30 data-[state=inactive]:bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer border-2 border-transparent rounded-2xl group"
                  >
                    <div className={`text-gray-600 w-14 h-14 rounded-xl ${program.bgColor} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}>
                      <Lightbulb />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{program.title}</span>
                    <div className="w-0 h-0.5 bg-[#268ece] group-data-[state=active]:w-full transition-all duration-300 mt-2" />
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </div>

          {data.featuredPrograms.map((program) => (
            <TabsContent key={program.id} value={program.id}>
              <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden border-none shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <Image src={program.image} width={600} height={500} alt={program.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex-1 shadow-lg">
                          <div className="text-black">10</div>
                          <div className="text-sm text-gray-600">Beneficiaries</div>
                        </div>
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex-1 shadow-lg">
                          <div className="text-black">20</div>
                          <div className="text-sm text-gray-600">Locations</div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 ${program.bgColor} rounded-full mb-6`}>
                        <Lightbulb className={`w-5 h-5 ${program.color}`} />
                        <span className={program.color}>{program.title}</span>
                      </div>

                      <h3 className="text-gray-900 mb-4">Featured Programs</h3>
                      <p className="text-gray-600 mb-8">{program.description}</p>

                      <h4 className="text-gray-900 mb-4">Service Coverage:</h4>
                      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {data.features.map((feature, index) => (
                          <motion.div key={index} initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className={`w-2 h-2 rounded-full ${program.color === "text-[#268ece]" ? "bg-[#268ece]" : "bg-black"}`} />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div> */}

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-xl transition-all ${
                          program.color === "text-[#268ece]" ? "bg-[#268ece] hover:bg-[#1e7bb8] text-white shadow-lg shadow-[#268ece]/20" : "bg-black hover:bg-gray-800 text-white shadow-lg shadow-black/20"
                        }`}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
