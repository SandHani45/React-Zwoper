import React from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import Icons from '../../theme/icons';

const PlusIcon = ({ type, onClick }) => {
  if (type == 'big') {
    return (
      <div className="plus-icon-big" onClick={onClick}>
        <div className="plus-icon-big-inner-div">
          <img src={Icons.plus} className="plus-icon-img" alt={'plus-icon'} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="plus-icon-small" onClick={onClick}>
        <span className="plus-icon-smal-font">+</span>
      </div>
    );
  }
};

PlusIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

PlusIcon.defaultProps = {
  type: 'small',
};

export default PlusIcon;
