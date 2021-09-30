import React from 'react';
import { Nav } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    }
    return (

        <div className='responsive-header' style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: "10px",
            background: "Lightgray",
            padding: "5px"
        }}>

            <Nav variant="pills" >

                <Nav.Item>
                    <Nav.Link eventKey="/home">
                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="/resturent"><NavLink to="/resturant" activeStyle={activeStyle}>Resturent</NavLink></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="/about" >
                        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <h1> Resturent</h1>

        </div>
    );
};

export default Header;