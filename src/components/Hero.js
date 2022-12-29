import styles from "./Hero.module.css"
import logo from "../assets/pm_logo.png"



export default function Hero(){
    return (
        <div className={styles.hero}>

            <div className={styles.leftSide}>
                <h1>PHILIP MOODIE</h1>
                <h2>WEB DEVELOPER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, arcu in scelerisque luctus, lacus turpis scelerisque nisi, eu lacinia nisl nibh at odio. Ut laoreet accumsan nisi sed dignissim. Phasellus turpis justo, fermentum ut quam eget, feugiat porttitor sapien. Sed risus nunc, porta ullamcorper consequat quis, sodales sit amet nibh.</p>
                <button>Download CV</button>
            </div>
            

            <div className={styles.rightSide}>
                <img src={logo} alt=""/>
            </div> 
            
        </div>
    )
}