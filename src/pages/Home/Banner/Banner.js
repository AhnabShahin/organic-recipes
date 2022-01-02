import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
           <div className='row banner mb-5'>
           <div className='col-lg-4 mx-5 my-5 text-lg-start'>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />

             <h1 className='font'>The Healthiest Way to Start Your Day</h1>
             <p className='paragraph'>Breakfast is the first meal of the day. A healthy breakfast refuels the body and replenishes the blood sugar (glucose), giving the energy necessary to start a new day. It is proven that breakfast is good for both physical and mental health.</p>
             <br />
               <br />
               <br />
               <br />
               <br />
               <br />
           </div>
           <div className='col-lg-8'>

           </div>
        
           </div>

        </div>
    );
};

export default Banner;