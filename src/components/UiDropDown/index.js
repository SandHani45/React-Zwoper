import React, { Component } from 'react'
import {
    Dropdown, MenuItem
} from 'react-bootstrap'
import Icons from "../../theme/icons";
import './style.scss'
export default class CustomToggle extends Component {

    render() {
        return (
            <Dropdown id="dropdown-custom-1" className={'optionIcon pull-left'}>
                <Dropdown.Toggle noCaret>
                    <img src={Icons.optionIcon} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors pull-right">
                    <li className={'activityTop'}>Du hast es in der Hand! Hier kannst
                         Du alles rund um Deine Person und Deine Aktivitäten auf Zwopr verwalten</li>
                    <MenuItem eventKey="1"><span><img src={Icons.userIcon} alt="" /></span>Mein Profil</MenuItem>
                    <MenuItem eventKey="2"><span><img src={Icons.privacyIcon} alt="" /></span>Privatsphäre & Nutzerkonto</MenuItem>
                    <MenuItem eventKey="3"><span><img src={Icons.favariteIcon} alt="" /></span>Meine Merkliste</MenuItem>
                    <MenuItem eventKey="4"><span><img src={Icons.zowperIcon} alt="" /></span>Über Zwopr & Kontakt</MenuItem>
                    <MenuItem eventKey="4"><span><img src={Icons.inviteIcon} alt="" /></span>Freunde einladen</MenuItem>
                    <MenuItem eventKey="4"><span><img src={Icons.logoutIcon} alt="" /></span>Ausloggen</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}