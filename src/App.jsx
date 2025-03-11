import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Herosection/Hero';
import Collabs from './components/Collabs/Collabs';
import Landingpage from './components/LandingPage/Landingpage';
import Service from './components/Service/Service';
import Guide from './components/GuideSelection/Guide';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collabs/>
      <Landingpage/>
      <Service/>
      <Guide/>
      <Footer/>
    
    </>
  );
}

export default App;
