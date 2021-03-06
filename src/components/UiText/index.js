import React from 'react';
import { colors } from '../../theme/global.js'
import styled from 'styled-components';

const Text = styled.p`
  color: ${props => (!!props.color ? props.color : colors.themeColor)};
  font-size: ${props => (!!props.size ? props.size : '20')}px;
  font-weight: ${props => (!!props.bold ? props.bold : 300)};
  text-align: ${props => (!!props.align ? props.align : 'center')};
  position: ${props => (!!props.position ? props.position : 'relative')};
  top: ${props => (!!props.top ? props.top : '0')}em;
  display: ${props => (!!props.display ? props.display : 'block')};
  margin: ${props => (!!props.margin ? props.margin : '0')};
  transition: all 1s ease;
  padding: ${props => props.padding}
`;
// export default  class UiText extends React.Component{
//     render(){
//         return(
//             <Text {...this.props}> {this.props.text} </Text>
//         )
//     }
// }

export default props => <Text {...props}> {props.text} </Text>;
