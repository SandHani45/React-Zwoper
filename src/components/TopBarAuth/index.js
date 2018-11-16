import React from 'react';
import './styles.scss';
import Icons from '../../theme/icons';

const TopBar = ({ onClickBack }) => {
  return (
    <div className="top-bar">
      <img
        src={Icons.iconBackButton}
        onClick={onClickBack}
        height={20}
        alt={'top-bar'}
      />
    </div>
  );
};

export default TopBar;
