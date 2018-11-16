import React from 'react';
import styled from 'styled-components';
import UiHeading from '../../../components/UiHeading'


const Avtar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 55px
`;
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


const UserInfo = (props) => {
    const { dateText, name, contry } = props;
    return (
        <div className={'profileDetails'}>
            <UiHeading text={dateText} type={'h1'} size={10} color={'#767676'} style={{ textAlign: 'left', margin: '4px 0 10px' }} />
            <UiHeading text={name} size={19} color={'#163D56'} type={'h1'} style={{ textAlign: 'left', margin: '0 0 10px', fontWeight: '600' }} />
            <UiHeading text={contry} type={'h1'} size={12} color={'#767676'} style={{ textAlign: 'left', margin: '0 0 10px' }} />
        </div>
    );
};

export default UserInfo
