## Idée

[uidesigndaily](https://uidesigndaily.com/posts/sketch-accordion-website-day-1175)

![](./idea.png)

## React Icons

[react icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons --save
```

```javascript
import { FaHome } from 'react-icons/fa';
const Component = () => {
  return <FaHome className='icon'></FaHome>;
};
```

## Structure du Projet

- App.jsx
- data.js
- Question.jsx

## Structure JSX

- **App.jsx**

  - main
    - div.container
      - h3
      - section.info
        - data.map et retourner `<Question />`

- **Question.jsx**

  - article.question
    - header
      - h4
      - button.btn
    - p

## Logique

- Dans `<App />` créer un state `questionID` égal à `0`.
- Créer une fonction `handleClick` qui change le state `questionID` égal à l'id de la question sur laquelle on clique
