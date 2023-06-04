import React from 'react';
import './BlogList.css';

const BlogList = ({ blogPosts }) => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <BlogPost key={post._id} title={post.title} content={post.content} image={post.image} />
      ))}
    </div>
  );
};

const BlogPost = ({ title, content, image }) => {
  const formattedContent = React.useMemo(() => {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = content;
    return temporaryElement.innerText;
  }, [content]);

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      {image && <img src={image} alt="Blog Image" />}
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <p>{formattedContent}</p>
    </div>
  );
};

export default BlogList;
