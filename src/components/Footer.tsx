import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="py-16 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-mono text-2xl font-bold mb-6">
        <span className="text-primary text-glow">Contact</span>
      </h2>
      <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
        Disponible immédiatement pour des missions en cybersécurité, pentesting ou analyse forensique.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="mailto:bouakikoffiwilfried41@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-4 h-4" /> Email
        </a>
        <a href="https://github.com/bouakikoffiwilfried" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/koffi-wilfried-bouaki-80b8aa387" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href="tel:+2250586552033" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Phone className="w-4 h-4" /> Appeler
        </a>
      </div>
      <p className="text-muted-foreground/50 text-xs font-mono">© 2025 Bouaki Koffi Wilfried. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
