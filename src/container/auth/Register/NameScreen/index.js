import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UiLogo from '../../../../components/Logo';
import UiBackButton from '../../../../components/UiBackButton';
import UiHeading from '../../../../components/UiHeading';
import UiTextField from '../../../../components/UiTextField';
import UiButton from '../../../../components/UiButton';
import UiRadioButton from '../../../../components/UiRadioButton';
import '../style.scss';
import images from '../../../../theme/images';

class NameScreen extends Component {
  render() {
    return (
      <div className={'padd-right-left'}>
        <UiHeading
          text={'Dein Name:'}
          size={19}
          type={'h1'}
          style={{ textAlign: 'left', fontWeight: '400' }}
        />
        <form>
          <UiTextField placeholder={'Vorname'} />
          <UiTextField placeholder={'Nachname'} />
          <UiRadioButton />
          <UiButton bColor="white" margin="50px 28px" width="80%">
            {'Weiter'}
          </UiButton>
        </form>
      </div>
    );
  }
}

export default NameScreen;
