import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ blog: { id, title, body, imageUrl, author } }) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="post_container" key={id}>
        <h1 className="heading"> {title} </h1>
        <img className="image" src={imageUrl} alt="post" />
        <p> {body} </p>
        <div className="info">
          <h4>Written by: {author}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Post;
