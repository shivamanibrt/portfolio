import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const Hero = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <section class='banner_image ' id='about_us'>
                <div class='about_info'>
                    <div class='about_box'>
                        <div>
                            <h3>Hello, I'm</h3>
                            <h1>Shiv Bartaula</h1>
                            <h3>
                                A
                                <span style={{ color: "#2192ff" }}>
                                    {" "}
                                    Software Developer{" "}
                                </span>
                            </h3>
                        </div>
                        <div class='vertical_line'>
                            <Button
                                variant='danger'
                                onClick={() => setModalShow(true)}
                            >
                                More about me
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class='para'>
                        Results-driven Full Stack Developer with over two years
                        of experience building scalable web applications.
                        Skilled in designing, developing, and maintaining APIs,
                        integrating cloud services, and following best coding
                        practices. Passionate about writing clean, maintainable
                        code and collaborating in agile environments.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={() => setModalShow(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
