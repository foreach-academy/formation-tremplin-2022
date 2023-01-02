import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return;
    setUser({ name });
    navigate('/dashboard');
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>connexion</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            nom d'utilisateur
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            mot de passe
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          se connecter
        </button>
      </form>
    </section>
  );
};

export default Login;
