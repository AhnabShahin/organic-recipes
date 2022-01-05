import React from 'react';
import './PopularRecipeMiniCard.css'
import img01 from '../../../images/popular-recipes/img01.jpg'
import { Col } from 'react-bootstrap';

const PopularRecipeMiniCard = () => {
    return (
        <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
            <div className='popular-recip-minicard'>
                <img src={img01} className='w-100' alt="" />
                <p>Easy ground beef recipes with bacon</p>
            </div>
        </div>
    );
};
export default PopularRecipeMiniCard;