import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Sidebar from '../Sidebar';

function DasbhoardThree() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />
          
        </Col>
        <Col sm={10} className="mt-70">

          <div>
            <h2 className="herotitle">Dashboard Three</h2>
          </div>

        </Col>
      </Row>

    </Container>
  );
}

export default DasbhoardThree;