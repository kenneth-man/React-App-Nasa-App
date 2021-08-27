import React, { useContext } from 'react';
import { Context } from '../Context.js';
import loadingGif from '../Res/loadingGif.gif';

const EARTH = () => {
    const { earthData, earthSearchStr, setEarthSearchStr, dataLoading } = useContext(Context);

    return (
        <div className='screen col'>
            <div className='screen__section-small col'>
                <h1>EARTH OBSERVATION SATELLITE DATA</h1>

                <input placeholder='Type in a Country name...' value={earthSearchStr} onChange={e => setEarthSearchStr(e.target.value)}
                    className='input-large earth__input rounder'/>
            </div>

            <div className='screen__section-med center'>
                {
                    earthData && earthSearchStr !== '' ? 
                    <img src={earthData.url} alt='satellite-img' className='earth__img'/> :
                    <h1 style={{transform: 'translateY(-150px)'}}>No Satellite Image found</h1>
                }

                {
                    dataLoading ?
                    <div className='earth__loading row'>
                        <img src={loadingGif} alt='loading-gif'/>

                        <h2 style={{color: '#000'}}>Fetching Satellite Image</h2>
                    </div> :
                    <span>&nbsp;</span>
                }  
            </div>
        </div>
    )
}

export default EARTH;