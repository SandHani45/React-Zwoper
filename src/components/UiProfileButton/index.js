import React, { Component } from 'react';
import styled from 'styled-components';
import UiText from '../UiText/index'

const Button = styled.button`
font-size: 14px;
height: 29px;
padding: 10px; /* If you add too much padding here, the options won't show in IE */
width: 150px;
border: 2px solid #fff;
border-radius: 10px;
height: 50px;
font-size: 16px;
font-weight:400;
background:${props =>
        props.theme.btn_bck_Color !== 'undefined' ? props.theme.btn_bck_Color : 'white'}
// margin:50px;
`;

class UiButton extends Component {
    render() {
        let { onClick, children, txt_color, className } = this.props;

        return (
            <Button className={className !== undefined ? className : ""} theme={this.props} onClick={onClick} >
                <UiText text={children} color={txt_color} bold={400} size={16} />
            </Button>
        );
    }
}

export default UiButton;