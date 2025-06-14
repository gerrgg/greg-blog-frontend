import Blog from './Blog';
import React from 'react';

const BlogContainer = ({blogs, updateBlog, deleteBlog, user}) => {
  const [sort, setSort] = React.useState('latest');

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sort === 'latest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort === 'mostLikes') {
      return b.likes - a.likes;
    } else if (sort === 'leastLikes') {
      return a.likes - b.likes;
    }
    return 0;
  });

  const b = sortedBlogs.map(blog => ({
    ...blog,
    createdAt: new Date(blog.createdAt).toLocaleDateString(),
  }));
  return (
    <div>
      <h2>Blogs</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px' }}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="mostLikes">Most Likes</option>
          <option value="leastLikes">Least Likes</option>
        </select>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        {b.map((blog) => (
          <Blog key={blog.id} blog={blog} user={user} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        ))}
      </div>
    </div>
  );
}

export default BlogContainer;