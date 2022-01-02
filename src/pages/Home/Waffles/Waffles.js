import React from 'react';
import { Button } from 'react-bootstrap';

const Waffles = () => {
    return (
        <div className='row my-5 mx-5'>
            <div className='col-lg-6'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lypGLHSpWa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='col-lg-6 text-lg-start paragraph'>
                <h1>Perfect homemade waffles</h1>
                <br />
                <p>Health Benefits Of Waffles:</p>
                <p>Egg specially is an excellent source of vitamins like vitamin A, D, E, K, B5, B6, B12 and minerals such as calcium, zinc, iron, phosphorus, selenium, and copper. Being a high-protein food, they are quite filling and help one eat less while contributing towards weight loss</p>
                <Button variant="info fw-bold mx-2">Order Now</Button>
                <Button variant="info fw-bold"> Recipe</Button>
            </div>
        </div>
    );
};

export default Waffles;