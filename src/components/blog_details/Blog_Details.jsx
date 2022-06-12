import React, { useState } from "react";
import "./blog_details.css";

import * as blogPosts from "../../Data";
import Post from "../post/Post";

// import { useParams } from "react-router-dom";
// import { useFetch } from "react-fetch-hook";

const Blog_Details = () => {
  // const { id } = useParams();
  // const {} = useFetch(blogPosts.blogs + id);

  let blogPosts;

  return (
    <div className="blog_Details_container">
      <h2> Blog Details </h2>
    </div>
  );
};

export default Blog_Details;
