import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card'

function App() {
  return (
    <div className="App">

      <div className='Home'>
      <Navbar />
      <Hero />
      </div>

      <div className='Projects'>
      <Card 
      img={require("./my-project-landing.png")}
      title="Fuzzy Beginnings Project"
      description="As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus."
      />
      </div>
      
    </div>
  );
}

export default App;
