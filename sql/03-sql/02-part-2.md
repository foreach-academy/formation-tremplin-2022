# SQL - part 2

[Documentation SQL](https://sql.sh/)

Si besoin d'importer la BDD, utiliser la commande `psql -U postgres -d students < students.sql` dans le terminal

## Réaliser un script pour voir les infos des étudiants

1. Créer un fichier `student_info.sh`

2. Donner à ce fichier des autorisation exécutables

<details>
  <summary>Solution</summary>

```sh
chmod +x student_info.sh
```

</details>
<br />

3. Ajouter un shebang au début du script

<details>
  <summary>Solution</summary>

```sh
#!/bin/bash
```

</details>

4. Sous le **shebang**, ajouter un commentaire `Info à propos de mes étudiants en informatique depuis la BDD students`

5. Dans le script, utiliser `echo` pour afficher `~~ Mes Étudiants en Informatique ~~`. Utiliser le flag `-e` pour ajouter une nouvelle ligne au début et à la fin du texte

```sh
echo -e "\n~~ Mes Étudiants en Informatique ~~\n"
```

5. Exécuter le script `student_info.sh`

6. Dans le script, créer une variable `PSQL` pour faire une requête de connexion à la BDD

```sh
export PGPASSWORD=admin
PSQL="psql -X -U postgres -d students --no-align --tuples-only -c"
```

7. Sous la variable PSQL, utiliser `echo`pour afficher `Prénom, Nom et GPA des étudiants avec un GPA de 4.0:`

```sh
echo -e "\nPrénom, nom et GPA des étudiants avec un GPA de 4.0 :"
```

8. Utiliser echo pour afficher le résultat de cette requête

<details>
    <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0")"
```

</details>
<br />

9. Ajouter un autre `echo`qui affiche `Tous les cours dont la première lettre est avant le 'D' dans l'alphabet`

<details>
  <summary>Solution</summary>

```sh
echo -e "\nTous les cours dont la première lettre est avant le 'D' dans l'alphabet :"
```

</details>
<br />

10. Utiliser echo pour afficher le résultat de cette requête

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT course from courses WHERE course < 'D'")"
```

</details>
<br />

11. Exécuter le script

12. Ajouter un autre phrase qui affiche `Prénom, nom et GPA des étudiants dont le nom commence par un 'R' ou sont après, et ont un GPA supérieur à 3.8 ou inférieur à 2.0 :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo -e "\nPrénom, nom et GPA des étudiants dont le nom commence par un 'R' ou après et ont un GPA supérieur à 3.8 ou inférieur à 2.0"
```

</details>
<br />

13. Utiliser echo pour afficher le résultat de cette requête et exécuter le script

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"
```

</details>
<br />

14. Ajouter un autre phrase qui affiche `Nom des étudiants dont le nom contient "sa" insensible à la casse ou un "r" comme avant dernière lettre :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT last_name FROM students WHERE last_name ILIKE '%sa%' OR last_name LIKE '%r_';")"
```

</details>
<br />

15. Ajouter un autre phrase qui affiche `Prénom, nom et GPA des étudiants qui n'ont pas sélectionnés une majeure et dont le prénom commence par un 'D' ou dont le GPA est supérieur à 3.0 :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)")"
```

</details>
<br />

16. Ajouter un autre phrase qui affiche `Noms des cinq premiers cours, dans l'ordre alphabétique inversé, qui ont un 'e' en seconde lettre or qui se terminent par un 's' :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"
```

</details>
<br />

17. Ajouter un autre phrase qui affiche `GPA moyen de tous les étudiants arrondi à deux décimales :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT ROUND(AVG(gpa),2) from students")"
```

</details>
<br />

18. Ajouter un autre phrase qui affiche `ID de la majeure, nombre total d'étudiants dans une colonne nommée "number_of_students" et GPA moyen arrondi à deux décimales dans une colonne nommée "average_gpa", pour chaque ID de majeure dans le tableau des étudiants ayant un nombre d'étudiants supérieur à 1 :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT major_id, COUNT(student_id) AS number_of_students, ROUND(AVG(gpa), 2) AS average_gpa FROM students GROUP BY(major_id) HAVING COUNT(*) > 1")"
```

</details>
<br />

19. Ajouter un autre phrase qui affiche `Liste des majeures, par ordre alphabétique, qu'aucun étudiant ne suit ou a un étudiant dont le prénom contient un "ma" insensible à la casse :`

Les table `majors` et `students` sont liées à la clef étrangère `major_id`. Si nous voulons voir le nom d'une majeure qu'un étudiant suit, nous devons `JOIN` les deux tables en une seule

Exemple pour voir le nom de la majeur qu'un étudiant suit :

```sql
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;
```

Ça affiche toutes les colonnes des deux tables, les deux colonnes `major_id` sont les mêmes dans chaque ligne pour celles qui l'ont. Nous pouvons voir qu'il y a des étudiants sans majeure et d'autres sans aucun étudiant. Le `FULL JOIN` que nous avons utilisé inclura toutes les lignes des deux tables, qu'elles aient ou non une ligne utilisant cette clef étrangère dans l'autre. À partir de là, nouspouvons utiliser l'une des méthodes précédentes pour affiner, grouper, ordonner, etc. Utilisons un `LEFT JOIN` pour joindre les deux mêmes tables de la même manière.

```sql
SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;
```

Il y a quelques lignes de moins que la dernière requête. Dans le `LEFT JOIN` que nous avons utilisé, la table des `students` était la table de gauche puisqu'elle se trouvait du côté gauche du `JOIN`. `majors` était la bonne table. Un `LEFT JOIN `obtient toutes les lignes de la table de gauche, mais uniquement les lignes de la table de droite qui sont liées à celle de gauche. En regardant les données, nous pouvons voir que chaque étudiant a été renvoyé, mais pas les majeures sans étudiants. Joignons les deux mêmes tables avec un `RIGHT JOIN` cette fois.

```sql
SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;
```

La jointure de droite affichait toutes les lignes de la table de droite (`majors`), mais uniquement les lignes de la table de gauche (`students`) s'ils avaient une majeure. Il y a un autre type que vous devriez connaître. Joignez les deux tables avec un `INNER JOIN`.

```sql
SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;
```

L'`INNER JOIN` n'a renvoyé les étudiants que s'ils ont une majeure et des majeures qui ont un étudiant. En d'autres termes, il ne renvoyait que des lignes si elles avaient une valeur dans la colonne de la clef étrangère (`major_id`) de la table opposée. Vous devriez maintenant en savoir un peu plus sur les quatre principaux types de jointures. Essayons d'utiliser un `LEFT JOIN ` pour afficher toutes les majeures, mais uniquement les étudiants qui ont une majeure.

<details>
  <summary>Solution</summary>

```sql
SELECT * FROM majors LEFT JOIN students ON majors.major_id = students.major_id;
```

</details>
<br />

20. Utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT major FROM majors FULL JOIN students ON majors.major_id=students.major_id WHERE student_id IS NULL OR first_name ILIKE '%ma%' ORDER BY major")";
```

</details>
<br />

21. Ajouter un autre phrase qui affiche `Liste des cours uniques, par ordre alphabétique inversé, qu'aucun étudiant ou 'Obie Hilpert' ne suit :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

Il existe un mot-clef de raccourci, `USING` pour joindre des tables si la colonne de la clef étrangère porte le même nom dans les deux tables.

On peut aussi utliser `AS` pour renommer le nom des tables

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT DISTINCT(c.course) FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses AS c USING(course_id) WHERE student_id IS NULL OR (first_name='Obie' AND last_name='Hilpert') ORDER BY course DESC")"
```

</details>
<br />

22. Ajouter un autre phrase qui affiche `Liste des cours, par ordre alphabétique, avec un seul étudiant inscrit :` et utiliser echo pour afficher le résultat. Exéctuer le script pour vérifier

<details>
  <summary>Solution</summary>

```sh
echo "$($PSQL "SELECT course FROM students INNER JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course HAVING COUNT(student_id) = 1 ORDER BY course")"
```

</details>
