import { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import blogService from "./services/blogs";
import loginService from "./services/login";
import NotificationContainer from "./components/NotificationContainer";
import { notify } from './components/notificationBus';
import Togglable from "./components/Togglable";
import BlogContainer from "./components/BlogContainer";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const blogFormRef = useRef();

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const createBlog = async (newBlog) => {
    try {
      blogFormRef.current.toggleVisibility();
      const createdBlog = await blogService.create(newBlog);
      setBlogs(blogs.concat(createdBlog));
    } catch (exception) {
      console.error("Error creating blog", exception);
      alert("Failed to create blog");
    }
  };

  const updateBlog = async (id, updatedBlog) => {
    try {
      const updated = await blogService.update(id, updatedBlog)
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)

      notify({ type: 'success', message: 'Blog updated successfully!' });
    } catch (exception) {
      console.error("Error updating blog", exception);
      notify({ type: 'error', message: 'Failed to update blog' });
    }
  }

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      notify({ type: 'success', message: 'Logged in successfully!' });
    } catch (exception) {
      const response = exception.response?.data || exception;
      notify({ type: 'error', message: response.error || 'Login failed' });
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser");
    setUser(null);
    blogService.setToken(null);
    notify({ type: 'success', message: 'Logged out successfully!' });
  };

  return (
    <div>
      <NotificationContainer />
      <h1>GREGORY BASTIANELLI</h1>
      {user ? (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <Togglable buttonLabel="Login">
          <LoginForm handleLogin={handleLogin} />
        </Togglable>
      )}
      <BlogContainer blogs={blogs} updateBlog={updateBlog} />
      {user && (
        <Togglable buttonLabel="New Blog" ref={blogFormRef}>
          <h2>Create New Blog</h2>
          <BlogForm createBlog={createBlog} />
        </Togglable>
      )}
    </div>
  );
};

export default App;
