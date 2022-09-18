import React from "react";
import star from './images/icon-star.svg';
import styles from './Rate.module.scss';

const Rate = props => {

    return(
        <div className={styles.App}>
      <div className={styles.circleStatic}><img src={star} alt='Star'></img></div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </p>
      
      <div className={styles.circlesContainer}>
        <input type="radio" name="scale" id='1'/>
        <label className={styles.circle} htmlFor='1' onClick={()=> {props.setSelected(1)}}>1</label>
        <input type="radio" name="scale" id='2'/>
        <label className={styles.circle} htmlFor='2' onClick={()=> {props.setSelected(2)}}>2</label>
        <input type="radio" name="scale" id='3'/>
        <label className={styles.circle} htmlFor='3' onClick={()=> {props.setSelected(3)}}>3</label>
        <input type="radio" name="scale" id='4'/>
        <label className={styles.circle} htmlFor='4' onClick={()=> {props.setSelected(4)}}>4</label>
        <input type="radio" name="scale" id='5'/>
        <label className={styles.circle} htmlFor='5' onClick={()=> {props.setSelected(5)}}>5</label>
      </div>

      <button className={styles.submitButton} onClick={props.checkSelected}>Submit</button>
    </div>
    );
}

export default Rate;