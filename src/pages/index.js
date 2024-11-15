import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4'; 
import Hero5 from '../components/Hero5';
import Hero6 from '../components/Hero6';
import Hero7 from '../components/Hero7';
import Hero8 from '../components/Hero8';
import Footer from '../components/Footer'; // Import Hero2

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />  
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Footer />{/* Render Hero2 below Hero */}
    </div>
  );
}
