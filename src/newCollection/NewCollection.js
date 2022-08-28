import React from 'react';
import {Container, Row, Col, Card, CardBody, CardFooter} from 'reactstrap';
import sneakers1 from '../images/img1.png';
import sneakers2 from '../images/img2.png';
import sneakers3 from '../images/img3.png';
import sneakers4 from '../images/img4.png';
import sneakers5 from '../images/img5.png';
const NewCollection = () => {
    return (
        <div className="newCollection">
            <Container>
                <Row>
                    <Col className="pageTitle" md="12">
                        <p>Straight From Nike</p>
                        <h4>New Collection</h4>
                    </Col>
                    <Col className="cardsArea" lg="6" md="12">
                        <Row>
                            <Col className="cards" lg="6" md="3">
                                <Card className="card">
                                    <CardBody>
                                        <img src={sneakers1} alt="sneakerImage"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="3">
                                <Card className="card">
                                    <CardBody>
                                        <img src={sneakers2} alt="sneakerImage"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter> 
                                </Card>
                            </Col>

                            <Col className="cards" lg="6" md="3">
                                <Card className="card">
                                    <CardBody>
                                        <img src={sneakers3} alt="sneakerImage"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="6" md="3">
                                <Card className="card">
                                    <CardBody>
                                        <img src={sneakers4} alt="sneakerImage"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="6" md="12">
                        <Card className="card">
                            <CardBody>
                            <div className="productPrice">
                                    <span>SALE -50%</span>
                                    <span>$99</span>
                                </div>
                                <img src={sneakers5} alt="sneakerImage"/>
                            </CardBody>
                            <CardFooter className="leftCardFooter">
                                <h4 className="productName">Nike Air Force 1 Shadow</h4>
                                <p className="productBrand">Brand: Nike</p>
                                
                            </CardFooter>
                        </Card>    
                    </Col>
                    <Col className="buttonArea" md="12">
                          <a href="#c" className="exploreBtn">Explore Other Products</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default NewCollection;