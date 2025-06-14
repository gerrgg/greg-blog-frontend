import Blog from './Blog';

const BlogContainer = ({blogs}) => {
  return (
    <div>
      <h2>Blogs</h2>
      <div style={{ marginBottom: '1rem' }}>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogContainer;