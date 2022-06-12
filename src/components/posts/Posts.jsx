import React from "react";
import "./posts.css";
import Post from "../post/Post";

import * as data from "../../Data";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="posts_container">
      <div className="new_blog_entry">
        <Link to="/new_blog">
          <button> Write New Blog </button>
        </Link>
      </div>

      {data.blogs.map((blog) => (
        <Post blog={blog} />
      ))}
    </div>
  );
};

export default Posts;
