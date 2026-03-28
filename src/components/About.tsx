import janePortrait1 from "@/assets/jane-portrait1.jpg";
import janePortrait2 from "@/assets/jane-portrait2.jpg";

const About = () => {
  return (
    <section id="om-mig" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">
          Om mig
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
          Jane Jaqué
        </h2>
        <div className="w-16 h-0.5 bg-accent mb-8" />

        <div className="font-body text-muted-foreground leading-relaxed">
          <div className="float-right ml-8 mb-6 w-48 md:w-64">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={janePortrait2}
                alt="Jane Jaqué"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mb-6">
            Jeg har passeret de 50 år og har opbygget årtiers erfaring i at vejlede, støtte og rådgive børn, unge samt deres forældre. I mit arbejdsliv har jeg været pædagog, rådgiver, leder og har arbejdet med forskning.
          </p>
          <p className="mb-6">
            Jeg har et kritisk analytisk blik qua min akademiske uddannelse, og da jeg ved et tilfælde blev bekendt med mine clairvoyante evner, lærte jeg at træne dem med henblik på at se det enkelte menneske der, hvor det befinder sig lige nu.
          </p>
          <p>
            Jeg møder dig med åbenhed, ærlighed og omsorg. Efter en konsultation er det vigtigt for mig, at du går ud af døren med håb for fremtiden og gode lavpraktiske redskaber.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
