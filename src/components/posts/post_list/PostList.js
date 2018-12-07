import React from "react";
import PostListItem from "./PostListItem";
import styled from 'styled-components';

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

export default PostList;

const Wrapper = styled.div`
  padding: 25px;
  box-sizing: border-box;
`