import React from 'react';
import Brending from '../JSON/Brending.json';
import {Container, Row, Col, Card, CardBody, CardFooter} from 'reactstrap';


const Trend = () => {
    return (
        <div className="trending">
            <Container>
                <Row>
                    <Col className="pageTitle" md="12">
                        <p>Top Products</p>
                        <h4>Trending This Week</h4>
                    </Col>
                    <Col className="cardsArea trending-cardsArea" lg="12" md="12">
                        <Row>
                            {Brending.map((post)=>{
                                return(
                                    <Col className="cards" md="3">
                                        <Card className="card">
                                            <CardBody>
                                                <img src={post.img} alt="sneakerImages"/>
                                            </CardBody>
                                            <CardFooter>
                                                <div className="texts">
                                                    <p>{post.name}</p>
                                                    <span>{post.price}</span>
                                                </div>
                                            </CardFooter>                                           
                                        </Card>
                                    </Col>
                                )
                            })}
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Trend;