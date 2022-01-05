import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import BlogCard from '../../Shared/BlogCard/BlogCard';

const FeatureBlogs = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={4}>
                    <BlogCard />
                </Col>
            </Row>
        </Container>
    );
};

export default FeatureBlogs;