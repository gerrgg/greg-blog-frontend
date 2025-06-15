import LoginForm from "./LoginForm";
import Togglable from "./Togglable";

const Header = ({user, handleLogin, handleLogout}) => {

  const headerStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const logoStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 auto',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    gap: '5px',
    width: '250px',
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

  return (
    <header className="bg-blue-500 text-white p-4" style={headerStyle}>
      <h1 style={logoStyle}>Greg Blog</h1>
      {user ? (
        <div style={formStyle}>
          <p>{user.name} logged in</p>
          <button style={buttonStyle} onClick={handleLogout}>logout</button>
        </div>
      ) : (
          <LoginForm handleLogin={handleLogin} />
      )}
    </header>
  );
}

export default Header;