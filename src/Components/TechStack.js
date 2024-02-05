import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import javaScriptImg from '../icon/javascript.png';
import reactImg from '../icon/icons8-react-native-480.png';
import gitImg from '../icon/icons8-git-480.png'
import reduxImg from '../icon/redux-original.svg'
import mongoDbImg from '../icon/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png'
import expressJsImg from '../icon/icons8-express-js-100.png'
import nodeImg from '../icon/icons8-nodejs-480.png'
import awsImg from '../icon/icons8-amazon-web-services-480.png'
import fireBaseImg from '../icon/icons8-firebase-480.png'
import bootstrapImg from '../icon/icons8-bootstrap-480.png'
import tailWindImg from '../icon/icons8-tailwind-css-480.png'
import typescriptPng from '../icon/typescript_5968381.png'


export const TechStack = ({ isDarkMode }) => {
    const bgStyle = isDarkMode ? { backgroundColor: '#212529' } : { backgroundColor: 'rgb(244, 241, 241)' };
    const titleStyle = isDarkMode ? { color: 'rgb(244, 241, 241)' } : { color: '#332D2D' };
    return (
        <div className=' main-child ' style={bgStyle} >
            <div className='d-flex justify-content-center text-light p-3'>
                <Row ><h2 style={titleStyle}> Tech Stack</h2></Row>
            </div>
            <Container style={bgStyle} >
                <Row className="shadow-lg p-2 programming-language-container d-flex flex-wrap mb-5">
                    <Col>
                        <img class="programming_language_image" src={typescriptPng} alt="htmlImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={javaScriptImg} alt="JavaScript logo" />
                    </Col>

                    <Col>
                        <img class="programming_language_image" src={bootstrapImg} alt="bootstrapImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={tailWindImg} alt="tailWindImg" />
                    </Col>
                </Row>
                <Row className="shadow-lg p-2 programming-language-container d-flex flex-wrap mb-5">
                    <Col>
                        <img class="programming_language_image" src={mongoDbImg} alt="mongoDbImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={expressJsImg} alt="expressJsImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={reactImg} alt="reactImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={nodeImg} alt="nodeImg" />
                    </Col>
                </Row>
                <Row className="shadow-lg p-2 programming-language-container d-flex flex-wrap">
                    <Col>
                        <img class="programming_language_image" src={gitImg} alt="gitImg " />
                    </Col>

                    <Col>
                        <img class="programming_language_image" src={reduxImg} alt="reduxImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={awsImg} alt="awsImg" />
                    </Col>
                    <Col>
                        <img class="programming_language_image" src={fireBaseImg} alt="fireBaseImg" />
                    </Col>
                </Row>


            </Container>
        </div>

    )
}
