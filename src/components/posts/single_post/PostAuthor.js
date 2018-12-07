import React from "react";
import styled from 'styled-components';

const PostAuthor = ({ author, authorAvatar }) => {
    return (
        <AuthorWrapper>
            <AvatarImage src={authorAvatar.url} alt={authorAvatar.alt} ></AvatarImage>
            <AuthorBy>
                by
                <AuthorName href="#" >{author}</AuthorName>
            </AuthorBy>
        </AuthorWrapper>
    );
}

export default PostAuthor;

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
`

const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const AuthorBy = styled.div`
    color: grey;
    font-size: 20px;
`

const AuthorName = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin-left: 10px;
    color: black;
    font-family: 'Bitter', cursive;
    font-size: 20px;
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        background-color: grey;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
    }
`