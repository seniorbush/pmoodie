import {FaGithub} from "react-icons/fa"
import {TbExternalLink} from "react-icons/tb"
import styles from "./Card.module.css"

export default function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.callToAction}>
                <img className={styles.cardImg} src={props.img} alt=""/>
                <div className={styles.buttons}>
                    <button className={styles.cardLinkLeft}><a href={props.github} target="_blank" rel="noreferrer"><FaGithub/> Github</a></button>
                    <button className={styles.cardLinkRight}><a href={props.live} target="_blank" rel="noreferrer"><TbExternalLink/> Live Site</a></button>
                </div>
            </div>
            <div className={styles.lowerCard}>
            <h2 className={styles.cardTitle}>{props.title}</h2>
                <div className={styles.techList}>{props.tech}</div>
                <h4 className={styles.titles}>Description:</h4>
                <p className={styles.cardDescription}>{props.description}</p>
            </div>
                               
            </div>
            
            

        </div>
        
    )
}

