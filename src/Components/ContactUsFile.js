import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Toast } from "react-bootstrap";

const ContactUsFile = ({ isDarkMode }) => {
    const bgStyle = isDarkMode ? { backgroundColor: '#212529' } : { backgroundColor: 'rgb(244, 241, 241)' };
    const titleStyle = isDarkMode ? {
        color: 'rgb(244, 241, 241)'
    } : { color: '#332D2D' };
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_fry8r0e",
                "template_4kofyh2",
                form.current,
                "jmhaOf73uu6q_nr7F"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                    setShowToast(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Row>
                <div className='p-4 ' style={bgStyle}>
                    <Row className=" text-light">
                        <Col xs={12} md={8} className="mx-auto">
                            <div className="email-form p-5 rounded">
                                <h2 className="text-center mb-4" style={titleStyle}>Send Message</h2>
                                <form ref={form} onSubmit={sendEmail} className="shadow-lg p-5 rounded-2">
                                    <div className="form-group mb-3">
                                        <label htmlFor="user_name"><h4 style={titleStyle}>Full Name</h4></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="user_name"
                                            id="user_name"
                                            value={formData.user_name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="user_email"><h4 style={titleStyle}>Email</h4></label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="user_email"
                                            id="user_email"
                                            value={formData.user_email}
                                            onChange={handleInputChange}
                                            placeholder="johnDoe@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="message"><h4 style={titleStyle}>Message</h4></label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows="6"
                                            style={{ resize: "none" }}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Type your message here"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn text-light px-4 py-2 bg-danger"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Toast
                        show={showToast}
                        onClose={() => setShowToast(false)}
                        className="position-fixed top-0 end-0 m-3"
                        delay={1000}
                        autohide
                    >
                        <Toast.Body>Message sent!</Toast.Body>
                    </Toast>
                </div>
            </Row>

        </>
    );
};

export default ContactUsFile;
