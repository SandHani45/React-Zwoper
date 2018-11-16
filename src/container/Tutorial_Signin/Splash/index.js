import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Images from '../../../theme/images';
import Container from '../../../components/BackCover';
import BackCover from '../../../components/BackCover';
import Logo from '../../../components/Logo';

let Splash = props => {
  return (
    <Grid>
      <Logo />
      <BackCover
        fancyImg={false}
        onClick={() => props.history.push('/screen_one')}
      />
    </Grid>
  );
};

export default Splash;
