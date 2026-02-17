import { ArrowRight, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Prêt à bâtir votre prochain projet ?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@gcanva.com"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 animate-glow"
          >
            Envoyer un message
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-sm">Basé à Tournai, disponible partout.</span>
        </div>
        <p className="text-xs text-muted-foreground mt-12">
          © 2026 GCanva. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
