import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Waffles.css'
const Waffles = () => {
    return (
        <Container>
            <div className='row g-5 my-5'>
                <div className='col-lg-6'>
                    <iframe className='w-100' height={307} src="https://www.youtube.com/embed/lypGLHSpWa0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='col-lg-6 Waffles-title'>
                    <h3 >Perfect homemade waffles</h3>
                    <p>Health Benefits Of Waffles:</p>
                    <p>Want to know a secret? I almost never order waffles at a restaurant. That’s how picky I am about my waffles.

                        I know exactly how I like my waffles and restaurant waffles are never as good as the homemade waffles from my own kitchen.

                        I take my waffle enthusiasm too seriously to waste a meal on waffles that are anything less than spectacular. Rest assured, I’d never share a waffle recipe with you that I didn’t absolutely adore. My standards are just too high.</p>
                    <Button variant="secondary me-3">Order Now</Button>
                    <Button variant="secondary "> Recipe</Button>
                </div>
            </div>
        </Container>
    );
};

export default Waffles;