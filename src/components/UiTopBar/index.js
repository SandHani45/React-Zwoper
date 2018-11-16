import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles.scss';
import Icons from '../../theme/icons';
import PlusIcon from '../PluseIcon';

const HomeHeader = props => {
  return (
    <div className={props.shadow ? 'header-main-div-shadow' : 'header-main-div'} style={{ display: props.display }}>
      {/* 
      * Headding content
      */}

      {/* Tab main Div */}
      <div className="header-tab-main-div">
        <button className="flex-1">
          <img src={Icons.home} alt="headerIcon" className="header-home-icon" />
          <label className="home-header-label">Home </label>
        </button>

        <button className="flex-1">
          <img src={Icons.mail} alt="headerIcon" className="header-home-icon" />
          <label className="home-header-label">Posttach </label>
        </button>

        <div className="flex-center">
          <button style={{ top: '50%' }}>
            <div className="home-header-plus-div">
              <img
                src={Icons.plusCircleOutline}
                alt="headerIcon"
                className="header-home-icon"
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
          </button>
        </div>

        <button className="flex-1">
          <img src={Icons.search} alt="headerIcon" className="header-home-icon" />
          <label className="home-header-label">Suche </label>
        </button>

        <button className="flex-1">
          <img src={Icons.avtar} alt="headerIcon" className="header-home-icon" />
          <label className="home-header-label">Mein Profil </label>
        </button>
      </div>
    </div>
  );
};

HomeHeader.propTypes = {
  text: PropTypes.string,
  shadow: PropTypes.bool,
};

HomeHeader.defaultProps = {
  text: 'Hallo Christian! Du hast 6h 45m im Zeittank',
  shadow: true,
};

export default HomeHeader;
