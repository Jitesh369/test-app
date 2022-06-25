import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post: { title, body, imgUrl, link, author }, index }) => {
    return (
        <div className="post-container">
            <h2 className="heading">{title}</h2>
            <img className="image" src={imgUrl} alt="post" />
            <br/>
            <br/>
            <p className="body">{body}</p>
            <br/>
            {link}
        </div>
    );
};

export default Post;