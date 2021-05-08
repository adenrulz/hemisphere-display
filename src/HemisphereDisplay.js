import React from 'react';
import northernPic from './images/northern-hemisphere.PNG';
import southernPic from './images/southern-hemisphere.PNG';
import './css/hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: 'Hey you are in the Northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'Hey you are in the Southern hemisphere',
        picture: southernPic
    }
}
const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt='hemisphere' />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>

            </div>

        </div>
    )
}
export default HemisphereDisplay;