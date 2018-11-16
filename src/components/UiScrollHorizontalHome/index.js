import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles.scss';
import UiCardHome from '../UiCardHome';
import Images from '../../theme/images';

const HomeHorizontalScrollComponent = ({
  headdingLeftText,
  headdingRigthText,
  cardType,
  listData,
  margin,
  styleHeading,
  user_cover_back,
}) => {
  return (
    <div style={{ margin: margin ? margin : 0 }}>
      <div className="display-flex" style={{ ...styleHeading }}>
        <span className="flex-3 home-horizontal-span-left">{headdingLeftText}</span>
        <span className="flex-1 home-horizontal-span-right">{headdingRigthText}</span>
      </div>
      <div className="scrollmenu">
        {/* <UiCardHome
          type={cardType}
          addIcon={true} // image={Images.avtarImage}
        /> */}
        {listData.map((data, index) => {
          return (
            <div className="scrollmenu-div">
              <UiCardHome
                user_cover_back={user_cover_back}
                type={cardType}
                addIcon={true} // image={Images.avtarImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeHorizontalScrollComponent.propTypes = {
  headdingLeftText: PropTypes.string,
  headdingRigthText: PropTypes.string,
  cardType: PropTypes.string,
  listData: PropTypes.array,
};

HomeHorizontalScrollComponent.defaultProps = {
  headdingLeftText: 'Passend zu deinen Wünschen',
  headdingRigthText: 'Alle ansehen',
  cardType: 'default',
  listData: [],
};

export default HomeHorizontalScrollComponent;
