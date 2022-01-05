import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PopularRecipeMiniCard from './../../Shared/PopularRecipeMiniCard/PopularRecipeMiniCard';
import "./MostPopularRecipes.css";

const MostPopularRecipes = () => {
    return (
        <div className='most-popular-recipes-section'>
            <Container>
                <div className='hr-style'>
                    <span>
                        The most popular recipes this week
                    </span>
                </div>
                <Row>
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                    <PopularRecipeMiniCard />
                </Row>
            </Container>
        </div>
    );
};

export default MostPopularRecipes;