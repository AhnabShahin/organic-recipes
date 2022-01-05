import React from 'react';
import './RecipesBooks.css'
import { Container, Col, Row } from 'react-bootstrap';
import img01 from '../../../images/books/book01.png'
import img02 from '../../../images/books/book02.png'
import img03 from '../../../images/books/book03.png'

const RecipesBooks = () => {
    return (
        <div className='recipes-books-section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="recipes-books-container-details">
                            <h3>Check out my newest <br />
                                vegan recipes books </h3>
                            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis</p>
                            <div className='recipes-books'>
                                <img src={img01} alt="" />
                                <img src={img02} alt="" />
                                <img src={img03} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipesBooks;