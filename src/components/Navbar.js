import styles from "./Navbar.module.css"
import {FaCircle} from "react-icons/fa"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
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