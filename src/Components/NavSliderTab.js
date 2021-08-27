import React, { useContext } from 'react';
import { Context } from '../Context.js';

const NavSliderTab = ({ id, icon, title, subTitle }) => {
    const { navSliderSelection } = useContext(Context);

    return (
        <div className={navSliderSelection === id ? 'navSlider__tab navSlider__tab--active row transition round' : 'navSlider__tab row transition round'}>
            <img src={icon} alt='icon' className='icon-med'/>
             
            <div className='navSlider__tab--inner col'>
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
            </div>
        </div>
    )
}

export default NavSliderTab;