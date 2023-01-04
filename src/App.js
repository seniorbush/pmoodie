import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card'
import {Fade} from "react-awesome-reveal"

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className='section'>
      <Hero />
      </div>


      <div className='section'>

        <Fade duration={1500}>
        <div className='Projects'>
        <Card 
        img={require("./my-project-landing.png")}
        title="Project #1"
        description="As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus."
        />
        <Card 
        img={require("./my-project-landing.png")}
        title="Project #2"
        description="As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus."
        />
        <Card 
        img={require("./my-project-landing.png")}
        title="Project #3"
        description="As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus."
        />
        
        </div>
        </Fade>
      
      </div>
      

      <div className='section'>

      <Fade duration={1500}>
        <h2>Contact Page</h2>
      </Fade>
      
      </div>
      
    </div>
  );
}

export default App;
