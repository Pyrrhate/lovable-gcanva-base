import { Code2, Gauge, Paintbrush } from "lucide-react";

const pillars = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Intégration rigoureuse",
    description: "Un code propre, léger et optimisé pour le SEO.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Performance native",
    description: "Priorité à la vitesse de chargement et à l'accessibilité.",
  },
  {
    icon: <Paintbrush className="w-5 h-5" />,
    title: "Design fonctionnel",
    description: "L'esthétique au service de l'ergonomie.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="atelier" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Philosophie
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            L'approche artisanale du code.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            À l'heure des usines à sites web, je revendique une approche de proximité et de précision. Comme un artisan qui choisit ses matériaux, je sélectionne les technologies les plus performantes pour garantir des interfaces fluides, durables et centrées sur l'utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass glass-hover rounded-2xl p-8 text-center transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="text-primary mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
