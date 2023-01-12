import styles from "./Contact.module.css"
import {FiMail} from "react-icons/fi"

export default function Contact(){
    return (

        <div className={styles.contactCard}>

            <form className={styles.contactForm}>

            
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