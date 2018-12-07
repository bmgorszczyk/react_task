import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import logo from "../../img/logo.svg";

const Nav = ({ location, history}) => {

    let routeBtn, rightBtn;

    if(location.pathname === "/") {
        routeBtn = <RouteBtn onClick={history.goBack} ><RouteBtnIcon className="fa fa-bars" /></RouteBtn>;
        rightBtn = <RightBtn><RightBtnIcon className="fa fa-search" /></RightBtn>
    }
    else {
        routeBtn = <RouteBtn onClick={history.goBack}><RouteBtnIcon className="fa fa-arrow-left" /></RouteBtn>;
        rightBtn = <RightBtn><RightBtnIcon className="fa fa-share-alt" /></RightBtn>
    }

    return (
        <Navigation>
            {routeBtn}
            <Logo src={logo} alt="Logo"/>
            {rightBtn}
        </Navigation>
    );
}

Nav.propTypes = {
    location: PropTypes.object, // i will not deep check this router internal objects
    history: PropTypes.object
}

export default withRouter(Nav);

const Navigation = styled.div`
  padding: 0 25px;
  height: 80px;
  box-sizing: border-box;
  position: relative;
`

const RouteBtn = styled.button`
    background: none;
    border: none;
    position: absolute; 
    left: 25px;
    top: 20px;
    padding: 0;
    cursor: pointer;
    outline: none;
`

const RouteBtnIcon = styled.span`
    font-size: 24px;
    color: black;
    font-weight: normal;
`

const Logo = styled.img`
    position: absolute;
    left: 80px;
    height: 100px;
    top: -14px;
`

const RightBtn = styled.button`
    background: none;
    border: none;
    position: absolute; 
    right: 25px;
    top: 20px;
    padding: 0;
    cursor: pointer;
    outline: none;
`

const RightBtnIcon = styled.span`
    font-size: 24px;
    color: black;
    font-weight: normal;
`