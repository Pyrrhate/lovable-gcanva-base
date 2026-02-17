import { MapPin, Handshake } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Pourquoi "Artisan" ?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Parce que chaque projet mérite une attention particulière.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
          Situé à Tournai, j'interviens comme un partenaire technique direct. Pas d'intermédiaire, pas de jargon inutile. Juste une collaboration transparente pour bâtir une présence web solide.
        </p>
        <div className="mt-10 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Tournai, Belgique</span>
          </div>
          <div className="flex items-center gap-2">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm">Collaboration directe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
