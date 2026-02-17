import { Layers, Zap, RefreshCw } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Layers className="w-6 h-6" />,
    title: "Intégration Web UI/UX",
    description:
      "Transformer vos designs (Figma, Canva) en réalité interactive. Je respecte le pixel, mais surtout l'expérience de vos visiteurs.",
  },
  {
    num: "02",
    icon: <Zap className="w-6 h-6" />,
    title: "Optimisation & Performance",
    description:
      "Votre site est votre outil de travail. Je l'affine pour qu'il soit rapide sur mobile et performant sur les moteurs de recherche.",
  },
  {
    num: "03",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Maintenance Évolutive",
    description:
      "Le web bouge, votre site aussi. Je vous accompagne pour faire évoluer votre infrastructure sans dette technique.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
            Le Workshop
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Les Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="glass glass-hover rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
            >
              <span className="text-6xl font-black text-muted/60 absolute top-4 right-6 select-none">
                {service.num}
              </span>
              <div className="text-primary mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto pt-6 h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
