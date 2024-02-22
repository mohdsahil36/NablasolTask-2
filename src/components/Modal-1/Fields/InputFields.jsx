import React, { useState } from 'react';
import classes from './InputFields.module.css';

export default function InputFields() {
    const [errors, setErrors] = useState({});

    function changeHandler(e) {
        const { name, value } = e.target;
        if (value.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: `${name} is required`
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
        console.log(value);
    }

    return (
        <div className={`container ${classes['fields-table']}`}>
            <div className='firstName'>
                <label htmlFor="fName">First Name <span className='text-primary'>*</span></label>
                <input type="text" name="firstName" placeholder='Input Your First name' required onChange={changeHandler} />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className='lastName'>
                <label htmlFor="lName">Last Name <span className='text-primary'>*</span></label>
                <input type="text" name="lastName" placeholder='Input Your Last Name' required onChange={changeHandler} />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div className='email'>
                <label htmlFor="email">Email <span className='text-primary'>*</span></label>
                <input type="email" name="email" placeholder='Input Your Email' required onChange={changeHandler} />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='pNumber'>
                <label htmlFor="pNumber">Phone Number <span className='text-primary'>*</span></label>
                <input type="tel" name="phoneNumber" placeholder='Input Your Phone Number' required onChange={changeHandler} />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div className='password'>
                <label htmlFor="pass">Password <span className='text-primary'>*</span></label>
                <input type="password" name="password" placeholder='Create Password' required onChange={changeHandler} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className='confirmpassword'>
                <label htmlFor="confirmpass">Confirm Password<span className='text-primary'>*</span></label>
                <input type="password" name="confirmPassword" placeholder='Confirm Your Password' required onChange={changeHandler} />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
        </div>
    )
}
