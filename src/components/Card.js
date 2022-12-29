import styles from "./Card.module.css"

export default function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <img className={styles.cardImg} src={props.img} alt=""/>
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <p className={styles.cardDescription}>{props.description}</p>
            </div>
            <button className={styles.cardLinkLeft}>Github</button>
            <button className={styles.cardLinkRight}>Live Site</button>

        </div>
        
    )
}