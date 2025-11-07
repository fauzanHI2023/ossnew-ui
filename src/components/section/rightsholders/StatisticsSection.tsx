"use client";
import { useEffect, useRef, useState } from "react";
import { Users, CheckCircle2, Heart } from "lucide-react";

interface StatisticCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatisticCard({ icon, value, label, suffix = "", delay = 0 }: StatisticCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.floor(increment * currentStep));
        } else {
          setCount(value);
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div ref={cardRef} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-2">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e3f2fd] mb-6 group-hover:bg-[#268ece] transition-colors duration-300">
        <div className="text-[#268ece] group-hover:text-white transition-colors duration-300">{icon}</div>
      </div>

      <div className="mb-3">
        <span className="text-[#268ece] inline-block min-w-[120px]">
          {count.toLocaleString("id-ID")}
          {suffix}
        </span>
      </div>

      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#2c3e50]">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Together, we have created meaningful change for Rights Holders across Indonesia</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatisticCard icon={<Users className="w-8 h-8" />} value={12543} label="Rights Holders Supported" delay={0} />

          <StatisticCard icon={<CheckCircle2 className="w-8 h-8" />} value={248} label="Programs Completed" delay={200} />

          <StatisticCard icon={<Heart className="w-8 h-8" />} value={67} label="Programs Seeking Support" delay={400} />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">Data updated as of October 2025</p>
        </div>
      </div>
    </section>
  );
}
