import About from '../components/sections/About';
import Domains from '../components/sections/Domains';
import Events from '../components/sections/Events';
import Footer from '../components/sections/Footer';
import Hero from '../components/sections/Hero';
import Team from '../components/sections/Team';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Domains />
      <Team />
      <Footer />
    </main>
  );
}
