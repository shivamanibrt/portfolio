import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myPdf from "../assets/Shivamani Bartaula Resume.pdf";
import { Button } from 'react-bootstrap';

export const NavigationBarFile = ({ isDarkMode, handleThemeChange }) => {
    const hashnode = 'https://shivamani.hashnode.dev/';
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"}>
                <Container >
                    <Navbar.Brand as={Link} to="/" className="navbar-brand-red">

                        Shivamani
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="hero">About</Nav.Link>
                            <Nav.Link as={Link} to="recentWork">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="techStack">Skills</Nav.Link>
                            <Nav.Link href={hashnode} target="_blank">Blog</Nav.Link>
                            <Nav.Link as={Link} to="getInTouch">Get-in-touch</Nav.Link>
                            <Nav.Link as={Link} to="contactUsFile">Contact-Form</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href={myPdf} onClick={() => window.open(myPdf)} target="_blank" >
                                <Button variant="danger" className='p-2'>
                                    Download Resume <i className="fa-solid fa-circle-down"></i>
                                </Button>
                            </Nav.Link>

                            <Nav.Link onClick={handleThemeChange} >
                                {isDarkMode
                                    ? (<i className="fa-solid fa-toggle-on fa-xl"></i>)
                                    : (<i className="fa-solid fa-toggle-off fa-xl"></i>)
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};
