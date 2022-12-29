import styles from "./Navbar.module.css"
import logo from "../assets/pm_logo.png"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <div>
                <ul className={styles.links}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}