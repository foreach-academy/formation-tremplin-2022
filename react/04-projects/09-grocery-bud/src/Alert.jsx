import { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(id);
  }, [removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
