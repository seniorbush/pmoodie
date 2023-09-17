import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectCube, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import { useRef } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";

// import { useState } from 'react';

function App() {
  const techList1 = [
    <DiHtml5 className="tech" />,
    <DiCss3 className="tech" />,
    <DiJsBadge className="tech" />,
    <DiNodejsSmall className="tech" />,
    <DiMongodb className="tech" />,
  ];

  const techList2 = [
    <DiHtml5 className="tech" />,
    <DiJsBadge className="tech" />,
    <DiCss3 className="tech" />,
  ];

  const techList3 = [
    <DiHtml5 className="tech" />,
    <DiCss3 className="tech" />,
    <DiReact className="tech" />,
    <DiNodejsSmall className="tech" />,
    <DiJsBadge className="tech" />,
  ];

  const techList4 = [
    <DiHtml5 className="tech" />,
    <DiCss3 className="tech" />,
    <DiReact className="tech" />,
    <DiJsBadge className="tech" />,
  ];

  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      {/* <Navbar/> */}

      <div className="section1">
        <Hero />
        <Footer ref={projectRef} pageName="PROJECTS" />
      </div>

      <div className="section2">
        <Fade duration={1500}>
          <Header title="PROJECTS" />

          <div className="Projects">
            <Swiper
              modules={[Navigation, EffectCube, Pagination]}
              navigation
              pagination={{ clickable: true }}
              effect
              centeredSlides={true}
              speed={500}
              slidesPerView={1}
              loop
              className="cardSwiper"
            >
              <SwiperSlide className="swiperSlide">
                <Card
                  key="blockBerry"
                  img={require("./assets/crypto_app(2).png")}
                  github="https://github.com/seniorbush/blockberry"
                  live="https://blockberry.onrender.com/"
                  title="Blockberry"
                  tech={techList1}
                  description="The website is built using Node.js/Express.js/EJS/Chart.js, MongoDB for user 
                  authentication and validation and Bootstrap for styling.  
                  Communicates with the CoinGecko and Newsdata.io APIs to provide real-time information 
              about various cryptocurrencies. "
                />
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <Card
                  key="fact"
                  img={require("./assets/doodle2.jpg")}
                  github="https://github.com/seniorbush/fact_gen"
                  live="https://dailyfact.netlify.app/"
                  title="Fact Generator"
                  tech={techList2}
                  description="This responsive web application allows users to 
              make an API call and return a random fact, built using HTML, CSS, and 
              JavaScript. This simple project was created as tool to encourage my daughter to continue learning throughout the summmer."
                />
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <Card
                  key="pmoodie"
                  img={require("./assets/basket2.png")}
                  github="https://github.com/seniorbush/easybasket"
                  live="https://easybasket.netlify.app/"
                  title="easyBasket (W.I.P)"
                  tech={techList4}
                  description="A react web application 
              styled with Material UI.  Utilizes the Spoonacular API 
              to search and display recipes to the user.  
              Ability to generate a shopping list based on the 
              ingredients of the selected recipe."
                />
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <Card
                  key="pmoodie"
                  img={require("./assets/pmoodieuk.png")}
                  github="https://github.com/seniorbush/pmoodie"
                  // live="https://pmoodie.uk"
                  title="Portfolio Website"
                  tech={techList3}
                  description="This project is my portfolio website built using React. 
               I implemented the useState and useRef hooks
              alongside numerous React libraries.  
              This website serves as a showcase of my work and skills."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
        <Footer pageName="CONTACT" ref={contactRef} />
      </div>

      <div className="section3">
        <Fade duration={1800}>
          <Header title="CONTACT" />

          <Slide cascade duration={1150} direction="up">
            <Contact />
          </Slide>
        </Fade>
        <Copyright />
      </div>
    </div>
  );
}

export default App;
