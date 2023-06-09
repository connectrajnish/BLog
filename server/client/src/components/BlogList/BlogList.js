import React from 'react';
import './BlogList.css';

const BlogList = ({ blogPosts }) => {
  console.log(blogPosts)
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        post.status? <BlogPost key={post._id} title={post.title} content={post.content} image={post.image} />:null
      ))}
    </div>
  );
};

const BlogPost = ({ title, content, image }) => {
  let imgName = '';
  if (image) {
    imgName = image.substring(image.lastIndexOf('\\') + 1);
  }
  const formattedContent = React.useMemo(() => {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = content;
    return temporaryElement.innerText;
  }, [content]);

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      {image && <img className='head-img' src={`/uploads/${imgName}`} alt="Blog Image" />}
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogList;
