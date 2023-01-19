import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from './components/Contact';
import Copyright from './components/Copyright';

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Navigation, EffectCube, Pagination } from 'swiper';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import { useRef } from 'react';

import {Fade, Slide} from "react-awesome-reveal"
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMongodb } from "react-icons/di";

// import { useState } from 'react';

function App() {
  const techList1 = [
    <DiHtml5 className="tech"/>,
    <DiCss3 className="tech"/>,
    <DiJsBadge className="tech"/>,
    <DiNodejsSmall className="tech"/>,
    <DiMongodb className="tech"/>
  ];

  const techList2 = [
    <DiHtml5 className="tech"/>,
    <DiJsBadge className="tech"/>,
    <DiCss3 className="tech"/>
  ];

  const techList3 = [
    <DiHtml5 className="tech"/>,
    <DiCss3 className="tech"/>,
    <DiReact className="tech"/>,
    <DiNodejsSmall className="tech"/>,
    <DiJsBadge className="tech"/>
  ];

  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
     
      {/* <Navbar/> */}

      <div className='section1'>
        <Hero />
        <Footer
        ref={projectRef}
        pageName="PROJECTS"
        />
      </div>
           


      <div className='section2'>
     
        <Fade duration={1500}>
        <Header title="PROJECTS"/>
       
        <div className='Projects'>

          <Swiper
          modules={[Navigation, EffectCube, Pagination]}
          navigation
          pagination={true}
          effect
          centeredSlides={true}
          speed={500}
          
          slidesPerView={1}
          
          loop
          className="cardSwiper"
          >
               <SwiperSlide className='swiperSlide'>
              <Card 
              key="blockBerry"
              img={require("./assets/crypto_app(2).png")}
              github="https://github.com/seniorbush/blockberry"
              live="https://blockberry.onrender.com/"
              title="Blockberry"
              tech={techList1}
              description="This cryptocurrency pricing and portfolio website that uses 
              the CoinGecko and Newsdata.io APIs to provide real-time information 
              about various cryptocurrencies. It also incorporates MongoDB for user 
              authentication and validation. The website is built using Node.js, 
              Express.js, and EJS, with Chart.js and Bootstrap for styling and layout."
              />
            </SwiperSlide>
            <SwiperSlide className='swiperSlide'>
              <Card
              key="loan" 
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
              based on these inputs."
              />
            </SwiperSlide>
            <SwiperSlide className='swiperSlide'>
              <Card
              key="pmoodie" 
              img={require("./assets/pmoodieuk.png")}
              github="https://github.com/seniorbush/pmoodie"
              live="https://pmoodie.uk"
              title="Portfolio Website"
              tech={techList3}
              description="This web development project is my portfolio website. 
              It was my first project using React. 
              I applied the useState and useRef hooks
              alongside numerous React libraries.  
              This website serves as a showcase of my work and skills, I am very proud of the end result and everything i learned in the process."
              />
            </SwiperSlide>
         
          </Swiper>
        </div>
        
        </Fade>
        <Footer pageName="CONTACT"
        ref={contactRef}/>

      </div>
      

      <div className='section3'>
      <Fade duration={1800}>
        
        <Header title="CONTACT"/>

        <Slide cascade duration={1150} direction="up">   
          <Contact/>
        </Slide>

      </Fade>
      <Copyright/>
      </div>
      
    </div>
  );
}

export default App;
