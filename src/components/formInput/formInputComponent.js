import React from 'react';
import './formInputStyles.scss';

function FormInput({name, type, value, handleChange, label}){

    return <div className="group">
           {
                label ? <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null
            }
        <input className="form-input" name={name} type={type} value={value} required onChange={handleChange}/>
 
    </div>
}
export default FormInput;