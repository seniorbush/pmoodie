import React from "react"
import {Fade} from "react-awesome-reveal"
import styles from "./Copyright.module.css"


 const Copyright = () => {
    return (
        <div className={styles.copyright}>
            <Fade 
            cascade
            duration={1000}
            delay={1200}>
                <p>&copy; 2022 Philip Moodie. All rights reserved.</p>
            </Fade>
            
        </div>
    
        );
    }

export default Copyright;