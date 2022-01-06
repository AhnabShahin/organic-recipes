import React from 'react';
import './BlogCard.css'
import thumbnail from '../../../images/banner.png'
import { FaClock } from 'react-icons/fa';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsFillShareFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Col } from 'react-bootstrap';

const BlogCard = (props) => {
    const blog = props.blog;
    return (
        <Col md={4}>
            <div className='blog-card'>
                <div className="blog-thumbnail">
                    <img src={blog.image} className='w-110' alt="" />
                </div>
                <div className="blog-body">
                    <div className='icons-container'>
                        <div className="cooking-time">
                            <FaClock />
                            <span>{blog.cookingTime} mins</span>
                        </div>
                        <div className="recipe-likes">
                            <AiFillLike />
                            <span>399</span>
                            <AiFillDislike />
                            <span>30</span>
                        </div>
                        <div className="recipe-type">
                            <span>{blog.recipeType}</span>
                        </div>
                    </div>
                    <div className="blog-details-container">
                        <h3 className="blog-title">{blog.blogTitle}</h3>
                        <div className="blog-details">
                            <p>
                                {blog.blogDetails}
                            </p>
                        </div>
                    </div>
                    <div className="blog-footer">
                        <div className="blog-writer">
                            <div className='d-flex align-items-center'>
                                <div className="blog-writer-img">
                                    <img src="https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/author-img.png" alt="" />
                                </div>
                                <div>
                                    <p>{blog.author}</p>
                                    <p>{blog.postedOn}</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='blog-share'>
                                    <BsFillShareFill />
                                </div>
                                <div className='blog-bookmark'>
                                    <BsFillBookmarkHeartFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default BlogCard;