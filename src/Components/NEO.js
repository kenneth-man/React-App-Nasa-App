import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context.js';

const NEO = () => {
    const { neoData, fetchNeoData } = useContext(Context);
    const [neoStartDate, setNeoStartDate] = useState('');
    const [neoEndDate, setNeoEndDate] = useState('');

    const searchBtnOnClick = () => {
        fetchNeoData(neoStartDate, neoEndDate);
    }

    const searchBtnAlert = () => {
        alert('Missing Inputs');
    }

    return (
        <div className='screen'>
            <div className='screen__section-small col'>
                <h1>NEAR EARTH OBJECTS</h1>

                <div className='row' style={{width: '100%'}}>
                    <div className='apod__input-wrapper center'>
                        <input value={neoStartDate} onChange={e => setNeoStartDate(e.target.value)} maxLength='10'
                            placeholder='Start Date with Hyphens (YYYY-MM-DD)' className='input-large rounder'
                        />
                    </div>

                    <div className='apod__input-wrapper center'>
                        <input value={neoEndDate} onChange={e => setNeoEndDate(e.target.value)} maxLength='10'
                            placeholder='End Date with Hyphens (YYYY-MM-DD)' className='input-large rounder' 
                        />
                    </div>

                    <div className='apod__input-wrapper center'>
                        <button onClick={neoStartDate !== '' || neoEndDate !== '' ? searchBtnOnClick : searchBtnAlert} className='transition'>Search</button>
                    </div>
                </div>
            </div>

            <div className='screen__section-med neo__cont-wrapper col'>
                {
                    neoData.length !== 0 ? 
                    neoData.map(curr => 
                        curr.map((el, index) =>
                            <div key={index} className='neo_cont col'>
                                <h1>Asteroid Name: {el.name}</h1>
                                <h2>Approach Date: {el.close_approach_data[0].close_approach_date_full}</h2>
                                <h2>Diameter: {el.estimated_diameter.kilometers.estimated_diameter_max}KM</h2>
                                <h2>Potentially Hazardous Asteroid: {el.is_potentially_hazardous_asteroid}</h2>
                                <h2>Nasa Link: {el.nasa_jpl_url}</h2>
                            </div>
                        )
                    ) :
                    <h1 style={{transform: 'translateY(230px)'}}>No Near Earth Object Images found</h1>
                }
            </div>
        </div>
    )
}

export default NEO;