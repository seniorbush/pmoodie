import styles from "./Header.module.css"
import logo from "../assets/pm_logo.png"

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
        <div>
            <h2>TEST PAGE TITLE</h2>
        </div>
    </div>     
    )
}