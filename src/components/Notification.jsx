const Notification = ({ message, isError = true }) => {
  if (message === null) {
    return null;
  }

  const errorStyles = {
    color: "red",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  const successStyles = {
    color: "green",
    backgroundColor: "#d4edda",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  const styles = isError ? errorStyles : successStyles;

  return <div style={styles}>{message}</div>;
};

export default Notification;
