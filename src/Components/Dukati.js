import React, { Component } from 'react'
import Navbar from './Nabar';
import {Row,Col,Card,Button} from 'react-bootstrap'
import './Bikes.css'

export class Dukati extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Row>
                <Col>
                <div className='m-5 '>
                
                <img
                src="https://www.motorcyclespecs.co.za/Gallery%20B/Ducati%20%20848%20EVO%2013.jpg"
                width='100%'
                
                
                className="d-inline-block align-top img"
                alt="React Bootstrap logo"
            />
                </div>
                </Col>
                <Col className='m-5 p-5'>
                <br></br>
                <br></br>
                        <Card>
        <Card.Body className=''>
                <b>Name</b>   : Ducati 848 EVO<br></br>
                <b>Top speed</b> :	256 km/h <br></br>
                <b>Fuel	</b> : 5.3 L/100 km <br></br>
                <b>Engine	</b> : 849cc
        
        </Card.Body>
        </Card>
                        </Col>
                </Row>
                <Button variant='secondary' className='m-5 shadow' href='/bikes'> Go Back </Button>
            </div>
        )
    }
}

export default Dukati
