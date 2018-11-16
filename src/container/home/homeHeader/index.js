import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../styles.scss';
import Icons from '../../../theme/icons';
import UiTopBar from '../../../components/UiTopBar';
import UiCardHome from '../../../components/UiCardHome';
import HomeHorizontalScrollComponent from '../../../components/UiScrollHorizontalHome';

const data = [1, 1, 1, 1];
class HomeHeader extends Component {
  renderAddButton = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button style={{ top: '50%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Icons.plusCircleOutline}
              alt="addIcon"
              className="header-home-icon"
              style={{ height: 'auto', width: '40px', margin: '20px' }}
            />
            <p>{'Express Zwophinzufügen'}</p>
          </div>
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="home-body">
        <div style={{ background: 'white', color: 'green', padding: '10px' }}>
          <span className="home-header-sapan" style={{ color: 'green' }}>
            {this.props.text}
          </span>
        </div>
        <div>
          <UiTopBar shadow={true} />
        </div>
        {/**** Your Wishes */}
        <div className="margin50">
          <HomeHorizontalScrollComponent listData={data} />
        </div>
        {/***** Express Users  */}
        <Col>
          <div className="express-red-back" />
          <HomeHorizontalScrollComponent listData={data} margin="-120px 0px 0px 0px" styleHeading={{ color: 'white' }} />
          {this.renderAddButton()}
        </Col>

        {/***** Top Skills your Environment  */}
        <Col>
          <div className="express-green-back" />
          <HomeHorizontalScrollComponent
            user_cover_back={true}
            listData={data}
            margin="-120px 0px 0px 0px"
            styleHeading={{ color: 'white' }}
          />
          {this.renderAddButton()}
        </Col>
      </div>
    );
  }
}

HomeHeader.defaultProps = {
  text: 'Hallo Christian! Du hast 6h 45m im Zeittank',
  shadow: true,
};

export default HomeHeader;
