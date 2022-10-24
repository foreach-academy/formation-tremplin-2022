## Variables #1

1. créer les variables "firstName" et "lastName"
2. assigner vos valeurs
3. créer une variable "address" et lui assigner la valeur "rue principale"
4. réassigner la valeur "première rue" à address
5. afficher toutes les valeurs dans la console

## Concaténation de Strings #2

1. créer les variables "street" et "country"
2. assigner vos valeurs
3. créer une variable "fullMailingAddress" et assigner le résultat de "street + country"
4. penser à l'espace
5. afficher "fullMailingAddress" dans la console

## Nombres #3

1. créer les variables "score1", "score2", "score3" et assigner des valeurs (0-100)
2. calculer le score total, la moyenne et les assigner a des variables
3. afficher le total et la moyenne

4. créer la variable "plates" et lui assigner 20
5. créer la variable "people" et lui assigner 7
6. caculer le nombre de plats restants (si on répartit les plats pour chaque personne) et l'assigner à une variable
7. ajouter un aux plats restants
8. créer une variable message et afficher 'Il y a (la valeur va ici) plats disponibles' - utiliser une concaténation de strings
9. afficher la variable message

## Tableaux #4

1. créer une variable "fruits" et stocker des valeurs de fruits
2. mettre un nombre (au hasard) pour le dernier élément
3. assigner le premier fruit du tableau à une variable
4. réassigner le dernier élément du tableau avec un nouveau fruit
5. afficher la variable du premier fruit et le tableau complet

## Fonctions #5

1. créer une fonction "calculateTotal"
2. ajouter deux paramètres : subTotal et taxt
3. retourner la somme des paramètres

4. créer 3 variables "order1", "order2", "order3"
5. appeler calculateTotal, lui passer des valeurs et assigner les résultats à chaque variables order
6. afficher les 3 variables orders
7. refactoriser "calculateTotal" à une expression de fonction

## Objets #6

1. créer un objet "car"
2. ajouter les clefs/propriétés make, model, year, colors (array), hybrid (boolean)
3. ajouter deux méthodes (drive et stop)
4. dans les fonction afficher du texte au hasard
5. afficher make
6. afficher la première couleur
7. invoquer les deux méthodes

## Conditionnel #7

1. créer deux objets "person1" et "person2"
2. ajouter les clefs name, age (15-25), status ("résident", "touriste")

3. mettre en place la condition où l'âge doit être supérieur ou égal à 18 et le status égal à "résident"
4. tester avec les deux objets

## Strings #8

1. créer une fonction fullName
2. accepter deux paramètres "firstName" et "lastName"
3. les concaténer et retourner le résultat en majuscule
4. invoquer fullName et lui passer des valeurs
5. afficher le résultat
6. invoquer fullName en changant l'ordre des arguments
7. refactoriser les paramètres en un objet

## Méthodes sur les tableaux #9

### Créer un tableau Students

1. faire un tableau students avec 5 students
   {
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math'
   },

### utiliser plusieurs fichiers

- plus facile pour gérer le code (fichier, projet)
- l'ordre à son importance
- autres façons d'arriver au même résultat (modules ES6, fetch BDD)

#### updatedStudents

1. ajouter la propriété role:'student' à chaque objet avec la méthode map
2. l'assigner à la variable 'updatedStudents et l'afficher

#### scores les plus grands

1. filtrer le tableau et retourner seulement les personnes qui ont un score >= 80
2. l'assigner à la variable 'highScores' et l'afficher

#### id spécifique

1. trouver un id spécifique dans le tableau
2. l'assigner à la variable 'specificId' et l'afficher

#### score moyen

1. additionner tous les student.score avec la méthode reduce
2. diviser par la taille du tableau students
3. assigner à la variable 'averagescore' et l'afficher

#### sondage

1. lister les sujets favoris avec reduce
   {
   english: 1,
   history: 1,
   math: 3
   }
2. assigner à la variable survey et l'afficher
