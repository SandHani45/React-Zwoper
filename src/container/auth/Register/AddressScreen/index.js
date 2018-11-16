import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UiLogo from '../../../../components/Logo';
import UiBackButton from '../../../../components/UiBackButton';
import UiHeading from '../../../../components/UiHeading';
import UiTextField from '../../../../components/UiTextField';
import UiButton from '../../../../components/UiButton';
import '../style.scss';
import images from '../../../../theme/images';

class AddressScreen extends Component {
  render() {
    return (
      <div className={'padd-right-left'}>
        <UiHeading
          text={'Deine Adresse:'}
          size={19}
          type={'h1'}
          style={{ textAlign: 'left', fontWeight: '400' }}
        />

        <form>
          <UiTextField placeholder={'Plz'} />
          <UiTextField placeholder={'Ort'} />
          <Row>
            <Col xs={8} style={{ padding: '5px' }}>
              <UiTextField placeholder={'Straße'} />
            </Col>
            <Col xs={4} style={{ padding: '5px' }}>
              <UiTextField placeholder={'HausNr.:'} />
            </Col>
          </Row>
          <UiButton bColor="white" margin="50px auto" width="80%">
            {'Weiter'}
          </UiButton>
        </form>
      </div>
    );
  }
}

export default AddressScreen;
