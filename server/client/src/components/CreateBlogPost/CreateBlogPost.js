import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styles
import './CreateBlogPost.css';

const CreateBlogPost = ({ onBlogPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [postedOrNot, setPostedOrNot] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleCreatePost = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('title', title);
    formData.append('content', content);

    axios
      .post('http://localhost:8080/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to "multipart/form-data"
        },
      })
      .then((response) => {
        console.log('Blog post created');
        onBlogPostCreated(); // Notify parent component that a new post was created
        setTitle('');
        setContent('');
        setSelectedImage(null);
      })
      .catch((error) => {
        console.error('Error creating blog post:', error);
      });
  };

  return (
    <div className="create-blog-post">
      <form onSubmit={handleCreatePost} encType="multipart/form-data">
        <div className="image-banner">
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="selected-image" />
          )}
          {!selectedImage && (
            <label htmlFor="image-upload" className="custom-file-upload">
              <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>

        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
        <div className="toolbar-container">
        <ReactQuill
          className='reactQuill'
          value={content}
          onChange={handleContentChange}
          placeholder="Let's weave..."
          modules={{
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image']
            ],
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'link',
            'image'
          ]}
        />
        </div>
        <div className='btn-container'>
        <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPost;
