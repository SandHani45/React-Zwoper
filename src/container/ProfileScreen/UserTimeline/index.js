import React from 'react';
import styled from 'styled-components';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import Images from '../../../theme/images';
import UiAvatarWithTags from '../../../components/UiAvatarWithTags/';
import '../style.scss';

const Rate = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 14px
  margin-right:5px;
  margin:0 auto;
`;

const UserTimeline = props => {
  const { progress, name } = props;
  return (
    <div>
      <Row>
        <Col xs={6}>
          <h4 className={'timeLineTitle'}>{name}</h4>
        </Col>
        <Col xs={6}>
          <ul className={'profileRatingProgress'}>
            <li>
              <UiAvatarWithTags rateColor={'red'} time={'0-10h'} isBlur={false} />
              <ProgressBar now={50} />
            </li>
            <li>
              <UiAvatarWithTags rateColor={'light-yellow'} time={'10-25h'} isBlur={true} />
              <ProgressBar now={0} />
            </li>
            <li>
              <UiAvatarWithTags rateColor={'green'} time={'< 25h'} isBlur={true} />
            </li>
          </ul>
        </Col>
      </Row>
      <ProgressBar className={'timeLineProgress'} now={progress} />
    </div>
  );
};

export default UserTimeline;
