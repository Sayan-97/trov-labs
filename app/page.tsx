import About from "@/components/containers/about";
import Hero from "@/components/containers/hero";
import Offers from "@/components/containers/offers";
import Solutions from "@/components/containers/solutions";
import Tokenomics from "@/components/containers/tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <Offers />
      <Tokenomics />
    </main>
  );
}
