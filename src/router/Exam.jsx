/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import Typewriter from 'react-typewriter';

const Exam = () => {
    return (
        <div>
             <Typewriter
      strings={['Hello, World!', 'This is a typewriter effect.', 'Enjoy using react-typewriter!']}
      delay={50} // optional: typing delay in milliseconds
      stopBlinkinOnComplete={true} // optional: stops the cursor from blinking when typing is complete
    />
        </div>
    );
};

export default Exam;