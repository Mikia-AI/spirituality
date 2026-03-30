import testimonials from "../data/testimonials.json";

const Testimonials = () => {
  return (
    <section id="udtalelser" className="py-24 bg-gradient-mystical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-gold-light mb-3">
            Udtalelser
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground mb-4">
            Hvad mine klienter siger
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8"
            >
              <div className="text-accent text-2xl mb-4">"</div>
              <p className="font-body text-sm text-primary-foreground/80 leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div>
                <p className="font-heading text-base font-semibold text-gold-light">
                  {t.name}
                </p>
                <p className="font-body text-xs text-primary-foreground/50">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
