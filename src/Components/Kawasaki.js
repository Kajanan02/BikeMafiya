import React, { Component } from 'react'
import Navbar from './Nabar'
import {Row,Col,Card,Button} from 'react-bootstrap'
import './Bikes.css'
export class Kawasaki extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Row>
                <Col>
                <div className='m-5 '>
                
                <img
                src="https://news.maxabout.com/wp-content/uploads/2019/03/Kawasaki-Ninja-H2R-Facts-1.jpg"
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
                <b>Name</b>   : Kawasaki bike, Ninja H2<br></br>
                <b>Top speed</b> :	249 km/h <br></br>
                <b>Fuel	</b> : 5.3 L/100 km <br></br>
                <b>Engine	</b> : 998cc
        
        </Card.Body>
        </Card>
                        </Col>
                </Row>
                <Button variant='secondary' className='m-5 shadow' href='/bikes'> Go Back </Button>
            </div>
        )
    }
}

export default Kawasaki
