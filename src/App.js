import { Header, Hero } from "./sections";
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
    </div>
  );
}

export default App;
