import React from 'react';
import './styles.scss';
import { FormControl } from 'react-bootstrap';


const UiInput = ({ placeholder, value, handleChange, type }) => {
    return (
        <div className="input-div">
            <FormControl
                type={type || "text"}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className="input-auth"
            />
        </div>
    )
}

export default UiInput;