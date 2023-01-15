import React from "react"
import {Fade} from "react-awesome-reveal"
import styles from "./Footer.module.css"
import {SlArrowDown} from "react-icons/sl"

 const Footer = React.forwardRef((props, ref) => {
    return (
        <div className={styles.nextPage}
        ref={ref}
        onClick={() => {
            ref.current.scrollIntoView({behaviour:"smooth"});
        }}>
            <Fade 
            cascade
            duration={1200}
            delay={1800}>
                <h3>{props.pageName}</h3>
                <SlArrowDown className={styles.arrow}/>
            </Fade>
            
        </div>
    )
});


export default Footer;