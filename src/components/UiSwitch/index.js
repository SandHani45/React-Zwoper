import React from 'react'
import { FormControl } from 'react-bootstrap'
import './style.scss'

const UiSwitch = ( props ) => {
    const { defaultChecked } = props;
    return(
        <label class="switch">
                {/* <input type="checkbox"/> */}
                <FormControl
                    type={"checkbox"}
                    defaultChecked={defaultChecked}
                />
                <span class="slider round"></span>
        </label>
        
    )
}

export default UiSwitch;