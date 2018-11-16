import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Images from '../../theme/images';

const logo = styled.img`
  width: 150px;
  height: 300px;
`;

const DecorationImage = styled.img`
display: ${props => (props.props.fancyImg ? 'block' : 'none')} 
position: absolute;
top: -58px;
width: 300px;
right: -15px;
`;

class BackCover extends Component {
  render() {
    let { props } = this;

    return (
      <Row style={{ position: 'relative' }}>
        <DecorationImage src={props.src} props={props} />
        <Image src={Images.common_back} onClick={this.props.onClick} />
        {this.props.children}
      </Row>
    );
  }
}

// class BackCover extends Component{

//     render(){
//         let {props} = this

//         return(
//             <Row style={{position:'relative'}}>

//                     <DecorationImage src={props.src} props={props}/>
//                     <Image src={Images.common_back}/>

//             </Row>
//         )
//     }
// }

export default BackCover;
