import { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    setIsEditing(false);
    setName('');
    setEditId(null);
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'veuillez entrer une valeur');
    } else if (!isEditing) {
      const newItem = { title: name, id: new Date().getTime().toString() };
      setList([...list, newItem]);
      showAlert(true, 'success', 'item ajouté');
    } else {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }

          return item;
        })
      );
      showAlert(true, 'success', "l'item a bien été modifié");
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, 'danger', 'la liste a bien été vidée');
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, 'danger', "l'item a bien été supprimé");
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    const specificItem = list.find((item) => item.id === id);
    setName(specificItem.title);
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h2>liste de courses</h2>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn'>
            {isEditing ? 'modifier' : 'ajouter'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            vider la liste
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
