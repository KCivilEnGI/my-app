import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/Map.png"
                            text="Explore this affordable housing map"
                            label="Map"
                            path="/map"
                            alt="Map"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="This link to Blog"
                            label="Adventure"
                            path="/blog"
                            alt="Travel"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-1.jpg"
                            text="This link to Contact"
                            label="SomethingElse"
                            path="/contact"
                            alt="Travel"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="This link to Sign Up"
                            label="Other"
                            path="/sign-up"
                            alt="Travel"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards