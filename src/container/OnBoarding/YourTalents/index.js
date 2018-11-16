import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import UiCollapsable from '../../../components/UiCollapsable';
import UiHeading from '../../../components/UiHeading';
const Heading = styled.h3`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  font-size: 16px;
`;

let arr = [1, 2, 3, 4];

class YourTalentsScreen extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Col xs={12}>
        <Col xs={12}>
          <UiHeading
            type="h4"
            style={{ fontSize: '16px', margin: '0px 0px 18px 0px' }}
            text={'Hobby, Beruf oder Freizeit:Sag uns, was du drauf hast, mit dem du auch mal anderen helfen könntest:'}
          />
          <UiHeading
            type="h5"
            style={{ fontWeight: '100', fontSize: '12px' }}
            text={'Hobby, Beruf oder Freizeit:Sag uns, was du drauf hast, mit dem du auch mal anderen helfen könntest:'}
          />
        </Col>
        <div>
          {arr.map((data, index) => (
            <Col xs={12}>
              <UiCollapsable heading={data} />
            </Col>
          ))}
        </div>

        {/* <div>
          <h1 onClick={() => this.setState({ open: !this.state.open })}>
            djklscnkj
          </h1>
          <UiCollapsable open={this.state.open} />
        </div>
        <div>
          <h1 onClick={() => this.setState({ open: !this.state.open })}>
            djklscnkj
          </h1>
          <UiCollapsable open={this.state.open} />
        </div> */}
      </Col>
    );
  }
}

export default YourTalentsScreen;
