import React, { useContext } from 'react';
import { Context } from '../Context.js';

const APODGallery = () => {
    const { apodGalleryData, isApodGalleryShown, toggleIsApodGalleryShown } = useContext(Context);

    return (
        <div className={isApodGalleryShown ? 'apod__gallery transition col' : 'apod__gallery transition col hidden'} 
            style={{backgroundImage: `url(${apodGalleryData})`}}>
            <button onClick={toggleIsApodGalleryShown} className='button-small transition'>Close</button>
        </div>
    )
}

export default APODGallery;