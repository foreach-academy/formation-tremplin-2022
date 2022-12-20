import { ADD_ITEM, NO_VALUE, REMOVE_ITEM, CLOSE_MODAL } from './actions';

//* fonction reducer
// on préfère mettre cette fonction dans un fichier à part étant donnée quelle a plusieurs fonctionnalités
export const reducer = (state, action) => {
  // console.log(state, action);
  //! il faut toujours retourner un state

  if (action.type === ADD_ITEM) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item ajouté'
    };
  }

  if (action.type === NO_VALUE) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Veuillez entrer une valeur'
    };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item supprimé'
    };
  }

  throw new Error("Il n'y a pas d'actions correspondantes");
};
