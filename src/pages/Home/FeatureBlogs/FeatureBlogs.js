import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BlogCard from '../../Shared/BlogCard/BlogCard';
import { loadBlogs } from './../../../redux/actions/actions';

const FeatureBlogs = () => {
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch();
    useEffect(() => {
        async function getBlogs(data) {
            await axios.get('https://organic-recipes.herokuapp.com/get-blogs', data).then(res => {
                dispatch(loadBlogs(res.data));
            });
        }
        getBlogs();
    }, [])
    return (
        <Container className='my-5'>
            <Row>
                {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    
                ))}
            </Row>
        </Container>
    );
};

export default FeatureBlogs;