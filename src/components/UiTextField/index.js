import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';

const Input = styled.input`
width: 100%;
font-size   : 16px;
color: white;
opacity : 0.8;
letter-spacing:1.5px;
border: 0px soild;
outline: 0px;
background: transparent;
border: 0px;
border-bottom: 1.2px solid white;
padding: 10px 0px 10px 0px;
    &::placeholder{
        color       : white;
        opacity     : 0.4;
        font-size   : 14px;
        margin-left: -15px;
}
`;



class UiTextField extends React.Component{
    render(){
        let { props } = this
        return(
            <Col md={12} sm={12} xs={12} className={'padd-0'} style={{margin:'20px 0px 10px 0px'}}>
                <Input 
                    type = {props.text}
                    placeholder={props.placeholder}
                    
                    />
            </Col>
        )
    }
}

export default UiTextField;