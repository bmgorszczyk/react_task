import React from "react";
import styled from 'styled-components';
import Tag from "./Tag";

const TagList = ({ tags }) => {
    return (
       <Tags>
           {tags.map(tag => {
               return <Tag tag={tag}></Tag>
           })}
       </Tags>
    );
}

export default TagList;

const Tags = styled.div`
    padding: 0 20px;
    display: flex;
    overflow: auto;
`

