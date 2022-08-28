import React, {useState} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import Like from '../images/icons/like.svg';
import User from '../images/icons/user.svg';
import Shopping from '../images/icons/shopping.svg';
const CategoriesSec = () => {

    const [dropdownOpen, setOpen] =useState(false)

    const toggle=()=>setOpen(!dropdownOpen)

    return (
        <div className="categories">
            <ButtonDropdown className="categories_btn" isOpen={dropdownOpen} onClick={toggle}>
                <DropdownToggle>
                    <MenuIcon className="menuIcon d-flex"/>All categories</DropdownToggle>
                <DropdownMenu className="d-flex flex-column" aria-hidden={dropdownOpen}>
                    <DropdownItem>Menu item 1</DropdownItem>
                    <DropdownItem>Menu item 2</DropdownItem>
                    <DropdownItem>Menu item 3</DropdownItem>
                    <DropdownItem id="responsiveIcon">
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
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ul className="links">
                <li className="link-item">
                    <a href="#c" className="link active">
                        Home
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        New arrivals
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        Trending
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        Deals  for you
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        Discounts
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        Weekly offers
                    </a>
                </li>
                <li className="link-item">
                    <a href="#c" className="link">
                        Become a mentor
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default CategoriesSec;