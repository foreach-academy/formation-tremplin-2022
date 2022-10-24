# Exercices

## 01 - Inverser une chaîne de caractères

Écrire une fonction `reverseString` qui retourne son entrée, inversée

```js
reverseString('salut toi'); // retourne 'iot tulas'
reverseString('123! abc!'); // retourne '!cba !321'
reverseString(''); // retourne ''
```

### Indice

- Les chaînes en JavaScript ne peuvent pas être inversées directement, on doit donc d'abord les diviser en quelque chose d'autre. Effectuer l'inversion, puis rejoignez-les en une chaîne.

## 02 - Suprimer dans un tableau

Implémenter une fonction `removeFromArray` qui prend un tableau et un autre argument puis supprime l'autre argument de ce tableau :

```js
removeFromArray([1, 2, 3, 4], 3); // doit supprimer 3 et retourner [1,2,4]
removeFromArray([1, 2, 3, 4], 'tacos'); // retourne [1, 2, 3, 4]
removeFromArray((['hey', 2, 3, 'ho'], 'hey')); // retourne[2, 3,'ho']
```

## 03 - Somme

Implémenter une fonction qui prend 2 entiers et renvoie la somme de chaque nombre entre eux (inclus) :

```js
sumAll(1, 4); // retourne la  somme de 1 + 2 + 3 + 4 qui est 10
sumAll(123, 1); // retourne 7626
sumAll(-10, 4); //'ERREUR'
sumAll(10, '90'); //'ERREUR'
sumAll(10, [90, 1]); //'ERREUR'
```

## 04 - Convertion de températures

Écrire deux fonctions qui convertissent les températures de Fahrenheit en Celsius, et vice versa :

```js
ftoc(32); // fahrenheit en celsius, doit retourner 0

ctof(0); // celsius to fahrenheit, doit retourner 32
```

On veut que la température du résultat soit arrondie à une décimale : c'est-à-dire que ftoc(100) doit renvoyer 37,8 et non 37,77777777777778.

### Indices

- Voir la méthode [toFixed()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

- On peut trouver la formule adéquate sur [Wikipedia](https://fr.wikipedia.org/wiki/Degr%C3%A9_Fahrenheit#:~:text=0%20%C2%B0F%20.-,Conversion%20en%20degr%C3%A9s%20Celsius,%C2%B0F%20%3D%2010%20%C2%B0C%20.)

## 05 - Calculatrice

L'objectif de cet exercice est de créer une calculatrice qui effectue les opérations suivantes :

additionner, soustraire, obtenir la somme (des éléments d'un tableau), multiplier, obtenir la puissance et trouver la factorielle

Pour ce faire, écrire individuellement chaque fonction

## 06 - Récupérer les titres

On vous donne un tableau d'objets qui représentent des livres avec un auteur et un titre qui ressemble à ceci :

```js
const books = [
  {
    title: 'Livre',
    author: 'Nom'
  },
  {
    title: 'Livre2',
    author: 'Nom2'
  }
];
```

Le but consiste à écrire une fonction qui prend le tableau et renvoie un tableau de titres :

```js
getTheTitles(books); // ['Livre','Livre2']
```

### Indice

- On doit utiliser une méthode javascript intégrée pour faire la plupart du travail à notre place

## 07 - Trouver le plus vieux

Utiliser un tableau d'objets représentant des personnes avec une année de naissance et de décès et retourne la personne. Afficher son nom.

```js
const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
];

// findTheOldest(people) retourne { name: 'Carly',yearOfBirth: 1066 }
```

### Indices

- cela peut être fait avec quelques méthodes de tableaux chaînés ou en utilisant reduce.

- Si la personne n'a pas de date de décès, utiliser la date d'aurjourd'hui.
