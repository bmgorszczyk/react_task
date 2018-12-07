import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
    return (
       <SingleTag href="#">#{ tag }</SingleTag>
    );
}

Tag.propTypes = {
    tag: PropTypes.string
}

export default Tag;

const SingleTag = styled.a`
    padding-right: 15px;
    margin-right: 15px;
    font-size: 18px;
    border-right: 2px dotted lightgrey;
    white-space: nowrap;
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:last-of-type {
        border: none;
    }
`




