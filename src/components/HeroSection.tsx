const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 pt-32 pb-20">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where <em className="not-italic text-muted-foreground">final year projects</em>{" "}
          find{" "}
          <em className="not-italic text-muted-foreground">
            their rhythm.
          </em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          A calm, intelligent workspace for supervisors to track student groups,
          monitor milestones, and let AI craft the perfect FYP timeline — so every
          project ships on time, with clarity.
        </p>

        <a
          href="#about"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer inline-block"
        >
          Explore the Tracker
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
