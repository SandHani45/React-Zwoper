import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import Images from '../../theme/images';
import Icons from '../../theme/icons';
import UiAvatar from '../UiAvatar';

const UiUploadFile = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel className={'uploadImage text-center'}>
        <UiAvatar source={Images.profileAvatar} />
        <div className="uploadImageOverlay">
          <img src={Icons.imageUploadIcon} alt="" />
        </div>
      </ControlLabel>
      <FormControl {...props} onChange={e => console.log(e.target.files)} accept="image/x-png,image/jpg,image/jpeg" />
    </FormGroup>
  );
};

export default UiUploadFile;
