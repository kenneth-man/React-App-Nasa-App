import React, { useContext } from 'react';
import { Context } from '../Context.js';

const MRP = () => {
    const { mrpData, mrpSearchStr, setMrpSearchStr } = useContext(Context);

    return (
        <div className='screen'>
            <div className='screen__section-small col'>
                <h1>MARS ROVER PHOTOS</h1>

                <input placeholder='Date with Hyphens (YYYY-MM-DD)' value={mrpSearchStr} onChange={e => setMrpSearchStr(e.target.value)}
                    className='input-large epic__input rounder' maxLength='10'/>
            </div>

            <div className='screen__section-med mrp__cont-wrapper col'>
                {
                    mrpData && mrpSearchStr !== '' ?
                    mrpData.photos.map((curr, index) => 
                        <div key={index} className='mrp__cont col'>
                            <h2>{curr.camera.full_name}</h2>
                            <h2>Date: {curr.earth_date} &nbsp; Rover: {curr.rover.name} &nbsp; Status: {curr.rover.status}</h2>
                            <h2>Landing Date: {curr.rover.landing_date} &nbsp; Launch Date: {curr.rover.launch_date}</h2>
                            <img src={curr.img_src} alt='polychromatic-img' className='mrp__img'/>
                        </div>
                    ) :
                    <h1 style={{transform: 'translateY(230px)'}}>No Rover Images found</h1>
                }
            </div>
        </div>
    )
}

export default MRP;