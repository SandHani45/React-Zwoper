import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UiBackButton from '../../components/UiBackButton';
import images from '../../theme/images';

import WelcomeScreen from './landing';
import YourTalentsScreen from './YourTalents';
import { offer } from './WhatYouOffer';
import { share } from './WhatYouShare';
import { lookingFor } from './WhatYouLookingFor';

import SelectSkilss_Screen from './selectSkills';
import Add_SelectSkills_Screen from './add_SelectSkills';

export var Main = props => (
  <Grid className="padd-marg-0">
    <UiBackButton hideRight={true} />
    <Row className="background" alt="background">
      <Col
        xs={12}
        className="pull-right txt-center"
        style={{ margin: props.img_wrap_margin ? props.img_wrap_margin : '-60px 0px -30px 0px' }}
      >
        <img src={props.decor_img_src} className={props.img_style_class} style={{ ...props.style }} />
      </Col>
      {props.children}
    </Row>
  </Grid>
);

export var YourTalents = () => (
  <Main decor_img_src={images.decor_talents} img_style_class="decor-image">
    <YourTalentsScreen />
  </Main>
);

//******* What You Offer Screens  *****/
export var Landing_screen = () => (
  <Main decor_img_src={images.decor_boy_thumbs_up} img_style_class="decor-image-center ">
    <WelcomeScreen />
  </Main>
);

export var SelectSkilss = () => (
  <Main
    img_wrap_margin="0px 0px -30px 0px"
    decor_img_src={images.decor_tools}
    img_style_class="decor-image-center"
    style={{ width: '270px' }}
  >
    <SelectSkilss_Screen />
  </Main>
);

export var Add_SelectSkills = props => {
  let { pathname } = props.history.location;
  let styles_attr = { img_style_class: 'decor-image-center', style: { width: '270px' } };
  if (pathname == '/what_you_share') {
    return (
      <Main {...styles_attr} decor_img_src={images.decor_tools} img_wrap_margin="0px 0px -30px 0px">
        <Add_SelectSkills_Screen data={share} />
      </Main>
    );
  } else if (pathname == '/what_you_looking_for') {
    return (
      <Main {...styles_attr} decor_img_src={images.decor_gardening_boy} img_wrap_margin="-65px 0px -30px 0px">
        <Add_SelectSkills_Screen data={lookingFor} />
      </Main>
    );
  }
};
