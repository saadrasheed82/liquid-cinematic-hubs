import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Studio", href: "#about" },
  { label: "About", href: "#services" },
  { label: "Journal", href: "#work" },
  { label: "Reach Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-5 md:py-6 max-w-7xl mx-auto">
        <a
          href="#hero"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] cursor-pointer"
          >
            Begin Journey
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden liquid-glass mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground text-center mt-2"
          >
            Begin Journey
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
