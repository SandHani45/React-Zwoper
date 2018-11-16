import React, { Component } from 'react'
import styled from 'styled-components'

let languages = ['English', 'Deutsch', 'Hindi']


const Select = styled.select`

background: transparent;

font-size: 14px;
height: 29px;
padding: 5px; /* If you add too much padding here, the options won't show in IE */
width: 268px;
border: 2px solid #fff;
border-radius: 24px;
/* padding: 5px; */
height: 50px;
font-size: 16px;
`;


class UiCombo extends Component {
    render() {
        return (
            <div>
                <Select>
                    {languages.map(lang => <option value={lang}>{lang}</option>)}
                </Select>
            </div>
        )
    }
}

export default UiCombo;