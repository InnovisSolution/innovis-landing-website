import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../heading';
import './index.css';

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

const AnimatedCard = ({ imageSrc, text, index }) => {
    return (
        <motion.div
            className='solution_card'
            // variants={fadeIn('right', 'spring', 500, 0.75)}

            initial={{ opacity: 0, translateY: -100 - index * 100 }}
            animate={{
                opacity: 1,
                translateY: 0,
                transition: { delay: index / 2 },
            }}
            exit={{ opacity: 0 }}
        >
            <div>
                <img src={imageSrc ?? ''} />
                <p>{text}</p>
            </div>
        </motion.div>
    );
};

const Solutions = () => {
    return (
        <div className='solutions'>
            <Heading text='Solutions' style={{ textAlign: 'center' }} />
            <div className='solution_cards'>
                <AnimatedCard text='Lorem Ipsum' index={0} />
                <AnimatedCard text='Lorem Ipsum' index={1} />
                <AnimatedCard text='Lorem Ipsum' index={2} />
            </div>
        </div>
    );
};

export default Solutions;
