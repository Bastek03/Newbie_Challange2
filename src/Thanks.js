import React from "react";
import styles from "./Thanks.module.scss";
import img from "./images/illustration-thank-you.svg";

const Thanks = props => {
    return(
        <div className={styles.App}>
            <div>
                <img src={img} alt="thanks"></img>
            </div>
            
            <div className={styles.showRate}>
                <p>You selected {props.rate} out of 5</p>
            </div>

            <h2>Thank you!</h2>

            <p className={styles.contentTxt}>We appreciate you taking the time to give a rating. 
                If you ever need more support don't hesitate to get in touch!
            </p>
        </div>
    );
}

export default Thanks;