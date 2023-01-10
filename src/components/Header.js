import styles from "./Header.module.css"

export default function Header(props){
    return (
       
        <div className={styles.header}>
            <h2>{props.title}</h2>
        </div>
  
    )
}