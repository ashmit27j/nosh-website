import { motion } from "framer-motion";
import { Zap, Target, Layers, Users, Map, Cpu } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={24} />,
    title: "Fluid Parkour",
    description:
      "Wall runs, slides, mantles, and aerial combos keep momentum at the center of every encounter.",
  },
  {
    icon: <Target size={24} />,
    title: "Arena Combat",
    description:
      "Fast time-to-kill gunplay tuned for skill expression, map control, and clutch plays.",
  },
  {
    icon: <Layers size={24} />,
    title: "Unity Powered",
    description:
      "Built from the ground up in Unity with custom movement systems and polished feedback.",
  },
  {
    icon: <Users size={24} />,
    title: "Multiplayer Modes",
    description:
      "Competitive and casual modes designed for quick rounds and high replayability.",
  },
  {
    icon: <Map size={24} />,
    title: "Varied Environments",
    description:
      "Levels that reward verticality and route knowledge, from tight corridors to open rooftops.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Performance First",
    description:
      "Optimized rendering and netcode so the action stays smooth under pressure.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Features() {
  return (
    <section id="features" className="relative border-t border-border py-28 sm:py-36">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            <span className="h-px w-6 bg-accent" />
            What to Expect
            <span className="h-px w-6 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            Everything that makes the game tick — from movement to multiplayer.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(255,176,0,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <div className="mb-6 inline-flex items-center justify-center rounded-md border border-border bg-[#0c0c0c] p-3 text-accent">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
