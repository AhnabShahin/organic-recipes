import React from 'react';
import './BlogCard.css'
import thumbnail from '../../../images/banner.png'
import { FaClock } from 'react-icons/fa';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsFillShareFill,BsFillBookmarkHeartFill } from 'react-icons/bs';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className="blog-thumbnail">
                <img src={thumbnail} className='w-110' alt="" />
            </div>
            <div className="blog-body">
                <div className='icons-container'>
                    <div className="cooking-time">
                        <FaClock />
                        <span>30 mins</span>
                    </div>
                    <div className="recipe-likes">
                        <AiFillLike />
                        <span>399</span>
                        <AiFillDislike />
                        <span>30</span>
                    </div>
                    <div className="recipe-type">
                        <span>Super Easy</span>
                    </div>
                </div>
                <div className="blog-details-container">
                    <h3 className="blog-title">40 Mother’s Day Breakfast and Brunch</h3>
                    <div className="blog-details">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis
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
                                <p>Shahin Alam</p>
                                <p>May 8, 2021 </p>
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
    );
};

export default BlogCard;