// https://randomuser.me/
const url = 'https://randomuser.me/api/';

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const {
      results: [data]
    } = await response.json();

    // destructure
    const { age } = data.dob;
    const {
      street: { number, name }
    } = data.location;

    return { age: age, street: number + ' ' + name };
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
