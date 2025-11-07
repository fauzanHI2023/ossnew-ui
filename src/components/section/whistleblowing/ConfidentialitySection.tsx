"use client";
import { motion } from "motion/react";
import { Lock, Shield, UserCheck } from "lucide-react";

export function ConfidentialitySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#268ece]/10 via-[#268ece]/5 to-[#268ece]/10 rounded-3xl blur-2xl"></div>

          <div className="relative bg-gradient-to-br from-[#268ece] to-[#1a6ba8] rounded-3xl p-8 lg:p-10 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-1">WHISTLEBLOWER CONFIDENTIALITY</h3>
                  <p className="text-sm text-white/80">Protection of reporter identity and security</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <p className="text-white/95 leading-relaxed">
                    A <strong className="text-white">whistleblower</strong> is a reporter or discloser of facts who is not involved in the violation they are reporting.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <p className="text-white/95 leading-relaxed">
                    <strong className="text-white">Human Initiative</strong> guarantees whistleblower confidentiality. Protection of whistleblower identity will be provided to whistleblowers who provide information about indications of
                    violations committed by Human Initiative's internal parties.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <p className="text-white/95 leading-relaxed">
                    The existence of whistleblowers plays a <strong className="text-white">crucial role</strong> in helping law enforcement agencies uncover and remedy violations.
                  </p>
                </div>
              </div>

              {/* Bottom badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm text-white">Identity Protected</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm text-white">Data Encrypted</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <UserCheck className="w-4 h-4" />
                  <span className="text-sm text-white">Free from Retaliation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
