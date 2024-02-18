import React from 'react';
import './index.css';
const Heading = ({ text, style }) => {
    return (
        <h2 className='heading' style={style}>
            {text ?? 'Heading'}
        </h2>
    );
};

export default Heading;
