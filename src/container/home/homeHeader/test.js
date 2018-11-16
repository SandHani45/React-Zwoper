import React, { Component } from 'react';
import '../../styles.scss';
import Icons from '../../../theme/icons';
import PlusIcon from '../../../components/PluseIcon';
class HomeHeader extends Component {
  render() {
    return (
      <div className="header-main-div">
        {/* 
      * Headding content
      */}
        <div style={{ backgroundColor: 'white' }}>
          <span className="home-header-sapan">Hallo Christian! Du hast 6h 45m im Zeittank</span>
        </div>
        {/* Tab main Div */}
        <div className="header-tab-main-div">
          <div className="flex-1">
            <img src={Icons.home} alt="headerIcon" className="header-home-icon" />
            <label className="home-header-label">Home </label>
          </div>

          <div className="flex-1">
            <img src={Icons.mail} alt="headerIcon" className="header-home-icon" />
            <label className="home-header-label">Posttach </label>
          </div>

          <div className="flex-center">
            <div className="home-header-plus-div">
              <PlusIcon type="big" />
            </div>
          </div>

          <div className="flex-1">
            <img src={Icons.search} alt="headerIcon" className="header-home-icon" />
            <label className="home-header-label">Suche </label>
          </div>

          <div className="flex-1">
            <img src={Icons.avtar} alt="headerIcon" className="header-home-icon" />
            <label className="home-header-label">Mein Profil </label>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
