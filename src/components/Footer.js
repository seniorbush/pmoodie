import {AttentionSeeker, Fade} from "react-awesome-reveal"
import styles from "./Footer.module.css"
import {SlArrowDown} from "react-icons/sl"

export default function Footer(props){
    return (
        <div className={styles.nextPage}>
            <h3>{props.pageName}</h3>
            <SlArrowDown className={styles.arrow}/>
        </div>
    )
}
