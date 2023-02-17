import styles from "./Hero.module.css"
import {Fade, Slide, AttentionSeeker} from "react-awesome-reveal"
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa"
// import logo from "../assets/pm_logo.png"



export default function Hero(){
    return (
        <div className={styles.main}>
            <Fade duration={1800}>
                <Slide cascade duration={1150} direction="down">
                    <AttentionSeeker effect="pulse" 
                        duration={1150} 
                        delay={1100} 
                        >
                        <h1>Philip Moodie</h1>
                        </AttentionSeeker>
                        
                        <AttentionSeeker effect="pulse" 
                        delay={1100} 
                        duration={1150}>
                            <h2>
                                <span>W</span>
                                <span>E</span>
                                <span>B</span>
                                <span> </span>
                                <span>D</span>
                                <span>E</span>
                                <span>V</span>
                                <span>E</span>
                                <span>L</span>
                                <span>O</span>
                                <span>P</span>
                                <span>E</span>
                                <span>R</span>
                            </h2>
                        </AttentionSeeker>

                </Slide>
            </Fade>
            

          <Fade delay={1900}>
                
                <p>Hi there! 
                    My name is Philip and I am a web developer 
                    from Northern Ireland.
                    Design and technology have always fascinated me. 
                    Web development has helped me merge those 
                    interests and become passionate about 
                    creating innovative and user-friendly websites. 
                    I love to learn and take on new challenges, always seeking new 
                    opportunities to improve my skills.
                    </p>

                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/pmoodie/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.linkedin}/></a>
                    <a href="https://github.com/seniorbush" target="_blank" rel="noreferrer"><FaGithub className={styles.github}/></a>
                    <a href="https://drive.google.com/file/d/1YcWoh16etd35iFhEKWrmVmd-IwHKseUR/view?usp=share_link" target="_blank" rel="noreferrer"><FaFileDownload className={styles.downloadCV}/></a>
                    
                    {/* <a href="" download target="_blank" rel="noreferrer"><FaFileDownload className={styles.downloadCV}/></a> */}
                </div>

                

          </Fade>
        
        
        </div>
    
   
    )
}