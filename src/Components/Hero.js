import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export const Hero = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <section class="banner_image " id="about_us">
                <div class="about_info">
                    <div class="about_box">
                        <div>
                            <h3>Hello, I'm</h3>
                            <h1>Shivamani Bartaula</h1>
                            <h3>
                                A
                                <span style={{ color: '#2192ff' }}> Software Engineer </span>
                                From
                                <span style={{ color: '#ff7f3f' }}> Sydney </span>
                            </h3>
                        </div>
                        <div class="vertical_line">
                            <Button variant="danger" onClick={() => setModalShow(true)}>
                                More about me
                            </Button>
                        </div>
                    </div>
                </div>
            </section >

            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class="para">

                        Hi, I am Shivamani, a software Developer with over 2.5 years of professional and project-based experience in full-stack web application. I help business build digital solutions using Typescript, MongoDB, Express, JavaScript (React.js), Node.js. I am passionate about building scalable products that are valuable to users.
                        <br /><br />Available full-time till April 2027, open to relocation My latest project I am currently working on is  <a href="https://www.chatsimple.tech/" target="_blank" rel="noopener noreferrer">ChatSimple</a>
                        {" "}it’s a better UI for chatGpt.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
