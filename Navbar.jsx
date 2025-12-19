import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({ language, setLanguage }) => {
    return (
        <div className="container  sticky top-0 bg-gray-700">
            <Link className="logo" to="/">NewApp</Link>
            <div className="nav-links gap-4 p-4">
                <Link to="/all" >All</Link>
                <Link to="/politics">Politics</Link>
                <Link to="/science">Science</Link>
                <Link to="/education">Education</Link>
                <Link to="/crime">Crime</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/cricket">Cricket</Link>
                <Link to="/entertainment">Entertainment</Link>
                <Link to="/jokes & comedy">comedy</Link>



                {/* <div>
                    <label className="dropdown">Other ▾</label>
                    <select>
                        <option className="dropdown-menu" to="/education">Education</option>
                        <option className="dropdown-menu" to="/crime">Crime</option>
                        <option className="dropdown-menu" to="/sports">Sports</option>
                        <option className="dropdown-menu" to="/cricket">Cricket</option>
                        <option className="dropdown-menu" to="/entertainment">Entertainment</option>
                        <option className="dropdown-menu" to="/jokes & comedy">Jokas & comedy</option>
                    </select>
                </div> */}

                <div name="newslang" id="newslang" className='text-white text-[18px]'>
                    <button className='btnfirst' onClick={() =>
                        setLanguage('hi')}>Hindi</button>
                    <button className='btnsecond' onClick={() =>
                        setLanguage('en')}>English</button>
                </div>

                <div>
                    <img className='image rounded-[50%] size-10 ml-11' src="https://lh3.googleusercontent.com/a/ACg8ocJL1uDiCwfuOa7GfXmQ1iq_Y_briO4LP4kadXX2lHtQ7kTsGI8=s314-c-no" alt="Profile Foto" />
                </div>

            </div>

            {/* <div className="search-box">
                <input type="text" placeholder="Search..." className='input' />
                <button className="search-btn">Search</button>
            </div> */}
        </div>
    )
}

export default Navbar;