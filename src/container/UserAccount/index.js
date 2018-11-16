import React, { Component } from 'react'
import UiHeading from '../../components/UiHeading'
import { Form, Button } from 'react-bootstrap'
import UiFloatingInput from '../../components/UiFloatingInput';
import Icons from '../../theme/icons';
import './style.scss'

export class UserAccount extends Component {
    render() {
        return (
            <div className={'userAccount floating-form'}>
                <UiHeading text={"Persönliche Daten"}
                    size={19}
                    color={'#163D56'}
                    type={'h1'}
                    style={{
                        textAlign: 'left',
                        margin: '20px 0',
                        fontWeight: '600'
                    }}
                />

                <Form>
                    <UiFloatingInput
                        id="Name"
                        type="text"
                        label="Name"
                        placeholder="" />

                    <UiFloatingInput
                        id="Wohnort"
                        type="text"
                        label="Wohnort"
                        placeholder="" />

                    <UiFloatingInput
                        id="Anrede"
                        type="text"
                        label="Anrede"
                        placeholder="" />

                    <div className={'personalData'}>
                        <UiHeading
                            text={"Du bist umgezogen oder dein Name hat sich geändert?"}
                            size={14}
                            color={'#353A50'}
                            type={'h1'}
                            style={{
                                textAlign: 'left',
                                margin: '0 0 10px', lineHeight: '24px'
                            }}
                        />
                        <a href="#"><img src={Icons.editIcon} alt="" /> </a>
                        <span>Persönliche Daten bearbeiten</span>
                    </div>
                    <UiHeading text={"E-Mail und Passwort"}
                        size={19}
                        color={'#163D56'}
                        type={'h1'}
                        style={{
                            textAlign: 'left',
                            margin: '0 0 10px',
                            fontWeight: '600'
                        }}
                    />

                    <UiHeading text={"Du kannst deine E-Mail Adresse und dein Passwort jederzeit ändern. Bitte gib dafür zunächst dein aktuelles Passwort ein."}
                        size={14}
                        color={'#777777'}
                        type={'h1'}
                        style={{
                            textAlign: 'left',
                            margin: '0 0 25px', fontWeight: '300', lineHeight: '20px'
                        }}
                    />

                    <UiFloatingInput
                        id="PASSWORT"
                        type="password"
                        label="PASSWORT"
                        placeholder="" />

                    <UiHeading
                        text={"Passwort vergessen?"}
                        size={14}
                        color={'#6E8491'}
                        type={'h1'}
                        style={{
                            textAlign: 'left',
                            margin: '-14px 0px 20px',
                            fontWeight: '300'
                        }}
                    />

                    <UiFloatingInput
                        id="email"
                        type="email"
                        label="E-MAIL ADRESSE"
                        placeholder="" />

                    <UiHeading
                        text={"Wenn du dein Nutzerkonto unwiderruflich löschen möchtest, kannst du das hier tun:"}
                        size={14}
                        color={'#6E8491'}
                        type={'h1'}
                        style={{
                            textAlign: 'left',
                            margin: '50px 0 20px', fontWeight: '300', lineHeight: '20px'
                        }}
                    />

                    <a href="#"><UiHeading
                        text={"Konto unwiderruflich löschen"}
                        size={15}
                        color={'red'}
                        type={'h1'}
                        style={{
                            textAlign: 'left', fontWeight: '300'
                            // margin: '0 0 10px', 
                        }}
                    /></a>

                </Form>
            </div>
        )
    }
}

export default UserAccount