import React from 'react';
import './index.css';

const HeroLeft = () => {
    return (
        <div className='hero_left'>
            <h1>Transforming Online Presence for Lasting Impact</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lorem felis, scelerisque nec vehicula quis, maximus at neque.
                Quisque dolor turpis, venenatis non mauris at, dapibus maximus
                ligula.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vel orci dignissim mi accumsan faucibus eu eget erat. Maecenas
                id odio id ex viverra condimentum. Cras ultrices dui et sapien
                accumsan ullamcorper. Donec placerat mauris eros, id vestibulum
                erat pulvinar in.
            </p>
            <button className='hero_button'>Get a free quote</button>
        </div>
    );
};
const HeroRight = () => {};

const Hero = () => {
    return (
        <div className='hero'>
            <HeroLeft />
            <HeroRight />
        </div>
    );
};

export default Hero;
