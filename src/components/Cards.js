import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/Map.png"
                            text="Explore this affordable housing map"
                            label="Map"
                            path="/my-app/map"
                            alt="Map"
                        />
                        <CardItem
                            src="images/CL.JPG"
                            text="This link to Blog 1"
                            label="Cityscape"
                            path="/my-app/blog"
                            alt="Blog"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-1.JPG"
                            text="This link to Contact"
                            label="Landscape"
                            path="/my-app/contact"
                            alt="Landscape"
                        />
                        <CardItem
                            src="images/img-8.JPG"
                            text="This link to Sign Up"
                            label="Other"
                            path="/my-app/sign-up"
                            alt="Travel"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards