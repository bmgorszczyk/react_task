import React from "react";
import PostListItem from "./PostListItem";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostList = ({ posts, SetCurrentPost }) => {
    return (
        <Wrapper>
            {posts.map((post, i) => (
                <PostListItem 
                    id={i}
                    key={post.title}
                    post={post}
                    SetCurrentPost={SetCurrentPost}>
                </PostListItem>
            ))}
        </Wrapper>
    );
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
    SetCurrentPost: PropTypes.func
}

export default PostList;

const Wrapper = styled.div`
  padding: 0 25px;
  box-sizing: border-box;
`