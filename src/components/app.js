import React, { Component } from 'react';
import { Container, Row, Col} from "reactstrap";
import Input from './input'
import List  from './list'

class App extends Component {
  render() {
    return (
      <div className="list-app">
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col md={{size: 4, offset: 4}}>
              <div className="list-wrapper">
                <Input />
                <List />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
