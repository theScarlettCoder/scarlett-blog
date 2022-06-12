import "./App.css";
import Posts from "../src/components/posts/Posts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import New_Blog from "./components/new_blog/New_Blog";
import Blog_Details from "./components/blog_details/Blog_Details";

function App() {
  return (
    <div className="App">
      <h1> Scarlett Blog </h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/blogs/:id" element={<Blog_Details />} />
          <Route exact path="/new_blog" element={<New_Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
