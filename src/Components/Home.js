import React from 'react';
import nasaLogo from '../Res/nasa-logp.png';
import arrowDownIcon from '../Res/chevron-down.svg';

const Home = () => {
    const scrollToContact = () => {
        document.querySelector('.screen__section--contact').scrollIntoView({behavior: "smooth"});
    }   

    return (
        <div className='screen col'>
            <div className='screen__section screen__section--about col'>
                <div className='col'>
                    <img src={nasaLogo} alt='nasa logo'/>

                    <h1>About NASA</h1>
                </div>

                <p style={{width: '65%', 'lineHeight': '35px', fontSize: '21px'}}>
                    The National Aeronautics and Space Administration is America’s civil space program and the global leader in space exploration. 
                    The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S. contractors, academia,
                    and international and commercial partners to explore, discover, and expand knowledge for the benefit of humanity. 
                    With an annual budget of $23.2 billion in Fiscal Year 2021, which is less than 0.5% of the overall U.S. federal budget, 
                    NASA supports more than 312,000 jobs across the United States, generating more than $64.3 billion in total economic output (Fiscal Year 2019).<br></br> <br></br> 

                    At its 20 centers and facilities across the country – and the only National Laboratory in space – NASA studies Earth, including its climate, 
                    our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion 
                    and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.<br></br><br></br> 
                </p>

                <button  className='button-clear center transition' onClick={scrollToContact}>
                    <img src={arrowDownIcon} alt='arrow-down-icon'/>
                </button>
            </div>

            <div className='screen__section screen__section--contact col'>
                <div className='col'>
                    <img src={nasaLogo} alt='nasa logo'/>

                    <h1>Contact NASA</h1>
                </div>

                <div className='home__contact col round'>
                    <div className='row' style={{width: '100%'}}>
                        <div className='col'>
                            <label htmlFor='fn'>First Name</label>
                            <input name='fn' placeholder='First Name...' className='input-small rounder'></input>
                        </div>

                        <div className='col'>
                            <label htmlFor='ln'>Last Name</label>
                            <input name='ln'placeholder='Last Name...' className='input-small rounder'></input>
                        </div>

                        <div className='col'>
                            <label htmlFor='ea'>Email Address</label>
                            <input name='ea' placeholder='Email Address...' className='input-small rounder'></input>
                        </div>
                    </div>

                    <div className='col'>
                        <label htmlFor='msg'>Message</label>
                        <textarea name='msg' placeholder='Your Message To Us...' className='home__txtarea round'></textarea>
                    </div>

                    <button className='transition'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Home;

//https://www.youtube.com/watch?v=v3C6W8EtBH0
//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView