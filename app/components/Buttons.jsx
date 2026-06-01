import { cx } from '../Data';
import { motion } from "framer-motion";

export function Button({ children, variant = "primary", className, icon, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 ease-out active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#8DC53E] text-[#414042] shadow-[0_8px_24px_rgba(24,32,28,0.08)] hover:-translate-y-0.5 hover:bg-[#7FB436] hover:shadow-[0_16px_40px_rgba(24,32,28,0.12)]",
    secondary:
      "border border-[#E6EBE7] bg-white text-[#414042] shadow-sm hover:-translate-y-0.5 hover:border-[#D7DED8] hover:bg-[#F8FAF9]",
    ghost:
      "text-[#414042] hover:bg-[#F1F4F2]",
    dark:
      "bg-[#414042] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-[#2B2D2B]",
  };

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={cx(base, variants[variant], className)} {...props}>
      <span>{children}</span>
      {icon}
    </motion.button>
  );
}
