import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import { colors, fonts } from '../../theme/global.js';
import UiText from '../UiText';

const Button = styled.button`
font-size: 14px;
color: ${props => (props.theme.color ? props.theme.color : colors.themeColor)}
height:${props => (props.theme.height === 'thin' ? '40px' : '50px')}; 
padding:${props => (!!props.theme.padding ? props.theme.padding : '15px')}; 
width: ${props => (!!props.theme.width ? props.theme.width : '250px')};
border: 1px solid #fff;
border-radius: ${props => (props.theme.radius === 'round' ? '50px' : '15px')};
text-align:${props => (!!props.theme.align ? props.theme.align : 'center')};
font-size: 16px;
font-weight ${props => (props.theme.weight === 'bold' ? fonts.weight.heavy : fonts.weight.xs_light)};
background:${props => (props.theme.btn_bck_Color ? props.theme.btn_bck_Color : 'white')}
margin:${props => (!!props.theme.margin ? props.theme.margin : '15px')}

`;

class UiButton extends Component {
  renderIcons = props => {
    return (
      <span style={{ float: 'right' }}>
        <IoIosAddCircle style={{ color: 'white', transform: 'scale(1.8)' }} />
      </span>
    );
  };

  render() {
    let { text, onClick, children, txt_color, withIcons } = this.props;
    console.log(this.props);

    return (
      <Col xs={12} className={!!withIcons ? 'padd-0' : 'padd-0 txt-center'}>
        <Button theme={{ ...this.props }} onClick={onClick}>
          <span>{!!text ? text : children}</span>

          {!!withIcons ? this.renderIcons() : ''}
          {/* <UiText text={!!text ?  text : children} color={txt_color} /> */}
        </Button>
      </Col>
    );
  }
}

export default UiButton;
