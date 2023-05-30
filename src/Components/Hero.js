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
                                <span style={{ color: '#2192ff' }}> Web Developer </span>
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
                        Hi, I am Shivamani, a software engineer with 1 year of experience in
                        frontend web development. I help businesses build digital solutions
                        using Bootstrap, JavaScript (React.js), and Redux. I am passionate
                        about building scalable products that are valuable to users.
                    </p>
                    <p class="para">Full-time working right up to April 2025</p>
                    <h3>Experience</h3>
                    <p><b>Software Engineer AuTechJobs.com / Sydney / January, 2023 - Present
                    </b></p>
                    <ul>
                        <li>Standardized theme development process which
                            improved consistency and scalability.</li>
                        <li>Increased code coverage from 80% to 84% using
                            the javascript testing library and jest</li>
                        <li>Devised onboarding work</li>
                    </ul>
                    <p><b>WoodongaUrbanLandcare.com / Melbourne / March, 2022 -
                        October, 2022
                    </b></p>
                    <ul>
                        <li>Developed and customized a WordPress website
                            from scratch using DIVI for Wodonga Urban
                            Landcare Melbourne as a major college project.</li>
                        <li>Applied Agile scrum development methodology
                            which enabled faster release of features and </li>
                    </ul>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
