"use client";
import { motion } from "motion/react";
import { FileText, ArrowRight, Lock, Shield } from "lucide-react";
import { formLink } from "../../../../data/violation";

export function FormSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#268ece] to-[#2a9de8] p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3>Whistleblowing Report Form</h3>
                <p className="text-sm text-white/80">Please fill in with accurate information</p>
              </div>
            </div>
          </div>
          <div className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#268ece]/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-[#268ece]" />
              </div>
              <h3 className="text-black mb-3">Ready to Report?</h3>
              <p className="text-gray-600 mb-8">Click the button below to open the reporting form. You will be directed to a secure and encrypted form page.</p>
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#268ece] to-[#2a9de8] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>Open Report Form</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Lock className="w-4 h-4 text-[#268ece]" />
                <span>Form protected with SSL encryption</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#268ece]/5 rounded-full text-sm text-gray-700">
            <Shield className="w-4 h-4 text-[#268ece]" />
            <span>
              Your report will be handled with <strong className="text-[#268ece]">complete confidentiality</strong> and <strong className="text-[#268ece]">high professionalism</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
