import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Text from '../../../components/UiText';
import UiTopBar from '../../../components/UiTopBar';
import './styles.scss';

class BottomBack extends Component {
  render() {
    let showBar = !!this.props.showBar ? 'block' : 'none';
    console.log(this.props.animate);
    return (
      <Row>
        <Col md={12} sm={12} xs={12}>
          <UiTopBar display={showBar} shadow={false} text={''} />
          <Text
            color="white"
            top={'2'}
            bold={300}
            display={!this.props.showBar ? 'block' : 'none'}
            text="Tippe hier, um zu beginen"
          />

          <Col md={12} sm={12} xs={12} className="vrtl-line-1" style={{ display: showBar }}>
            <div style={{ left: this.props.animate.line_left + 'px' }} />
            <div style={{ left: this.props.animate.txt_left + 'px' }}>
              <span className="tuto-text-1">{'Home - Hier geht’s zu Deiner persönlichen Startseite'}</span>
            </div>
            {/* <div className="vrtl-line-2" ></div>
                               <div>
                                   <span className="tuto-text-2">{'Verwalte Deine gesamte Korrespondenz mit anderen Zwoprn'}</span>

                               </div> */}
          </Col>
        </Col>
        <Col md={12} sm={12} xs={12} className="curve-design" style={{ ...this.props.style }}>
          <Col md={12} sm={12} xs={12}>
            <button onClick={this.props.animateInfo} style={{ display: showBar }}>
              {'WEITER'}
            </button>
            <Text bold={900} size={40} color="#fff" text="zwopr" />
            <Text size={20} color="white" top={'30px'} bold={300} text="Eine Kleine Einführung" onClick={this.props.onClick} />
          </Col>
          <span />
        </Col>
      </Row>
    );
  }
}

export default BottomBack;
