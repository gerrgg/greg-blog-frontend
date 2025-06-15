import React, { useState } from "react";

const BlogForm = ({ createBlog, blogFormRef }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog({ title, author, url });
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  const handleCancel = () => {
    setTitle("");
    setAuthor("");
    setUrl("");
    blogFormRef.current.toggleVisibility();
  }

  const inputStyle = {
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    marginBottom: '5px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const createButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgb(0, 123, 255)',
  };

  const buttonWrapStyle = {
    display: 'flex',
    marginTop: '10px',
    gap: '10px',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
      </div>
      <div style={buttonWrapStyle}>
        <button style={createButtonStyle} type="submit">Create</button>
        <button style={buttonStyle} onClick={handleCancel} type="button">Cancel</button>
      </div>
    </form>
  );
};

export default BlogForm;
