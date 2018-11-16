import React from 'react'
import UiMenuList from '../../../components/UiMenuList';
import Icons from '../../../theme/icons'
import UiText from '../../../components/UiText';
import UiSwitch from '../../../components/UiSwitch';
import "../style.scss"

const PrivacyScreen = (props) => {
    return (
        <div className={'settingScreen'}>
            <UiText className={"list-title"} text={"Hier kannst Du die Details deiner Privatsphäre auf Zwopr..."} />
            <ul className={'setScreenList'}>
                <li><UiMenuList  title="Radius Sichtbarkeit & Standort" 
                    rightComponent={<img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />} /></li>
                <li><UiMenuList  title="Hausnummer anzeigen" rightComponent={<UiSwitch defaultChecked={false}/>} /> </li>
                <li><UiMenuList  title="Straße anzeigen"  rightComponent={<UiSwitch defaultChecked={true}/>}/></li>
                <li><UiMenuList  title="Nachnamen anzeigen" rightComponent={<UiSwitch defaultChecked={true}/>}/> </li>
                <li><UiMenuList  title="Geburtsjahr anzeigen" rightComponent={<UiSwitch defaultChecked={false}/>}/> </li>
                <li><UiMenuList  title="Geburtsjahr anzeigen" rightComponent={<UiSwitch defaultChecked={false}/>}/> </li>
                <li><UiMenuList  title="Mein Nutzerkonto" rightComponent={<img className={"setArrow pull-right"} src={Icons.leftArrowIcon} alt="" />}/> </li>
            </ul>    
        </div>
    );

}

export default PrivacyScreen
