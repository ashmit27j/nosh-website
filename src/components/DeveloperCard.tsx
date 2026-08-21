import { motion } from "framer-motion";

export interface Developer {
  name: string;
  role: string;
  link: string;
}

export function DeveloperCard({ dev, index }: { dev: Developer; index: number }) {
  const initials = dev.name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.a
      href={dev.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex w-full max-w-sm flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-colors duration-300 hover:border-accent/40"
    >
      <div className="relative mb-6 h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-[#0c0c0c] font-display text-xl font-semibold tracking-wider text-foreground">
          {initials}
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground">{dev.name}</h3>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {dev.role}
      </p>
    </motion.a>
  );
}
