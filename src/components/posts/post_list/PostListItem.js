import React from "react";
import { Link } from "react-router-dom";

const PostListItem = ({ id }) => {
    return (
        <div>
            <Link to={`/post/${id}`}>PostListItem</Link>
        </div>
    );
}

export default PostListItem;