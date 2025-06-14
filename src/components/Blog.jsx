import React, { useState } from 'react'

const Blog = ({ blog, updateBlog }) => {
  const [showMore, setShowMore] = useState(false);

  const blogStyle = {
    padding: 10,
    border: '1px solid #ccc',
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }

  const bottomStyle = {
    display: showMore ? 'block' : 'none',
    width: '100%',
    marginTop: 10,
  }

  const topStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '30px',
  }

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
  }

  const handleLike = (e) => {
    e.preventDefault()

    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1,
    }
    updateBlog(blog.id, updatedBlog)
  }
  
  return (
    <div className="blog" style={blogStyle}>
      <div style={topStyle}>
        <span>{blog.title} - {blog.author}</span>
        <button style={buttonStyle} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Hide' : 'Show'}
        </button>
      </div>  
      <div style={bottomStyle}>
        <p><strong>URL:</strong> {blog.url}</p>
        <p><strong>Likes:</strong> {blog.likes} <button onClick={handleLike}>like</button></p>
        <p><strong>Added by:</strong> {blog.user ? blog.user.name : 'Unknown'}</p>
      </div>
    </div>
  )
}

export default Blog