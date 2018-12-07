import React from "react";
import PostListItem from "./PostListItem";
import styled from "styled-components";
import PropTypes from "prop-types";
import posed from "react-pose";
import TagList from "../../tags/TagList";

const PostList = ({ posts, SetCurrentPost, tags }) => {
    return (
        <SWrapper initialPose="hidden" pose="visible">
            <TagList tags={tags}/>
            {posts.map((post, i) => (
                <PostListItem 
                    id={i}
                    key={post.title}
                    post={post}
                    SetCurrentPost={SetCurrentPost}>
                </PostListItem>
            ))}
        </SWrapper>
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
    tags: PropTypes.arrayOf(PropTypes.string),
    SetCurrentPost: PropTypes.func
}

export default PostList;

const Wrapper = posed.div({
    visible: { 
        opacity: 1
    },
    hidden: { 
        opacity: 0
    }
});

const SWrapper = styled(Wrapper)`
  padding: 0 25px;
  box-sizing: border-box;
`