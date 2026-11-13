import decoImage from "../assets/coffee_plants.jpeg";

import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-cta" id="about">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="accent">Our Story</Badge>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--cream)] md:text-5xl">
            Thoughtful sourcing. Honest roasting.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              The Beans Place started in 2012 with the one simple belief: great coffee
              should be accessible to everyone - not just aficionados. We work 
              directly with farming cooperatives across continents, paying 
              above fair-trade prices to ensure quality from soil to sip.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
              Every week, our raostmaster cups dozens of samples to select only
              the lots that meet our standard. Whether you prefer a bright, fruity
              Ethopian Yirgacheffe or a deep, chocolatey Colombian Supremo, we roast
              each batch to order so it arrives at peak freshness.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="accent">Meet the Roasters</Button>
            <Button variant="ghost">Learn More</Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
          <img src={decoImage} alt="Coffee plants in the field" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
