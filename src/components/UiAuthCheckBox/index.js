import React from 'react';
import './styles.scss';
import { FormControl } from 'react-bootstrap';

const UiCheckBox = ({ text, onClick }) => {
  return (
    <div>
      <div className="display-flex mt0">
        <div className="flex1">
          <input
            type="checkbox"
            onClick={onClick}
            className="styled-checkbox"
          />
          <label for="styled-checkbox-1">Checkbox</label>
        </div>
        <div className="flex8">
          <small>{text}</small>
        </div>
      </div>
    </div>
  );
};

export default UiCheckBox;
