import React from 'react';
import classes from './Stepper.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BackAndNext({ onNext, onBack }) {
    return (
        <div className={classes['nav-buttons']}>
            <button className={classes['back-btn']} onClick={onBack}><ChevronLeft className={classes['left-icon']} />Back To Login</button>
            <button className={classes['next-btn']} onClick={onNext} type='submit'>Next Step<ChevronRight className={classes['right-icon']} /></button>
        </div>
    )
}
