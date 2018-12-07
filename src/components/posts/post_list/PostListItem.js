import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostListItem = ({ id, post, SetCurrentPost}) => {
    return (
        <PostWrapper>
            <SLink onClick={() => SetCurrentPost(post)} to={`/post/${id}`}>
                <TextWrapper>
                    <Category>{post.category}</Category>
                    <Title>{post.title}</Title>
                </TextWrapper>
                <Image src={post.image.url} alt={post.image.alt} />
            </SLink>
        </PostWrapper>
    );
}

PostListItem.propTypes = {
    id: PropTypes.number,
    post: PropTypes.shape({
        category: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
        }),
        content: PropTypes.string,
        author: PropTypes.string,
        authorAvatar: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
        })
    }),
    SetCurrentPost: PropTypes.func
}

const SLink = styled(Link)`
    text-decoration: none;
    display: flex;
    width: 100%;
`

const Image = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
`;

const Category = styled.h4`
    text-transform: uppercase;
    margin: 0 0 10px 0;
    font-size: 17px;
    color: black;
    font-weight: 700;
`;

const Title = styled.h3`
    text-align: left;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin: 5px 0 15px 0;
    color: black;
`;

const TextWrapper = styled.div`
    flex: 1;
    padding-right: 20px;
`;

const PostWrapper = styled.article`
    padding: 25px 0;
    border-bottom: 1px dotted lightgrey;
    width: 100%;
    &:first-of-type {
        ${SLink} {
            flex-direction: column-reverse;
        }
        ${Image}{
            width: 100%;
            height: 300px;
            margin-bottom: 20px;
        }
        ${Title}{
            font-size: 32px;
            line-height: 38px;
        }
    }
`;

export default PostListItem;