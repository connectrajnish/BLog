// BlogApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList/BlogList';
import CreateBlogPost from './CreateBlogPost/CreateBlogPost';
import Header from './Header/Header';

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [weaveOrExplore, setWeaveOrExplore] = useState("explore");

  const propWeaveOrExplore = (ren) => {
    setWeaveOrExplore(ren);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/blogs')
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  const handleBlogPostCreated = () => {
    axios
      .get('http://localhost:8080/blogs')
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  };

  return (
    <div>
      <Header propWeaveOrExplore={propWeaveOrExplore} />
      {
        weaveOrExplore === "explore" ? <BlogList blogPosts={blogPosts} /> : <CreateBlogPost onBlogPostCreated={handleBlogPostCreated} />
      }
    </div>
  );
};

export default App;
