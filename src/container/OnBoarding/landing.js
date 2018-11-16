import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import UiCollapsable from '../../components/UiCollapsable';
import UiHeading from '../../components/UiHeading';
import UiButton from '../../components/UiButton';

class WelcomeScreen extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Col xs={12}>
        <Col xs={12} style={{ margin: '30px 0px 100px 0px' }}>
          <UiHeading type="h2" style={{ fontSize: '16px', margin: '0px 0px 18px 0px' }} text={'  Danke,'} />
          <UiHeading
            type="h5"
            style={{ fontWeight: '100', margin: '0px', textAlign: 'left' }}
            text={'Nun sage uns etwas über dich…Über dein Potential, deine Talente und Wünsche'}
          />
        </Col>
        <div>
          <Col xs={12}>
            <UiButton
              text={'Profil später vervollständigen'}
              radius="round"
              height="thin"
              padding="0px"
              btn_bck_Color="transparent"
              color="white"
            />
          </Col>
          <Col xs={12}>
            <UiButton text={'Los geht´s (ca. 3min)'} />
          </Col>
        </div>
      </Col>
    );
  }
}

export default WelcomeScreen;
