import React from 'react';
import UiAvatar from '../UiAvatar';
import UiHeading from '../UiHeading';
import Icons from '../../theme/icons';

const selectIcon = (color, type) => {
  switch (type) {
    case 'bell':
      switch (color) {
        case 'green':
          return { src: Icons.greenBell };
        case 'red':
          return { src: Icons.redBell };
        case 'yellow':
          return { src: Icons.yellowBell };
        default:
          return '';
      }
    case 'watch':
      switch (color) {
        case 'green':
          return { src: Icons.greenWatch };
        case 'red':
          return { src: Icons.redWatch };
        default:
          return '';
      }
    case 'envelop':
      switch (color) {
        case 'green':
          return { src: Icons.greenEnvelop };
        default:
          return '';
      }
    case 'message':
      switch (color) {
        case 'green':
          return { src: Icons.greenMessage };
        default:
          return '';
      }
    default:
      return '';
  }
};

const UiEventList = props => {
  const { color, type, name, status, date } = props;
  let { src } = selectIcon(color, type);
  return (
    <div>
      <UiAvatar source={src} height={10} width={10} />
      <UiHeading
        text={name}
        size={16}
        color={'#163D56'}
        type={'h1'}
        className={'pull-left'}
        style={{
          textAlign: 'left',
          margin: '0',
        }}
      />
      <UiHeading
        text={status}
        size={16}
        color={'#163D56'}
        type={'h1'}
        className={'pull-left'}
        style={{
          textAlign: 'left',
          margin: '0',
        }}
      />
      <span>{date}</span>
    </div>
  );
};
export default UiEventList;
