import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const getClassName = (type, selected) => {
  console.log('********* working ******', type);
  switch (type) {
    case `submit`:
      return `btn-submit`;
    case `chose`:
      if (selected) {
        return `btn-selected`;
      }
      return `btn-selct`;

    case `btn-white`:
      return `btn-white`;

    default:
      return `btn-submit`;
  }
};

const UiButton = ({ text, onClick, type, disabled, selected }) => {
  let className = getClassName(type, selected);
  return (
    <button
      type="button"
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};

UiButton.defaultProps = {
  text: 'Button',
  type: 'submit',
  disabled: false,
  selected: false,
};

export default UiButton;
