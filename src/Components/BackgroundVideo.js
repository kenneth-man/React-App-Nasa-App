import React from 'react';
import backgroundVideo from '../Res/Earth Spin Free HD Stock Footage_720P HD.mp4';

const BackgroundVideo = () => {
    return (
        <video className='backgroundVideo' loop={true} muted={true} autoPlay={true} src={backgroundVideo}/>
    )
}

export default BackgroundVideo;