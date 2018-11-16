import React from 'react';
import UiAvatar from '../UiAvatar';
import UiSkills from '../UiSkills';
import UiHeading from '../UiHeading';
import './style.scss';

const UiWatchList = props => {
  const { source } = props;
  return (
    <div className={'userWatchList clearfix'}>
      <UiAvatar source={source} height={72} width={72} className={'pull-left'} />
      <div className={'userWatchListName'}>
        <div className={'userWatchHeading'}>
          <UiHeading
            text={'Maria Meiser'}
            size={16}
            color={'#163D56'}
            type={'h1'}
            className={'pull-left'}
            style={{
              textAlign: 'left',
              margin: '0',
              fontWeight: '600',
            }}
          />
          <span>(5)</span>
        </div>
        <UiSkills skill={'Gassi gehen'} />
        <UiSkills skill={'Tiersitting'} />
      </div>
    </div>
  );
};
export default UiWatchList;
