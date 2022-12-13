# Grocery Bud Project

## Structure du projet

- Alert.jsx
- App.jsx
- List.jsx
- main.jsx

## Strctures JSX

- **App.jsx**

  ```js
  const getLocalStorage = () => {};
  const handleSubmit = (e) => {};
  const showAlert = (show = false, type = '', msg = '') => {};
  const clearList = () => {};
  const removeItem = (id) => {};
  const editItem = (id) => {};
  ```

  - section.section-center
    - form.grocery-form
      - `<Alert />`
      - h3 (grocery bud)
      - div.form-control
        - input.grocery
        - btn.submit-btn
    - div.grocery-container
      - `<List />`
      - btn.clear-btn

* **List.jsx**
  - div.grocery-list
    - items.map() retourne
      - article.grocery-item
        - p.title (title)
        - div.btn-container
          - btn.edit-btn
          - btn.delete-btn

- **Alert.jsx**
  - p.alert.alert-success
