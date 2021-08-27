import React, { useContext } from 'react';
import { Context } from '../Context.js';

const APODComp = ({ title, expl, img, date }) => {
    const { toggleIsApodGalleryShown, setApodGalleryData } = useContext(Context);

    const apodGalleryBtnOnClick = () => {
        setApodGalleryData(img);
        toggleIsApodGalleryShown();
    }

    return (
        <div className='apod__comp col round' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})`}}>
            <h2 style={{fontWeight: 900}}>{title}</h2>

            <h4>{expl}</h4>

            <h3>&ndash;&ndash;&ndash;&ndash;&ndash;{date}&ndash;&ndash;&ndash;&ndash;&ndash;</h3>

            <button className='button-small transition' onClick={apodGalleryBtnOnClick}>View Large Image</button>
        </div>
    )
}

export default APODComp;