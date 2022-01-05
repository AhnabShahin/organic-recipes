import React from 'react';
import Banner from '../Banner/Banner';

import Waffles from '../Waffles/Waffles';
import FoodCompanySlider from './../Shared/FoodCompanySlider/FoodCompanySlider';
import FeatureBlogs from './FeatureBlogs/FeatureBlogs';
import RecipesBooks from './RecipesBooks/RecipesBooks';
import MostPopularRecipes from '../Home/MostPopularRecipes/MostPopularRecipes';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Waffles></Waffles>
            <FoodCompanySlider />
            <FeatureBlogs/>
            <RecipesBooks/>
            <MostPopularRecipes/>
        </div>
    );
};

export default Home;