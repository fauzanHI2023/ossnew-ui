"use client";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function WhatIsWhistleblowingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#268ece]/10 text-[#268ece] mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm">What is the Whistle Blowing System?</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1a6ba8] flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong className="text-black">Human Initiative</strong> is committed to creating a healthy, safe, and integrity-driven environment to achieve Good Organizational Governance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The <strong className="text-black">Whistle Blowing System</strong> is a policy or system designed to provide a safe and confidential channel for individuals to disclose suspected violations securely (reporters' confidentiality
            is protected). Through this policy, Human Initiative provides a channel for you (the public) to report suspected violations committed by Human Initiative's internal parties (whether employees, volunteers, interns, outsourced
            personnel, or consultants working on behalf of Human Initiative).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
