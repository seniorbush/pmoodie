import {AttentionSeeker, Fade} from "react-awesome-reveal"
import styles from "./Arrow.module.css"
// import {TfiArrowCircleDown} from "react-icons/tfi"

export default function ArrowDown(){
    return (
        <div className={styles.arrowDown}>
            <Fade delay={2200}>
                
                    <AttentionSeeker 
                    effect="rubberBand" 
                    triggerOnce="true" 
                    delay={6000}>
                        <TfiArrowCircleDown className={styles.nextPage}/>
                    </AttentionSeeker> 
        
            </Fade>
        </div>

        
        
    )
}

// export default function ArrowUp(){
//     return (
//         <div className={styles.arrowUp}>
//             <Fade delay={2200}>
                
//                     <AttentionSeeker 
//                     effect="rubberBand" 
//                     triggerOnce="true" 
//                     delay={6000}>
//                         <TfiArrowCircleUp className={styles.prevPage}/>
//                     </AttentionSeeker> 
        
//             </Fade>
//         </div>

        
        
//     )
// }