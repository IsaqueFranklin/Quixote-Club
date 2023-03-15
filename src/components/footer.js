import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container style={{marginBottom: '50px'}}>
            <div style={{marginTop: '50px', marginBottom: '20px', justifyContent:'center', alignItems: 'center'}}>
                <Row style={{justifyContent: 'center'}}>
                    <Col md='auto' xs>
                        <a href="https://www.instagram.com/horizon.labs/" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/instagram.png" alt="instagram" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/facebook.png" alt="facebook" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/linkedin.png" alt="linkedin" />
                        </a>
                    </Col>

                    <Col md='auto' xs>
                        <a href="https://twitter.com/horizonlabsinc" target='_blank'>
                        <img style={{margin: '10px'}} className="pics icons" src="img/twitter.png" alt="twitter" />
                        </a>
                    </Col>
                </Row>
            </div>

                <br></br>
                <small>&copy; Quixote Club 2023</small>
            </Container>
        </div>
    )
}

export default Footer;