import React from 'react';
import Banner from '../Banner/Banner';

import Waffles from '../Waffles/Waffles';
import FoodCompanySlider from './../Shared/FoodCompanySlider/FoodCompanySlider';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Waffles></Waffles>
            <FoodCompanySlider/>
            
     
        </div>
    );
};

export default Home;