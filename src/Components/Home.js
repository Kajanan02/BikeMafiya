import React, { Component } from 'react'
import Navbar from './Nabar'
import './Home.css'
import { Col, Row ,Button } from 'react-bootstrap'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='headerr m-0 text-center' >

                <Row>
                <Col>
                <div className='home text-center pt-5 pb-0 m-5'>
                Welcome To Our <br></br><span className='bike'>Bike Mafia</span> </div>

                <Button variant="light" className='btnn m-5' href="/bikes"> Let's See </Button>
                
                </Col>
                <Col>
                <img
                src="https://riders.drivemag.com/wp-content/uploads/default/0001/93/H-D-115-LIVEWIRE-2-2499.jpeg"
                width='100%'
                
                
                className="d-inline-block align-top mt-5 m-3 imge"
                alt="React Bootstrap logo"
            />      
                
                </Col>
                
                </Row>
               </div>
                
                </div>
        )
    }
}

export default Home
