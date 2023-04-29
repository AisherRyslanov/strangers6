// import React, {useState} from 'react';
// import "./style.scss"
import React, {useState} from 'react';
import "./style.scss"
import {BsSearch} from "react-icons/bs";
import {RiShoppingBagLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";


const Header = () => {
    const [search, setSearch] = useState(true)


    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title">
                        <NavLink to={"/"}>
                            Bookshop
                        </NavLink>
                        <NavLink to={"/genres"}>
                            Categories
                        </NavLink>
                        <NavLink to={"/recent"}>
                            Recent</NavLink>
                        <NavLink to={"/books"}>
                            Books

                        </NavLink>
                        <NavLink to={"/aboutUs"}>
                            About Us
                        </NavLink>
                    </div>
                    <nav className="header--search">
                        <div style={{
                            background: search ? 'transparent' : ''
                        }} className='header--search__icon'>

                            <BsSearch onClick={() => setSearch(!search)} className="header--search__icon--bs"/>

                            <input style={{
                                width: search ? '' : '120px'
                            }} text="text"/>
                        </div>
                    </nav>

                    {/*<div className="search-box">*/}
                    {/*    <input className="search-txt" type="text" placeholder="Type to search"/>*/}
                    {/*    <a className="search-btn" href="#"> <BsSearch className=""/></a>*/}
                    {/*</div>*/}

                    <NavLink to={"/DetailBooks"}>
                        <RiShoppingBagLine className="header--title__bag"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;

