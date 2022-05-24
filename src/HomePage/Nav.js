import React from 'react';
import NavLogo from '../images/logo.png';//rasm formati yozilishi kk toliq Adobe XD da export qilish uchun eliment tanlab shift bl kn group qilinadi va export > selected qilinadi
import Like from '../images/icons/like.svg';
import User from '../images/icons/user.svg';
import Shopping from '../images/icons/shopping.svg';
import SearchIcon from '@material-ui/icons/Search';
import ResponsiveModal from './/ResponsiveModal';
const Nav = () => {
    return (
        <>
        <nav className="navigation">
            <a href="logo" className="nav-logo">
                <img src={NavLogo} alt="nav-logo-img"/>
            </a>
            <ResponsiveModal/>
            <div className="searchSec">
                <form>
                    <input type="text" 
                        className="searchInput"
                        placeholder="Search For Products, Brands & Categoories"
                        />
                    <button type="button" className="searchBtn">
                        <SearchIcon/>
                    </button>
                </form>
            </div>
            <div className="icons">
                <a href="logo" className="icon-sections">
                    <img src={Like} alt="like-icon"/>
                </a>
                <a href="log" className="icon-sections">
                    <img src={User} alt="user-icon"/>
                </a>
                <a href="lo" className="icon-sections">
                    <img src={Shopping} alt="shopping-icon"/>
                </a>
            </div>
        </nav>  
        </>
    );
};


export default Nav;