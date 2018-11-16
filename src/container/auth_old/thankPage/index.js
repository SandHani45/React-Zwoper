import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import './styles.scss';
import Images from '../../../theme/images';
import Button from '../../../components/UiAuthButton';

class Login extends Component {
	render() {
		return (
			<div >
				<Grid className="padding-0">
					<Row className="row-margin-0">
						<Col> 
							<img src={Images.thanks} width="100%"/>				
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="div-center">
							<h2 className="thanks-h2">Dhanke!</h2>
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="bottom-shadow">
							<p className="thanks-p">
								Num sage uns etwas über dich...
								Über dein Postential, deine Talente und Wünsche
							</p>
						</Col>
					</Row>

					<Row className="bottom-div">
						<Col xs={12} >
							<Button type={'btn-white'}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Login;
