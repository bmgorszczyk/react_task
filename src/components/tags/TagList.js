import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from "./Tag";

const TagList = ({ tags }) => {
    return (
       <Tags>
           {tags.map(tag => {
               return <Tag key={tag} tag={tag}></Tag>
           })}
       </Tags>
    );
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default TagList;

const Tags = styled.div`
    display: flex;
    overflow: auto;
`

