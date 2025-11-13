import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PaymentMethodCardProps {
  id: string;
  name: string;
  description?: string;
  icon: React.ReactNode;
  selected: boolean;
  expanded: boolean;
  selectedOption?: string;
  selectedOptionIcon?: React.ReactNode;
  onSelect: (id: string) => void;
  onToggle?: () => void;
  children?: React.ReactNode;
}

export function PaymentMethodCard({ id, name, description, icon, selected, expanded, selectedOption, selectedOptionIcon, onSelect, onToggle, children }: PaymentMethodCardProps) {
  return (
    <div className={`relative rounded-xl border-2 transition-all overflow-hidden ${selected ? "border-[#268ece] bg-gradient-to-br from-[#268ece]/10 to-[#268ece]/5 shadow-lg shadow-[#268ece]/10" : "border-gray-200 bg-white"}`}>
      {selected && <motion.div layoutId="selected-payment" className="pointer-events-none" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}

      {/* 🔧 Ganti dari <motion.button> ke <motion.div> */}
      <motion.div onClick={() => onSelect(id)} whileHover={{ scale: selected ? 1 : 1.01 }} whileTap={{ scale: 0.99 }} className="relative w-full p-5 text-left cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${selected ? "bg-[#268ece] shadow-lg" : "bg-gray-100"}`}>
            <div className={selected ? "text-white" : "text-[#268ece]"}>{icon}</div>
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-gray-900 block">{name}</span>
            {description && !selectedOption && <span className="text-sm text-gray-500 block mt-0.5">{description}</span>}

            {selected && selectedOption && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mt-1.5">
                {selectedOptionIcon}
                <span className="text-sm text-[#268ece]">{selectedOption}</span>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {selected && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-7 h-7 rounded-full bg-[#268ece] flex items-center justify-center shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </motion.div>
            )}

            {selected && children && onToggle && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-white/50 hover:bg-white flex items-center justify-center transition-colors"
              >
                {expanded ? <ChevronUp className="w-4 h-4 text-[#268ece]" /> : <ChevronDown className="w-4 h-4 text-[#268ece]" />}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && expanded && children && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-5 pb-5 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
