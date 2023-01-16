import styles from "./Contact.module.css"
import {FiMail} from "react-icons/fi"
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { RotatingLines } from 'react-loader-spinner'

export default function Contact(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const form = useRef();

    const resetForm = () => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }
      
    const [loading, setLoading] = useState(false);

    const toggleLoading = () => {
        if(!loading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm(
            'service_tejk04r', 
            'template_tqss8bp', 
            form.current, 
            'FuC6mgnfaUXnJyXbl')
        .then((result) => {
            console.log("Status: ",result.status, result.text, "| Message sent.");
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
              })
              toggleLoading();
            resetForm();
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text,
              })
        });
    };



    return (

        <div className={styles.contactCard}>
            
            <form 
            ref={form} 
            className={styles.contactForm}
            onSubmit={sendEmail}>

                <h2>Let's talk!</h2>
                <label>
                    <span>Name:</span>
                    <input 
                    required
                    type="text" 
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                    required
                    type="email" 
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Subject:</span>
                    <input 
                    required
                    type="text" 
                    name="user_subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}/>
                </label>
                <label>
                    <span>Message:</span>
                    <textarea 
                    required
                    className={styles.msgBody} 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                </label>
                <button type="submit" onClick={toggleLoading}>
                    {loading ? (
                    <RotatingLines
                    strokeColor="#fff"
                    strokeWidth="3"
                    animationDuration="1.75"
                    width="40"
                    visible={true}
                    />)
                    :
                    (<FiMail className={styles.mail}/>)}
                </button>
            </form>  
        
            <div className={styles.contactImg}>
            </div>
        
        </div>
        
    )
}