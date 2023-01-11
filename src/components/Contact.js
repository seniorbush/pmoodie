import styles from "./Contact.module.css"
import {FiMail} from "react-icons/fi"
import logo from "../assets/pm_logo.png"

export default function Contact(){
    return (

        <div className={styles.contactCard}>

            <form className={styles.contactForm}>

            {/* <div className={styles.logo}>
                    <img src={logo} alt=""/>
                </div> */}
                <h2>Let's talk!</h2>
                <label>
                    <span>Name:</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Subject:</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Message:</span>
                    <textarea className={styles.msgBody}>
                    </textarea>
                </label>
                <button>
                <FiMail className={styles.mail}/>
                </button>
            </form>  
        
            <div className={styles.contactImg}>
            

            </div>
        
        </div>
        
    )
}