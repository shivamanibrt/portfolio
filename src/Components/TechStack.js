import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import htmlImg from '../icon/html.png'
import cssImg from '../icon/css.png'
import javaScriptImg from '../icon/javascript.png';
import reactImg from '../icon/icons8-react-native-480.png';
import wordpressImg from '../icon/icons8-wordpress-480.png'
import figmaImg from '../icon/icons8-figma-480.png';
import gitImg from '../icon/icons8-git-480.png'
import reduxImg from '../icon/redux-original.svg'



export const TechStack = ({ isDarkMode }) => {
    const bgStyle = isDarkMode ? { backgroundColor: '#212529' } : { backgroundColor: 'rgb(244, 241, 241)' };
    const titleStyle = isDarkMode ? { color: 'rgb(244, 241, 241)' } : { color: '#332D2D' };
    return (

        <div className='p-5' style={bgStyle}>
            <div className='d-flex justify-content-center text-light p-4'>
                <Row ><h2 style={titleStyle}> Tech Stack</h2></Row>
            </div>
            <Container style={bgStyle}>
                <Row className="shadow-lg p-2 programming-language-container d-flex flex-wrap">
                    <Col>
                        <img class="programming_language_image" src={htmlImg} alt="htmlImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={cssImg} alt="cssImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={javaScriptImg} alt="JavaScript logo" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={reactImg} alt="reactImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={wordpressImg} alt="wordpressImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={figmaImg} alt="figmaImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={gitImg} alt="gitImg " />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={reduxImg} alt="reduxImg" />
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
