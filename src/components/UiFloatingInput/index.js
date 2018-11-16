import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './style.scss'

const UiFloatingInput = (props) => {
    const { id, label, help } = props;
    return (
        <FormGroup controlId={id}>
            <FormControl {...props} required />
            <ControlLabel className={'form-control-placeholder'}>{label}</ControlLabel>
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    )
}

export default UiFloatingInput