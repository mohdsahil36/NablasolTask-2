import React from 'react';
import classes from './Modal2.module.css';
import GeneralInformation from './GeneralInformation/GeneralInformation';

export default function Modal2(){
    return(
        <h2>
            <div className={`container p-5 ${classes['modal-box']}`}>
                <h3 className={classes.step}>Step 1</h3>
                <h2 className={classes.yourProfile}>Business Information</h2>
                <p className={classes['sub-text']}>Please enter the information about your company</p>
                <GeneralInformation/>
            </div>
        </h2>
    )
}