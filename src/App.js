import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card'
import {Fade} from "react-awesome-reveal"
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMongodb } from "react-icons/di";

function App() {
  const techList1 = [
    <DiHtml5 className="tech"/>,
    <DiCss3 className="tech"/>,
    <DiJsBadge className="tech"/>,
    <DiNodejsSmall className="tech"/>,
    <DiMongodb className="tech"/>
  ]

  const techList2 = [
    <DiHtml5 className="tech"/>,
    <DiCss3 className="tech"/>,
    <DiJsBadge className="tech"/>,
  ]

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
        img={require("./assets/basket(2).png")}
        title="EasyBasket"
        tech={techList2}
        description="As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus."
        />

        <Card 
        img={require("./assets/crypto_app(2).png")}
        github="https://github.com/seniorbush/blockberry"
        live="https://blockberry.onrender.com/"
        title="Blockberry"
        tech={techList1}
        description="This cryptocurrency pricing and portfolio website uses 
        the CoinGecko and Newsdata.io APIs to provide real-time information 
        about various cryptocurrencies. It also incorporates MongoDB for user 
        authentication and validation. The website is built using Node.js, 
        Express.js, and EJS, with Chart.js and Bootstrap for styling and layout. 
        Users can create an account and log in to create a personalized portfolio 
        of their cryptocurrency holdings, which can be tracked and updated over time."
        />

        <Card 
        img={require("./assets/loan_app(2).png")}
        github="https://github.com/seniorbush/Loan_Calculator"
        live="https://leave-me-a-loan.netlify.app/"
        title="Loan Calculator"
        tech={techList2}
        description="This responsive web application allows users to 
        calculate their monthly loan repayments using HTML, CSS, and 
        JavaScript. The user is able to input various loan details, 
        including the principal amount, interest rate, and loan term, 
        and the application will calculate the monthly repayment amount 
        based on these inputs"
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
