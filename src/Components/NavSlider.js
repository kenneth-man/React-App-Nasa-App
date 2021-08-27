import React, { useContext, useState } from 'react';
import { Context } from '../Context.js';
import { Link } from 'react-router-dom';
import closeIcon from '../Res/close.svg';
import openIcon from '../Res/align-justify.svg';
import NavSliderTab from './NavSliderTab';
import { navSliderTabIcons } from '../NavSliderTabIcons';

const NavSlider = () => {
    const { setNavSliderSelection } = useContext(Context);
    const [isNavSliderShown, setIsNavSliderShown] = useState(false);

    const navSliderBtnOnClick = () => {
        setIsNavSliderShown(!isNavSliderShown);
    }

    const navSliderTabOnClick = (eventObjId) => {
        setNavSliderSelection(eventObjId);
    }

    return (
        <div className={isNavSliderShown ? 'navSlider navSlider--shown col transition' : 'navSlider col transition'}>
            <div className='navSlider__btn-wrapper'>
                <button className='navSlider__btn button-clear center transition' onClick={navSliderBtnOnClick}>
                    <img src={isNavSliderShown ? closeIcon : openIcon} alt='navSlider-icon' className='icon-med'/>
                </button>
            </div>

            <div className={isNavSliderShown ? 'navSlider__tab-wrapper col transition' : 'navSlider__tab-wrapper col transition hidden'}>
                {
                    navSliderTabIcons.map((curr, index) => 
                        //'e.target' is always the deepest element clicked, while 'e.currentTarget' will point to the element where the onClick is 
                        <Link key={index} to={`${curr.title === 'HOME' ? '/' : `${curr.title}`}`} className='link' id={curr.title} onClick={e => navSliderTabOnClick(e.currentTarget.id)}>
                            <NavSliderTab 
                                key={index}
                                id={curr.title}
                                icon={curr.icon}
                                title={curr.title}
                                subTitle={curr.subTitle}
                            />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default NavSlider;