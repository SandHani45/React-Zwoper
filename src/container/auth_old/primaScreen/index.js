import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import './styles.scss';
import Images from '../../../theme/images';
import Button from '../../../components/UiAuthButton';
import UiHeading from '../../../components/UiHeading'

class Login extends Component {
	render() {
		return (
			
			<Grid className="padd-marg-0">
				<Row>
					<Col md={12} sm={12} xs={12}>
						<Image src={Images.clap} />
					</Col>
				</Row>
				<Row>
					<Col md={12} sm={12} xs={12}>
						<UiHeading className="text-center" type="h1" text= {'Danke'} />
						<div className="clouds">
							<Image src={Images.cloud} />

							<div className="text-overlay" md={12}>
								<Image src={Images.infoIcon} />
								<UiHeading type="h4" color="#59BE6C" 
											text = {'Nun sage uns etwas über dich…Über dein Potential,\
												deine Talente und Wünsche'} />
							</div>
						</div>
						
						
					</Col>
				</Row>

					<Row>
						<Col md={12} sm={12} xs={12}>
							<Button type="btn-white">{'Los geht\'s'}</Button>
						</Col>
					</Row>
				
			</Grid>
		);
	}
}

export default Login;
