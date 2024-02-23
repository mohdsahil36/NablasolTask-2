import React from 'react';
import classes from './GeneralInformation.module.css';

export default function GeneralInformation(){
    return(
        <div className='general-info'>
            <h6 className={classes.title}>General Information </h6>
            <div className={`container ${classes['field-grid']}`}>
                <div className='brand-name'>
                    <label htmlFor="brandName">Brand Name <span className='text-primary'>*</span></label>
                    <input type="text" placeholder='Input your brand name' className={classes.brand} required/>
                </div>
                <div className='brand-type'>
                    <label htmlFor="brandType">Brand Type <span className='text-primary'>*</span></label>
                    <select name="type" id="brandType" className={`${classes['client']}`}>
                        <option value="select" disabled>Select your client</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>
                </div>
                <div className='address'>
                    <label htmlFor="address">Street Address <span className='text-primary'>*</span></label>
                    <input type="text" placeholder='Input your Street Address'className={classes.address} required/>
                </div>
                <div className='city'>
                    <label htmlFor="city">City <span className='text-primary'>*</span></label>
                    <input type="text" placeholder='Input city' className={classes.city} required/>
                </div>
                <div className='zipcode'>
                    <label htmlFor="zip">Zip Code <span className='text-primary'>*</span></label>
                    <input type="text" placeholder='Input zip code' className={classes.zip} required/>
                </div>
                <div className='tax-id'>
                    <label htmlFor="taxId">Tax Id Number <span className='text-primary'>*</span></label>
                    <input type="text" placeholder='Input Tax Id Number' className={classes.tax} required/>
                </div>
            </div>
        </div>
    )
}