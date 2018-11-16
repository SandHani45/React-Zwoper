import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UiLogo from '../../../../components/Logo';
import UiBackButton from '../../../../components/UiBackButton';
import UiHeading from '../../../../components/UiHeading';
import UiTextField from '../../../../components/UiTextField';
import UiButton from '../../../../components/UiButton';
import '../style.scss';
import images from '../../../../theme/images';

class LoginScreen extends Component {
  render() {
    return (
      <div className={'padd-right-left'}>
        <UiLogo color="white" showOnlyBack={true} />
        <UiHeading
          text={'Login'}
          size={19}
          type={'h1'}
          style={{ textAlign: 'left', fontWeight: '400' }}
        />

        <form>
          <UiTextField placeholder={'Email Adresse'} />
          <UiTextField placeholder={'Email Adresse'} />
          <UiButton bColor="white" width="80%">
            {'Login'}
          </UiButton>
        </form>
      </div>
    );
  }
}

export default LoginScreen;
