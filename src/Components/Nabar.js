import React, { Component } from 'react'
import {Navbar ,Nav} from 'react-bootstrap'
import './Navbar.css'

export class Nabar extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark" className='p-3 shadow'>
            <Navbar.Brand className='brand' href="/">Bike Mafia</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link className='link' href="/">Home</Nav.Link>
              <Nav.Link className='link' href="/bikes">Bikes</Nav.Link>
              <Nav.Link className='link' href="/about">About</Nav.Link>
            </Nav>
            
          </Navbar>
            </div>
        )
    }
}

export default Nabar
