import React from 'react'
import UiMenuList from '../../../components/UiMenuList';
import Icons from '../../../theme/icons'
import "../style.scss"

const ContactScreen = (props) => {
    return (
        <div className={'settingScreen'}>
            <ul className={'setScreenList withOutBorder'}>
                <li>
                    <UiMenuList 
                        title="Nutzungsbedingungen"
                        rightComponent={
                            <img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />
                        } 
                    />
                </li>
                <li>
                    <UiMenuList 
                        title="Datenschutz"
                        rightComponent={
                            <img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />
                        } 
                    />
                </li>
                <li>
                    <UiMenuList 
                        title="Meine Daten"
                        rightComponent={
                            <img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />
                        } 
                    />
                </li>
                <li>
                    <UiMenuList 
                        title="Impressum"
                        rightComponent={
                            <img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />
                        } 
                    />
                </li>
            </ul>
        </div>
    );

}

export default ContactScreen
