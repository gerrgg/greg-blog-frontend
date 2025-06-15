import React, { useState } from 'react'

const Blog = ({ blog, updateBlog, deleteBlog, user }) => {
  const [showMore, setShowMore] = useState(false);

  const blogStyle = {
    padding: 10,
    border: '1px solid #ccc',
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#333',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: 'white',
  }

  const bottomStyle = {
    display: showMore ? 'block' : 'none',
    width: '100%',
    marginTop: 10,
  }

  const topStyle = {
    display: 'flex',
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
    marginLeft: 'auto',
  }

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  }

  const likeStyle = {
    fontWeight: 'bold',
    color: '#fff',
    marginRight: '10px',  
    fontSize: '16px',
    width: '30px',
    minWidth: '30px',
  }

  const likeButtonStyle = {
    padding: '5px 10px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginLeft: '10px',
  }

  const handleLike = (e) => {
    e.preventDefault()

    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1,
    }
    updateBlog(blog.id, updatedBlog)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      deleteBlog(blog.id)
    }
  }
  
  return (
    <div className="blog" style={blogStyle}>
      <div style={topStyle}>
        <span style={likeStyle}>{blog.likes}</span>
        <span>{blog.title} - {blog.author}</span>
        <button style={buttonStyle} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Hide' : 'Show'}
        </button>
      </div>  
      <div style={bottomStyle}>
        <p><strong>URL:</strong> {blog.url}</p>
        <p><strong>Likes:</strong> {blog.likes} <button style={likeButtonStyle} onClick={handleLike}>❤️</button></p>
        <p><strong>Added by:</strong> {blog.user ? blog.user.name : 'Unknown'}</p>
        {
          blog.user?.username === user?.username ? 
            <button 
              style={deleteButtonStyle} 
              onClick={handleDelete}
            >
              delete
            </button>
            : null
        }
      </div>
    </div>
  )
}

export default Blog