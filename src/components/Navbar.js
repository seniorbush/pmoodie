import styles from "./Navbar.module.css"
import {FaCircle} from "react-icons/fa"
import logo from "../assets/pm_logo.png"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <div>
                <ul className={styles.links}>
                    <li className={styles.dots}><FaCircle/></li>
                    <li className={styles.dots}><FaCircle/></li>
                    <li className={styles.dots}><FaCircle/></li>
                </ul>
            </div>
        </div>
    )
}