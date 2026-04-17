const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <span
            className="text-xl tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ProjectPilot<sup className="text-[8px]">®</sup>
          </span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FYP Tracker for Universities
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["Docs", "Privacy", "Support", "Contact"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
