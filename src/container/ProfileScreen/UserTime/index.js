import React from 'react';

const UserTime = (props) => {
    const { hour, minute } = props;
    return (
        <div className={'profileDealBox hoursMinutesBox'}>
            <span className={'profileDealBoxInner text-center'}><h4>{hour}</h4> <span>{'Stunden'}</span></span>
            <span className={'profileDealBoxInner text-center'}><h4>{minute}</h4><span>{'Minuten'}</span></span>
        </div>
    );
};

export default UserTime
