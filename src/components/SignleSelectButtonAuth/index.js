import React from 'react';
import './styles.scss';
import UiButton from '../UiAuthButton';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// class SingleSelectButton extends React.Component{
//     render(){
//         const {} = this.props;
//         return(
//             <div className="select-div">
//                 <Col xs={6}>
//                     <UiButton
//                         type='chose'
//                         selected={true}
//                     />
//                 </Col>
//                 <Col xs={6}>
//                     <UiButton
//                         type='chose'
//                     />
//                 </Col>
//             </div>
//         )
//     }
// }

const SingleSelectButton = ({ onChose, value }) => {
  return (
    <Row className="select-div">
      <Col xs={6}>
        <UiButton
          type="chose"
          selected={value === 1 ? true : false}
          onClick={() => onChose(1)}
        />
      </Col>
      <Col xs={6}>
        <UiButton
          type="chose"
          selected={value === 2 ? true : false}
          onClick={() => onChose(2)}
        />
      </Col>
    </Row>
  );
};

SingleSelectButton.propTypes = {
  onChose: PropTypes.func,
  value: PropTypes.number,
};

SingleSelectButton.defaultProps = {
  number: 0,
};

export default SingleSelectButton;
