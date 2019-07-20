import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
        return (
            <div className="container">
                <h4 className="center">About</h4>
                <p>I can hear birds in the background of your video... You know you've made it when even the birds want to learn code from you.</p>
            </div>
        );
}

export default Rainbow(About);