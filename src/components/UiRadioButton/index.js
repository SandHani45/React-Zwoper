import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import UiText from '../UiText';
import UiButton from '../UiButton'
import UiHeading from '../UiHeading'

const Button = styled.button`
font-size: 14px;
height: 29px;
padding: 20px; /* If you add too much padding here, the options won't show in IE */
width: 250px;
border: 2px solid #fff;
border-radius: 24px;
height: 50px;
font-size: 16px;
background:${props => props.theme.btn_bck_Color === 'black' ? 'black' : 'white'}
margin:${props => !!props.theme.margin ? props.theme.margin : '50px' }
`;

const RadioDiv = styled.div`
width: 100%;
background: white;
border-radius: 15px;
padding: 15px;
text-align: center;
`;

class UiRadioButton extends Component {
  render() {
    let { onClick, children, txt_color} = this.props;
    
    console.log(this.props)
    return (
      <Col xs={12} className={'padd-0'} style={{marginTop:'20px'}}>
          <Col md={12} sm={12} xs={12} className={'padd-0'} style={{marginBottom: '20px'}}>
            <UiHeading type='h5' text={'Wie dürfen wir Dich ansprechen?'} color={'white'} style={{textAlign:'inherit'}}/>
          </Col>
        <Col md={6} sm={6} xs={6}  className={'pull-left'} style={{padding: '0px 5px'}}>
            <RadioDiv margin='0px'  width='100%'>
              <b style={{fontSize:'16px',color:'#54B967'}}>{'Männlich'}</b>
             </RadioDiv>
        </Col>
        <Col md={6} sm={6} xs={6} className={'pull-right'} style={{padding: '0px 5px'}}>
           
            <RadioDiv margin='0px'  width='100%'>
              <b style={{fontSize:'16px',color:'#54B967'}}>{'Weiblich'}</b>
             </RadioDiv>
        </Col>
      </Col>
    );
  }
}

export default UiRadioButton;
