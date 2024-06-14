
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Worktogether from './components/Worktogether';
import Testimonials from './components/Testimonials';
import { useState } from 'react';

function App() {
  const [test , setTest] = useState(false)
  function handlePreviousClick(){
    setTest(prevState => !prevState.test);
  }
  return (
    <div >
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      {test && <Testimonials name="Jared Warner" testimonial="The quick, brown fox jumps over a lazy dog. DJs 
      flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, 
      vex nymphs. Waltz, bad nymph, for quick jigs vex!" profileImgUrl="./testimonials-img.jpeg" designation="CEO of Figma" onClick={handlePreviousClick}/>}
      
      <Worktogether/>
      <Footer/>
    </div>
  );
}

export default App;
