import Image from "next/image";
import { motion } from "framer-motion";
import type { Tool } from "./tools";

type ToolCardProps = {
  tool: Tool;
};

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group relative flex h-[200px] w-full max-w-[180px] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-slate-100/80 bg-white/60 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-lg hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          background: `radial-gradient(circle at 40% 30%, ${tool.accent}10, transparent 52%)`,
        }}
        aria-hidden="true"
      />

      {/* NEW Badge */}
      {tool.new && (
        <div className="absolute right-3 top-3 rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-bold text-yellow-800">
          NEW
        </div>
      )}

      {/* Logo Container */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-20 w-20 items-center justify-center"
      >
        {tool.logo ? (
          <Image
            src={tool.logo}
            alt={tool.name}
            width={64}
            height={64}
            className="relative z-10 h-16 w-16 object-contain"
            loading="lazy"
          />
        ) : null}
      </motion.div>

      {/* Tool Name */}
      <h3 className="relative z-10 mt-4 text-center text-sm font-semibold text-slate-900">
        {tool.name}
      </h3>
    </motion.article>
  );
};

export default ToolCard;
