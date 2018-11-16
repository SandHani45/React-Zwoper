import React from 'react';
import styled from 'styled-components';
import '../styles.scss';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Images from '../../theme/images';
import PlusIcon from '../PluseIcon';
import UiAvatar from '../UiAvatar';
import UiHeading from '../UiHeading';

//express-help-card top-skills-card borrow-card

const Name = styled.p`
  margin: 0px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 0px;
  font-size: 14px;
  color: black;
  font-weight: regular;
`;
const Time = styled.p`
  margin: 10px 0px;
  font-size: 10px;
  font-weight: regular;
`;

const style_p = {
  fontWeight: '900',
  color: 'black',
  margin: '0pc',
};

const UiCardHome = ({ addIcon, text, type, headerText, secondText, image, imageBackground, user_cover_back }) => {
  console.log(user_cover_back);
  return (
    <Row className="card-home">
      <Col
        xs={12}
        style={{
          position: 'relative',
          margin: '0px',
          padding: '10px',
          height: !!user_cover_back ? 'auto' : '6rem',
        }}
      >
        {!!user_cover_back && (
          <img
            alt="avatar"
            src="https://cdn.pixabay.com/photo/2018/08/19/19/56/peacock-feathers-3617474_960_720.jpg"
            style={{ width: '100%', height: '85px', borderRadius: '10px' }}
          />
        )}

        <img src={image} size="70px" className="custom-avatar" alt="" />
      </Col>
      <Col xs={12}>
        <Name>{'Peter'}</Name>
        <Desc>{'Peter'}</Desc>
        <Time>{'Peter'}</Time>
      </Col>

      {/* <UiAvatar source={image} size="70px" style={{ borderRadius: '50%' }} /> */}
    </Row>
  );
};

UiCardHome.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  addIcon: PropTypes.bool,
  image: PropTypes.string,
  imageBackground: PropTypes.string,
};

UiCardHome.defaultProps = {
  text: 'Hansi bietet Fahrgem eischart',
  type: '',
  addIcon: false,
  headerText: 'Bohrmaschine',
  secondText: 'von Alexander',
  image: Images.avtarImage,
  imageBackground: Images.background,
};

export default UiCardHome;
