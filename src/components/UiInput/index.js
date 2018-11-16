import React from 'react';
import './styles.scss';
import { FormControl } from 'react-bootstrap';
import Icons from '../../theme/icons'


const UiInput = ({ placeholder, value, handleChange, type, isIcon }) => {
    console.log(isIcon);
    if (isIcon)
        return (
            <div className="keywordTextbox">
                <FormControl
                    type={"text"}
                    placeholder={placeholder}
                    className="input-auth"
                />
                <img src={Icons.plusIcon} className={"pull-right"} alt="" />
            </div>)
    else
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
        );
};

export default UiInput;