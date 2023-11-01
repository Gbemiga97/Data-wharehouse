import { About, CTA, Features, Footer, Header, Hero, Testimonials } from "./sections";
import Aos from "aos";
import 'aos/dist/aos.css'
function App() {

  Aos.init({
    duration:1800,
    offset: 0,
  })


  return (
    <div className="overflow-hidden">
      <Header />
    <Hero />
    <About />
    <Features />
    <Testimonials />
    <CTA />
    <Footer />
    </div>
  );
}

export default App;
