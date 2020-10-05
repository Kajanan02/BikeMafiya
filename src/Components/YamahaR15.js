import React, { Component } from 'react'
import Navbar from './Nabar'
import {Row,Col,Card, Button} from 'react-bootstrap'
import './Bikes.css'

export class YamahaR15 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Row>
                <Col>
                <div className='m-5 '>
                
                <img
                src="https://stat.overdrive.in/wp-content/odgallery/2018/06/43177__ANI8066.JPG"
                width='100%'
                
                
                className="d-inline-block align-top img"
                alt="React Bootstrap logo"
            />
                </div>
                </Col>
                <Col className='m-5 p-5'>
                <br></br>
        
                        <Card>
        <Card.Body className=''>
                <b>Name</b>   : Yamaha R15 v3<br></br>
                <b>Top speed</b> :149 km/h <br></br>
                <b>Fuel	</b> : 3.3 L/100 km <br></br>
                <b>Engine	</b> : 249cc
        
        </Card.Body>
        </Card>
                        </Col>
                </Row>

                <Button variant='secondary' className='m-5 shadow' href='/bikes'> Go Back </Button>
            </div>
        )
    }
}

export default YamahaR15
