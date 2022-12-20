import { useState, useReducer } from 'react';
import { data } from '../../data';
import Modal from './Modal';
// reducer
import { reducer } from './reducer';
import { ADD_ITEM, NO_VALUE, REMOVE_ITEM, CLOSE_MODAL } from './actions';

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
};

// useReducer est utile lorsqu'on a une appli plus complexe au niveau des states - permet d'avoir une meilleure structure
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const person = { name, id: new Date().getTime().toString() };
      dispatch({ type: ADD_ITEM, payload: person });
      setName('');
    } else {
      dispatch({ type: NO_VALUE });
    }
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>ajouter</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: REMOVE_ITEM, payload: id })}>
              supprimer
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
