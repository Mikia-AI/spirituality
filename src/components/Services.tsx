import servicesData from "../data/services.json";

const services = servicesData.map((s) => ({
  title: s.title,
  desc: s.description,
  duration: s.duration,
  price: s.price,
  icon: s.icon,
  image: s.image,
}));

const Services = () => {
  return (
    <section id="konsultationer" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Jeg tilbyder
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Konsultationer
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              {s.image ? (
                <img src={s.image} alt={s.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              ) : (
                <span className="text-3xl text-accent mb-4 block">{s.icon}</span>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground tracking-wide">
                  {s.duration}
                </span>
                <span className="font-heading text-lg font-semibold text-accent">
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-2">
            Venindeaften eller foredrag om det spirituelle?
          </p>
          <p className="font-body text-sm text-accent">
            Kontakt mig for pris og planlægning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
