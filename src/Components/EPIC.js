import React, { useContext } from 'react';
import { Context } from '../Context.js';

const EPIC = () => {
    const { epicSearchStr, setEpicSearchStr, epicData, nasaKey, formatDate } = useContext(Context);

    return (
        <div className='screen'>
            <div className='screen__section-small col'>
                <h1>EARTH POLYCHROMATIC IMAGING CAMERA</h1>

                <input placeholder='Date with Hyphens (YYYY-MM-DD)' value={epicSearchStr} onChange={e => setEpicSearchStr(e.target.value)}
                    className='input-large epic__input rounder' maxLength='10'/>
            </div>

            <div className='screen__section-med epic__img-cont-wrapper col'>
                {
                    epicData && epicSearchStr !== '' ? 
                    epicData.map((curr, index) => 
                        <div key={index} className='epic__img-cont col'>
                            <h2>{curr.caption}</h2>
                            <h2>Date: {curr.date} &nbsp; Latitude: {curr.centroid_coordinates.lat} &nbsp; Longitude: {curr.centroid_coordinates.lon}</h2>
                            <img src={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(epicSearchStr)}/png/${curr.image}.png?api_key=${nasaKey}`} alt='polychromatic-img' className='epic__img'/>
                        </div>
                    ) :
                    <h1 style={{transform: 'translateY(230px)'}}>No Satellite Image found</h1>
                }
            </div>
        </div>
    )
}

export default EPIC;