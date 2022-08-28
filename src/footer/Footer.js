import React from 'react';
import logoFooter from '../images/logo.png';
import {Container, Row, Col} from 'reactstrap';


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col className="brand" md="6">
                        <img src={logoFooter} alt="logo-footer"/>
                        <p className="brandText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    </Col>
                    <Col md="4">
                        <ul className="products">
                            <p className="theme">Products</p>
                            <li>
                                <a href="#c">Trending</a>
                            </li>
                            <li>
                                <a href="#c">My Account</a>
                            </li>
                            <li>
                                <a href="#c">Vendors</a>
                            </li>
                            <li>
                                <a href="#c">Brends</a>
                            </li>
                            <li>
                                <a href="#c">Storefront</a>
                            </li>
                        </ul>

                        <ul className="products">
                            <p className="theme">Legals</p>
                            <li>
                                <a href="#c">Licence</a>
                            </li>
                            <li>
                                <a href="#c">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#c">About Us</a>
                            </li>
                            <li>
                                <a href="#c">Contacts</a>
                            </li>
                        </ul>

                        <ul className="products">
                            <p className="theme">Contacts</p>
                            <p className="sampleText">Fell free get in touch with us via phone or send us a message.</p>
                            
                            <li>
                                <a href="tel:+1 234 567 89 10">+1 234 567 89 10</a>
                            </li>
                            <li>
                                <a href="mailto:support@khoomi.com">support@khoomi.com</a>
                            </li>
                        </ul>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;