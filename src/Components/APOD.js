import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from '../Context.js';
import APODComp from './APODComp.js';
import APODGallery from './APODGallery.js';
import loadingGif from '../Res/loadingGif.gif';

const APOD = () => {
    const { apodData, setApodData, fetchApodData, checkDate } = useContext(Context);
    const [apodStartDate, setApodStartDate] = useState('');
    const [apodEndDate, setApodEndDate] = useState('');
    const isFirstRender= useRef(true);

    const searchBtnOnClick = () => {
        //set 'apodData' as empty array to show 'loadingGif' whilst fetching from api (triggering useEffect) 
        if(checkDate(apodStartDate) && checkDate(apodEndDate)) setApodData([]);
    }

    const searchBtnOnClickError = () => {
        const errorMsg = document.querySelector('.apod__error-msg');
        errorMsg.classList.remove('hidden');

        setTimeout(() => {
            errorMsg.classList.add('hidden');
        }, 1000);
    }

    useEffect(() => {
        if(isFirstRender.current === true){
            isFirstRender.current = false;
            return;
        }   

        if(apodData.length === 0) fetchApodData(false, apodStartDate, apodEndDate);

    // eslint-disable-next-line
    }, [apodData])

    return (
        <div className='screen col'>
            <div className='screen__section-small col'>
                <h1 style={{textTransform: 'uppercase'}}>astronomy picture of the day</h1>

                <div className='row' style={{width: '100%'}}>
                    <div className='apod__input-wrapper center'>
                        <input value={apodStartDate} onChange={e => setApodStartDate(e.target.value)} maxLength='10'
                            placeholder='Start Date with Hyphens (YYYY-MM-DD)' className='input-large rounder'
                        />
                    </div>

                    <div className='apod__input-wrapper center'>
                        <input value={apodEndDate} onChange={e => setApodEndDate(e.target.value)} maxLength='10'
                            placeholder='End Date with Hyphens (YYYY-MM-DD)' className='input-large rounder' 
                        />
                    </div>

                    <div className='apod__input-wrapper center'>
                        <button onClick={apodStartDate && apodEndDate ? searchBtnOnClick : searchBtnOnClickError} className='transition'>Search</button>
                    </div>
                </div>
            </div>

            <div className='apod__comp-wrapper row'>
                {
                    apodData.length !== 0 ? 
                    apodData.map((curr, index) => 
                        <APODComp
                            key={index}
                            title={curr.title}
                            expl={curr.explanation}
                            img={curr.hdurl}
                            date={curr.date}
                        />
                    ) :
                    <img src={loadingGif} alt='loadingGif' className='loadingGif'/>
                }
            </div>

            <APODGallery/>

            <h2 className='apod__error-msg transition hidden'>Missing Dates or Incorrect Date Format</h2>
        </div>
    )
}

export default APOD;