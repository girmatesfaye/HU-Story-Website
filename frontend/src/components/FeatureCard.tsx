import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4"
    >
      <div
        className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}
      >
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
