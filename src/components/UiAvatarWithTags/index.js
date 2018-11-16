import React from 'react';
import styled from 'styled-components';
import UiHeading from '../UiHeading';
import Images from '../../theme/images';
import './style.scss';
import UiAvatar from '../../components/UiAvatar';

const Star = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 14px
  position: absolute
  bottom: -10px;
  right: 0;
  left:0;
  margin:0 auto;
`;

const TimeLineRate = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 14px
  margin-right:5px;
  margin:0 auto;
`;

const selectRateImage = color => {
  switch (color) {
    case 'red':
      return { src: Images.rateRed, textColor: '#F75F5F' };
    case 'yellow':
      return { src: Images.rateYellow, textColor: '#FFD145' };
    case 'green':
      return { src: Images.rateGreen, textColor: '' };
    case 'light-yellow':
      return { src: Images.rateLightYellow, textColor: '' };
    default:
      return '';
  }
};
const UiAvatarWithTags = props => {
  const { avatarSrc, rateColor, rateLabel, isUser, time, className, isBlur } = props;
  let { src, textColor } = selectRateImage(rateColor);

  if (isUser)
    return (
      <div className={'profileBox'}>
        <div className={'profileImg'}>
          <UiAvatar source={avatarSrc} />
          <Star src={src} />
        </div>
        <UiHeading
          text={rateLabel}
          type={'h1'}
          size={14}
          color={textColor}
          style={{ textAlign: 'center', margin: '20px 0 10px', fontWeight: 'bold' }}
        />
      </div>
    );
  else
    return (
      <div>
        <TimeLineRate src={src} />
        <span className={isBlur ? 'rateHoursLight' : ''}>{time}</span>
      </div>
    );
};

export default UiAvatarWithTags;
