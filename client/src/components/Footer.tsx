import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='mt-5' style={{color: 'rgb(180, 200, 200)', background: 'black'}}>
      <Container>
        <Row>
          <Col className='text-center m-3'>Copyright @2022. Top-Up Mama</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer