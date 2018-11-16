import React, { Component } from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import UiHeading from '../../../components/UiHeading'
import AboutYou from '../AboutYou/';
import UiUploadFile from '../../../components/UiUploadFile'
import './style.scss'
import UiCollapsable from '../../../components/UiCollapsable';
import UiInput from '../../../components/UiInput';

const Heading = styled.h3`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  font-size: 16px;
`;
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <Grid>
                <UiUploadFile id="formControlsFile" type="file" />
                <hr />
                <AboutYou className={'aboutUs paddingBottom0'} title={"Über Dich"} isEdit={true} discription={'Persperum illa earchiliqui dita quaepta vellici dunt as venim qui alignatiatur secusam sint as magnim et volent landerum accaerecto '} />
                <hr />
                <div>
                    <Col xs={12}>
                        <UiHeading text={"Dein Fähigkeiten"} size={19} color={'#163D56'} type={'h1'} style={{ textAlign: 'left', margin: '0 0 10px', fontWeight: '600' }} />
                        <Heading onClick={() => this.setState({ open: !this.state.open })}>
                            {/* <Heading onClick={this.HeandleDrawer()}> */}
                            Auto
                            <span style={{ float: 'right' }}>
                                {this.state.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </Heading>
                    </Col>
                    <Col xs={12}>
                        <UiCollapsable open={this.state.open} />
                    </Col>
                    <Col xs={12}>
                        <Heading onClick={() => this.setState({ open: !this.state.open })}>
                            Hof & Garten
                            <span style={{ float: 'right' }}>
                                {this.state.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </Heading>
                    </Col>
                    <Col xs={12}>
                        <UiCollapsable open={this.state.open} />
                    </Col>
                    <Col xs={12}>
                        <Heading onClick={() => this.setState({ open: !this.state.open })}>
                            Hauswirtschaft
                            <span style={{ float: 'right' }}>
                                {this.state.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </Heading>
                    </Col>
                    <Col xs={12}>
                        <UiCollapsable open={this.state.open} />
                    </Col>
                    <UiInput isIcon={true} placeholder={"Eigenes Schlagwort…"} />
                </div>
            </Grid>
        );
    }
}

export default EditProfile;