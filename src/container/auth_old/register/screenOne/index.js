import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import './styles.scss';
import TopBarAuth from '../../../../components/TopBarAuth';
import Icons from '../../../../theme/icons';
import UiInput from '../../../../components/UiInput';
import SingleSelectButton from '../../../../components/SignleSelectButtonAuth';
import SubmitButton from '../../../../components/UiAuthButton';

class Login extends Component {
	render() {
		return (
			<div className="main">
				<Grid>
					<Row>
						<Col> 
							<TopBarAuth />
						</Col>
					</Row>
					{/* header Text  */}
					<Row className="name-info-row">
						<Col xs={6}> 
							<span className="name-info">Dein Name:</span>							
						</Col>
						<Col xs={6} className="align-right">
							<img src={Icons.infoAuth} height={30} />
						</Col>
					</Row>

					<Row >
						<Col className="div-center">
							<div className="input-container-card">
								<div className="input-form">
									<UiInput 
										placeholder = "PLZ"
									/>
									<UiInput 
										placeholder = "Ort"
									/>
									
								</div>
								<Row className="row-mt0">
									<Col xs={6}>
										<UiInput 
											placeholder = "StaBe"
										/>
									</Col>
									
									<Col xs={6}>
										<UiInput 
											placeholder = "Nummer"
										/>
									</Col>
									
								</Row>
								
								<div className="input-form from-magin">
									<SubmitButton
										text = {'weiter'}
										disabled={false}
										type={'submit'}
									/>
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Login;
