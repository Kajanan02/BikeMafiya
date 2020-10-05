import React, { Component } from 'react'
import Navbar from './Nabar'
import {Card ,ListGroup,Row,Col} from 'react-bootstrap'

import bike from './img/02.png'
export class Bike extends Component {
   
   
   
   
    render() {
        return (
            <div>
            <Navbar/>
            <Row>
                <Col className='m-5'>
                    <div>   
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Card style={{ width: '18rem' }} className='shadow'>
                    <ListGroup variant="flush">
                    <ListGroup.Item><a href="/bikes/ducati"> Ducati 848 EVO </a></ListGroup.Item>
                    <ListGroup.Item><a href="/bikes/kawasaki"> Kawasaki bike, Ninja H2 </a></ListGroup.Item>
                    <ListGroup.Item><a href="/bikes/harley-davidson"> Harley-Davidson Custom 1250 </a></ListGroup.Item>
                    <ListGroup.Item><a href="/bikes/hondacbr"> Honda CBR 600</a></ListGroup.Item>
                    <ListGroup.Item><a href="/bikes/yamahar15"> Yamaha R15 v3</a></ListGroup.Item>
                    </ListGroup>
                    </Card>
                    
                    </div>
                </Col>
            
                    <Col className='m-2 p-5'>
                    <img
                    src={bike}
                    
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    
                    
                    </Col>
            </Row>
            </div>
        )
    }
}

export default Bike
