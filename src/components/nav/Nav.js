import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";

const Nav = () => {
    return (
        <Navigation>
            <HamburgerBtn>
                <BarsIcon className="fa fa-bars" />
            </HamburgerBtn>
            <Logo src={logo} alt="Logo"/>
            <SearchBtn>
                <SearchIcon className="fa fa-search" />
            </SearchBtn>
        </Navigation>
    );
}

export default Nav;

const Navigation = styled.div`
  padding: 0 25px;
  height: 80px;
  box-sizing: border-box;
  position: relative;
`

const HamburgerBtn = styled.button`
    background: none;
    border: none;
    position: absolute; 
    left: 25px;
    top: 20px;
    padding: 0;
    cursor: pointer;
    outline: none;
`

const BarsIcon = styled.span`
    font-size: 30px;
    color: black;
`

const Logo = styled.img`
    position: absolute;
    left: 80px;
    height: 100px;
    top: -14px;
`

const SearchBtn = styled.span`
    background: none;
    border: none;
    position: absolute; 
    right: 25px;
    top: 20px;
    padding: 0;
    cursor: pointer;
    outline: none;
`

const SearchIcon = styled.span`
    font-size: 28px;
    color: black;
`