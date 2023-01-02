import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <h2>À propos</h2>
      <Link to='/' className='btn'>
        retour à l'accueil
      </Link>
    </section>
  );
};

export default About;
