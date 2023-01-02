import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page non trouvée</p>
      <Link to='/'>retour à l'accueil</Link>
    </section>
  );
};

export default Error;
