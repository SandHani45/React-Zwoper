import React from 'react';
import UiAvatar from '../UiAvatar';
import Image from '../../theme/images';

const UiTimingList = props => {
  const { source, date, name, time, status } = props;
  return (
    <div className={'timingUiInner'}>
      <UiAvatar className={'pull-left'} source={props.source} width={28} height={28} />
      <div className={'timingUiRight'}>
        <span className={'timingDate'}>{date}</span>
        <span className={'timingUserName'}>{name}</span>
        <span className={'timingUserName timingHour pull-right'}>{time}</span>
        <div className={'timingStatus'}>{status}</div>
      </div>
    </div>
  );
};

export default UiTimingList;
