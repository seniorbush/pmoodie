import styles from "./Contact.module.css"
import {FiMail} from "react-icons/fi"
export default function Contact(){
    return (

        <div className={styles.contactCard}>
            <form className={styles.contactForm}>
                <FiMail className={styles.mail}/>

                <label>
                    <span>Name:</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Message:</span>
                    <input 
                    className={styles.msgBody} 
                    type="text"/>
                </label>
                <button>Submit</button>
            </form>  
        </div>
        
    )
}