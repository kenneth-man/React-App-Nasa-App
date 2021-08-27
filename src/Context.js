import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [navSliderSelection, setNavSliderSelection] = useState('HOME');
    const [apodData, setApodData] = useState([]);
    const [apodGalleryData, setApodGalleryData] = useState(undefined);
    const [isApodGalleryShown, setIsApodGalleryShown] = useState(false);
    const [earthData, setEarthData] = useState(undefined);
    const [earthSearchStr, setEarthSearchStr] = useState('');
    const [dataLoading, setDataLoading] = useState(false);
    const [epicData, setEpicData] = useState(undefined);
    const [epicSearchStr, setEpicSearchStr] = useState('');
    const [mrpData, setMrpData] = useState(undefined);
    const [mrpSearchStr, setMrpSearchStr] = useState('');
    const [neoData, setNeoData] = useState([]);
    
    const nasaKey = '';
    //today's date in the format 'yyyy-mm-dd'
    const todayDate = new Date().toISOString().slice(0, 10);

    const fetchApodData = async (isSingleFetch = true, startDate, endDate) => {
        try {
            let response;

            startDate && endDate ? 
            response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${nasaKey}`) :
            response = await fetch(`https://api.nasa.gov/planetary/apod?date=${todayDate}&api_key=${nasaKey}`); 

            const data = await response.json();
            
            isSingleFetch ? 
            setApodData([data]) :
            setApodData(data);
        } catch(error) {
            console.log(error);
        }
    }

    const fetchEarthData = async (lat, lng) => {
        try {
            if(lat && lng){
                setDataLoading(true);
                const response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&dim=0.15&api_key=${nasaKey}`);
                setEarthData(response);
                setDataLoading(false);
            }
        } catch(error){
            console.log(error);
        }
    }

    //fetch url slugs for all images for a specific date
    const fetchEpicData = async (date) => {
        try {
            const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${nasaKey}`);
            const data = await response.json();
            setEpicData(data);
        } catch(error){
            console.log(error);
        }
    }

    const fetchMrpData = async (date) => {
        try {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${nasaKey}`);
            const data = await response.json();
            setMrpData(data);
        } catch(error){
            console.log(error);
        }
    }

    const fetchNeoData = async (startDate, endDate) => {
        try {
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasaKey}`);
            const data = await response.json();
            setNeoData(Object.values(data.near_earth_objects));
        } catch(error){
            console.log(error);
        }
    }

    const fetchLatLngFromCountry = async (country) => {
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
            const data = await response.json();  
            
            fetchEarthData(data[0].latlng[0], data[0].latlng[1]);
        } catch(error){
            console.log(error);
        }
    }

    const toggleIsApodGalleryShown = () => {
        setIsApodGalleryShown(!isApodGalleryShown);
    }

    const checkDate = (date) => {
        if(date.length === 10 && 
            date.split('-')[0].length === 4 && 
            date.split('-')[1].length === 2 && 
            date.split('-')[2].length === 2) return true;
    }

    const formatDate = (date) => {
        return date.replaceAll('-', '/');
    }

    useEffect(() => {
        fetchApodData();
    // eslint-disable-next-line
    },[])

    useEffect(() => {
        if(earthSearchStr) fetchLatLngFromCountry(earthSearchStr);
    // eslint-disable-next-line
    }, [earthSearchStr])

    useEffect(() => {
        if(epicSearchStr) fetchEpicData(epicSearchStr);
    // eslint-disable-next-line
    }, [epicSearchStr])

    useEffect(() => {
        if(mrpSearchStr) fetchMrpData(mrpSearchStr);
    // eslint-disable-next-line
    }, [mrpSearchStr])


    return (
        <Context.Provider value={{ navSliderSelection, apodData, apodGalleryData, isApodGalleryShown, earthData, earthSearchStr, dataLoading, epicData, epicSearchStr, nasaKey,
                                mrpSearchStr, mrpData, neoData,
                                setNavSliderSelection, setApodData, fetchApodData, setApodGalleryData, toggleIsApodGalleryShown, setEarthSearchStr, setEpicSearchStr,
                                checkDate, formatDate, setMrpSearchStr, fetchNeoData }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;