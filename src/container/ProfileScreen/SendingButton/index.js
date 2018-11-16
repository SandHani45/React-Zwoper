import React from 'react';
import UiProfileButton from '../../../components/UiProfileButton'
import { colors } from "../../../theme/global";
import '../style.scss'

const SendingButton = (props) => {
    const { text } = props;
    return (
        <div className={'sendingButtons'}>
            <UiProfileButton  btn_bck_Color={colors.themeColor} txt_color={colors.white} >
                {text}
            </UiProfileButton>
            <UiProfileButton  btn_bck_Color={colors.themeColor} txt_color={colors.white} >
                {text}
            </UiProfileButton>
        </div>
    );
};

export default SendingButton
