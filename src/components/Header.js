import React, { useState } from 'react';
import '../sass/header.scss';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from "@mui/material/Badge";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, InputGroup, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { signOut } from "../firebes/config";


const Header = (props) => {
    const [drop, setDrop] = useState(false);
    console.log(props);

    const dropOpen = () => {
        setDrop(!drop);
    };

    return (
        <>
            {props.user ? (
                    <nav className = "header" >
                        <NavLink to="/" className = "header__logo d-flex align-items-center" >
                            <img src = "/images/logo.png" alt = "Amazon" className = "logo" />

                            <a href = "https://www.google.com/maps/search/amazon/@41.305391,69.115805,12z/data=!3m1!4b1"
                               target = "_blank"
                               className = "header__map d-flex align-items-center mb-2 ml-3" >
                                <AddLocationAltIcon style = {
                                    { color: "#fff" }
                                }/>
                                <span className = "ml-2">
                                    <p className = "mb-0 text-white" > Deliver to </p>
                                    <h6 className = "mb-0 text-white" > Uzbekistan </h6>
                                </span >
                            </a>
                        </NavLink >

                        <span className = "header__search" >
                <InputGroup >
                    <ButtonDropdown isOpen = { drop }
                                    toggle = { dropOpen }
                                    style = {
                                        { backgroundColor: "#F3F3F3"}
                                    } >
                    <DropdownToggle outline split >
                    All </DropdownToggle> <DropdownMenu >
                    <DropdownItem >
                    All Departments </DropdownItem> <DropdownItem >
                    Automative </DropdownItem> <DropdownItem >
                    Baby </DropdownItem> <DropdownItem >
                    Computers </DropdownItem> </DropdownMenu>
                    </ButtonDropdown>
                    <Input style = {{ width: "792px" }} onChange={(e) => props.search(e.target.value)}/>
                    <Button style = {
                        { backgroundColor: "#FEBD69" }
                    } >
                    <
                        SearchIcon style = {
                        { color: "#000" }
                    }
                    />
                    </Button >
                </InputGroup>
            </span >
                        <span className = "header__sign-in__cart d-flex align-items-center ml-3" onClick={signOut} >
                    <NavLink  to="/login" className="d-flex align-items-center" >
                        <img src={props.user.photoURL} style={{borderRadius: "50%", width: "50px"}} alt=""/>
                        <p className = "mb-0 text-white ml-1" style={{fontSize: "17px"}} > Hello, {props.user.displayName} </p>
                    </NavLink >

                    <a href="#" className="ml-4">
                        <Badge badgeContent={props.count} color="primary">
                            <ShoppingCartIcon style={{color: "#fff", fontSize: "35px"}}/>
                        </Badge>
                    </a>
                </span>
                    </nav >
                ) : (
                <nav className = "header" >
                    <NavLink to="/" className = "header__logo d-flex align-items-center" >
                        <img src = "/images/logo.png" alt = "Amazon" className = "logo" />

                        <a href = "https://www.google.com/maps/search/amazon/@41.305391,69.115805,12z/data=!3m1!4b1"
                           target = "_blank"
                           className = "header__map d-flex align-items-center mb-2 ml-3" >
                            <AddLocationAltIcon style = {
                                { color: "#fff" }
                            }/>
                            <span className = "ml-2">
                                    <p className = "mb-0 text-white" > Deliver to </p>
                                    <h6 className = "mb-0 text-white" > Uzbekistan </h6>
                                </span >
                        </a>
                    </NavLink >

                    <span className = "header__search" >
                <InputGroup >
                    <ButtonDropdown isOpen = { drop }
                                    toggle = { dropOpen }
                                    style = {
                                        { backgroundColor: "#F3F3F3"}
                                    } >
                    <DropdownToggle outline split >
                    All </DropdownToggle> <DropdownMenu >
                    <DropdownItem >
                    All Departments </DropdownItem> <DropdownItem >
                    Automative </DropdownItem> <DropdownItem >
                    Baby </DropdownItem> <DropdownItem >
                    Computers </DropdownItem> </DropdownMenu>
                    </ButtonDropdown>
                    <Input style = {{ width: "792px" }} onChange={(e) => props.search(e.target.value)}/>
                    <Button style = {
                        { backgroundColor: "#FEBD69" }
                    } >
                    <
                        SearchIcon style = {
                        { color: "#000" }
                    }
                    />
                    </Button >
                </InputGroup>
            </span >
                    <span className = "header__sign-in__cart d-flex align-items-center ml-3" >
                    <NavLink  to="/" >
                        <p className = "mb-0 text-white" > Hello, Sign in </p>
                        <h6 className = "mb-0 text-white" > Account & List </h6>
                    </NavLink >
                    <a href="#" className="ml-4">
                        <p className = "mb-0 text-white" > Returs </p>
                        <h6 className = "mb-0 text-white" > & Orders </h6>
                    </a >

                    <a href="#" className="ml-4">
                        <Badge badgeContent={props.count} color="primary">
                            <ShoppingCartIcon style={{color: "#fff", fontSize: "35px"}}/>
                        </Badge>
                    </a>
                </span>
                </nav >
            )}
            <div className="submenu">
                <span className="d-flex align-items-center">
                    <span className="d-flex mt-2">
                    <MenuIcon style={{color: "#fff"}}/>
                    <h6 className="text-white ml-1">All</h6>
                </span>

                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link text-white">Today's Deals</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Customer Service</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Registry</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Gift Cards</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Sell</a></li>
                </ul>
                </span>

                <h6 className="text-white">Shop Father's Day Gifts</h6>
            </div>
        </>
    );
};

export default Header;