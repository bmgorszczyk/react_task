import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, i) => (
                <PostListItem id={i} ></PostListItem>
            ))}
        </div>
    );
}

export default PostList;