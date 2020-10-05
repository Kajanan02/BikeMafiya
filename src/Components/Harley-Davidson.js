import React, { Component } from 'react'
import Navbar from './Nabar'
import {Row,Col,Card,Button} from 'react-bootstrap'
import './Bikes.css'
export class HarleyDavidson extends Component {
    render() {
        return (
            <div>
               <Navbar/> 
               <Row>
            <Col>
            <div className='m-5 '>
            
            <img
            src="https://4kwallpapers.com/images/wallpapers/harley-davidson-custom-1250-prototype-2020-5k-2880x1800-1041.jpg"
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
            <b>Name</b>   : Harley-Davidson Custom 1250<br></br>
            <b>Top speed</b> :	349 km/h <br></br>
            <b>Fuel	</b> : 4.3 L/100 km <br></br>
            <b>Engine	</b> : 1250cc
    
    </Card.Body>
    </Card>
                    </Col>
            </Row>
            <Button variant='secondary' className='m-5 shadow' href='/bikes'> Go Back </Button>
            </div>
        )
    }
}

export default HarleyDavidson
