import React, { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import "./new_blog.css";

const New_Blog = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newBlog_container">
      <h3> Write New Blog </h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            id="title"
            aria-describedby=""
            placeholder="What are you Writing about ?"
            aria-required="true"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <textarea
            type="text"
            id="title"
            aria-describedby=""
            placeholder="The Journey to a Thousand Words begins with the first word"
            aria-required="true"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            id="title"
            aria-describedby=""
            placeholder="What is your name ?"
            aria-required="true"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <span className="button-box">
          <button type="submit"> Publish Article </button>
        </span>
      </form>
    </div>
  );
};

export default New_Blog;
