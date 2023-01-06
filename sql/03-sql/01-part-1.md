# Apprendre le SQL

Ajouter dans les variables d'environnement PATH les chemins suivants (à modifier selonvotre système) :

- C:\Program Files\PostgreSQL\14\bin
- C:\Program Files\PostgreSQL\14\lib

Nous commençons avec deux fichers `.csv` students et courses.

1. Se connecter à PostgreSQL
2. Afficher la liste des BDDs avec `\l`

## Créer une BDD `students`

- Se connecter à la BDD avec `\c students`

## Créer une table `students`

## Créer une table `majors`

## Créer une table `courses`

## Créer une table `majors_courses`

- Afficher les tables avec `\d`

## Créer les colonnes

### Table `students`

1. Créer une colonne `student_id` de type `SERIAL` et en faire une `PRIMARY KEY`
2. Ajouter une colonne `first_name` de type `VARCHAR(50)` et qui a une contrainte `NOT NULL`
3. Ajouter une colonne `last_name` de type `VARCHAR(50)` et qui a une contrainte `NOT NULL`
4. Ajouter une colonne major_id de type `INT` (qui sera clef étrangère)
5. Ajouter une colonne gpa de type `NUMERIC(2, 1)`
6. Afficher ledétail de `students`avec `\d students`

### Table `majors`

1. Créer une colonne `major_id` de type `SERIAL` et en faire une `PRIMARY KEY`
2. Ajouter une colonne `major` de type `VARCHAR(50)` et qui a une contrainte `NOT NULL`
3. Définir la colonne `major_id` de la table `students` en tant que clef étrangère qui référence `major_id`dans la table `majors`

<details>
  <summary>Solution</summary>

```SQL
ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);
```

</details>
<br />

### Table `courses`

1. Créer une colonne `course_id` de type `SERIAL` et qui est une `PRIMARY KEY`
2. Ajouter une colonne `course` de type `VARCHAR(100)` et `NOT NULL`

### Table `majors_courses`

1. Créer une colonne `major_id` de type `INT`
2. Définir la colonne `major_id` en tant que clef étrangère qui référence `major_id`dans la table `majors`

<details>
  <summary>Solution</summary>

```SQL
ALTER TABLE majors_courses ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);
```

</details>
<br />

3. Ajouter une colonne `course_id`de type `INT` 4. Définir la colonne `course_id` en tant que clef étrangère qui référence `course_id`dans la table `courses`

<details>
  <summary>Solution</summary>

```SQL
ALTER TABLE majors_courses ADD FOREIGN KEY(course_id) REFERENCES courses(course_id);
```

</details>
<br />

Il manque une chose. Cette table n'a pas de clef primaire. Les données de `courses.csv` iront dans ce tableau. Une seule spécialisation (`major`) y sera plusieurs fois, et même avec un cours (`course`). Ainsi, aucun d'entre eux ne peut être une clef primaire. Mais il n'y aura jamais une ligne avec les deux mêmes valeurs qu'une autre ligne. Ainsi, les deux colonnes ensemble sont uniques. Nous pouvons créer une clef primaire composite qui utilise plusieurs colonnes comme clé unique.

5. Créer une clef primaire composite

<details>
  <summary>Solution</summary>

```SQL
ALTER TABLE majors_courses ADD PRIMARY KEY(major_id, course_id);
```

</details>
<br />

### Lignes dans `majors`

1. Insérer une ligne avec la première discipline(`major`) dans `courses.csv`

<details>
  <summary>Solution</summary>

```SQL
INSERT INTO majors(major) VALUES('Database Administration');
```

</details>
<br />

2. Insérer le premier cours de `courses.csv`

<details>
  <summary>Solution</summary>

```SQL
INSERT INTO courses(course) VALUES('Data Structures and Algorithms');
```

</details>
<br />

3. Ajouter une ligne dans la table de jonction `majors_courses`

<details>
  <summary>Solution</summary>

```SQL
INSERT INTO majors_courses(major_id, course_id) VALUES(1,1);
```

</details>
<br />

4. Afficher le détail de `students` 5. Insérer le premier étudiant de `students.csv`

<details>
  <summary>Solution</summary>

```SQL
INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('Rhea', 'Kellems', 1, 2.5);
```

</details>
<br />

5. Afficher les données de `students`

<details>
  <summary>Solution</summary>

```SQL
SELECT * FROM  students;
```

</details>
<br />

### Ajouter les données dans `courses`, `majors` et `majors_courses`

Nous avons ajouté une ligne dans chaque tableau. Il peut être judicieux de revoir les données et la structure de la base de données. Ajouter le reste des informations une par une serait fastidieux. Nous allons créer un script pour le faire pour nous. Je recommande de "diviser" le terminal pour cette partie.

1. Créer un fichier `insert_data.sh` dans à la racin du dossier du projet
2. Dans le terminal utiliser la command `chmod` avec le flag `+x` pour donner des permission d'exécution

```sh
chmod +x insert_data.sh
```

3. Dans le fichier `insert_data.sh` ajouter un "shebang"(en-tête) `#!` pour préciser que nous faisons un script `bash`

```sh
#!/bin/bash
```

4. Ajouter le commentaire suivant :

```sh
# Script pour insérer les données de courses.csv et students.csv dans la base de données students
```

5. Dans `insert_data.sh` ajouter la commande `cat courses.csv` pour écrire le contenu du ficher `courses.csv` car nous aurons besoin de `major_id`
6. Éxécuter le script pour voir si le contenu du fichier s'affiche das le terminal

```
./insert_data.sh
```

Ça a marché. Au lieu d'imprimer le contenu, nous pouvons diriger cette sortie dans une boucle while afin de parcourir les lignes une par une. Ça ressemble à ça :

```sh
cat courses.csv | while read MAJOR COURSE
do
  <STATEMENTS>
done
```

Chaque nouvelle ligne sera lue dans les variables, `MAJOR` et `COURSE`

7. Ajouter cette boucle à notre commande `cat` et utiliser `echo` pour afficher la variable `Major`

<details>
<summary>Solution</summary>

```sh
cat courses.csv | while read MAJOR COURSE
do
  echo $MAJOR
done
```

</details>
<br />

Ça boucle, mais la variable `MAJOR` n'est définie que sur le premier mot. Il y a une variable `IFS` par défaut dans bash. IFS signifie "Internal Field Separator".

8. Utiliser la commande `declare -p IFS` dans le terminal

Cette variable est utilisée pour déterminer les limites des mots. Il s'agit par défaut d'espaces, de tabulations et de nouvelles lignes. C'est pourquoi la variable `MAJOR` n'a été définie que sur le premier mot de chaque ligne des données

9. Entre les commandes `while` et `read`, définir l'`IFS` à une virgule comme ça : `IFS=","` dans le fichier `insert_data.sh`

10. Éxécuter le script pour voir si ça marche

11. Afficher la variable `Course`sur la même ligne

<details>
  <summary>Solution</summary>

```sh
cat courses.csv | while read MAJOR COURSE
do
  echo $MAJOR $COURSE
done
```

</details>
<br />

12. Supprimer la ligne du `echo`

Cela aide à planifier ce que nous voulons qu'il se passe. Pour chaque boucle, nous voudrons ajouter la discipline majeure à la base de données si elle n'y est pas encore. Idem pour le cours. Ajoutons ensuite une ligne à la table `majors_courses`.

13. Ajouter ces commentaires sur une seule ligne dans votre boucle dans cet ordre : `get major_id`, `if not found`, `insert major`, `get new major_id`, `get course_id`, `if not found`, `insert course`, `get new course_id`, `insert into majors_courses`

<details>
  <summary>Solution</summary>

```sh
cat courses.csv | while read MAJOR COURSE
do
  # get major_id

  # if not found

  # insert major

  # get new major_id

  # get course_id

  # if not found

  # insert course

  # get new course_id

  # insert into majors_courses
done
```

</details>

14. au-dessus de la boucle ajouter la variable `PSQL="psql -X --username=postgress --dbname=students --no-align --tuples-only -c"`

Cela nous permettra d'interroger notre base de données à partir de notre script. Les parties importantes sont `username`, `dbname` et le flag `-c` qui permet d'exécuter une seule commande et de quitter. Le reste des flags est pour le formatage du texte.

15. Sous notre premier commentaire `if not found`, ajouter une condition `if` qui vérifie si la variable `MAJOR_ID` est vide. Nous pouvons le faire avec ce test : `[[ -z $MAJOR_ID ]]`. Placez les deux commentaires suivants dans la zone des instructions du `if`

```sh
if [[ -z $MAJOR_ID ]]
then
  # insert major

  # get new major_id

fi
```

La boucle ira dans le bloc `if` chaque fois qu'une discipline majeure n'est pas trouvée. Ici, nous voudrons insérer la majeure, puis obtenir le nouvel id

16. En-dessous du commentaire `insert major` créer une variable `INSERT_MAJOR_RESULT`. Définir sa valeur ç que requête qui insère la majeure courante dans la table `majors`. Ne pas oublier d'utiliser les guillemets simples autour de la variable

```sh
INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
```

17. Faire une copie de `courses.csv` pour faire des tests

```sh
cp courses.csv courses_test.csv
```

18. Garder les cinq premières lignes dans `courses_test.csv`
19. changer la commande `cat`pour boucler dans `courses_test.csv`
20. Éxécuter le script
21. Supprimer la ligne `echo $MAJOR_ID`
22. Dans le terminal `psql` utiliser une requête `SELECT` pour voir la table `major`

Le script à insérer le terme `major` qui est le titre de notre colonne dans le fichier `majors.csv`. Nous allons surpprimer toutes les lignes de notre table

23. Tronquer la table en utilisant `TRUNCATE majors` dans le terminal `psql`

Cela dit que vous "ne pouvez pas tronquer une table référencée dans une contrainte de clef étrangère". Les tables `students` et `majors_courses` utilisent `major_id` de `majors` comme clef étrangère. Donc, si nous souhaitons supprimer les données de `majors`, nous devons supprimer les données de ces tables en même temps.

24. Utiliser `TRUNCATE`pour supprimer les données de ces tables. Séparer les tables par une virgule

```sql
TRUNCATE majors, students, majors_courses;
```

Il reste une entrée (donnée) dnas la table `courses`

25. Utiliser `TRUNCATE`pour supprimer toutes les données de `courses`. Il faut tronquer toutes les tables utilisant une colonne en tant que clef étrangère en même temps

<details>
  <summary>Solution</summary>

```sql
TRUNCATE courses, majors_courses;
```

</details>
<br />

26. Relancer le script et afficher toute les données de la table `majors`

Nous ne voulons pas ajouter la première ligne du fichier CSV à la base de données car ce ne sont que des titres

27. Ajouter une condition `if` au début de notre boucle pour vérifier si `MAJOR != major`

<details>
  <summary>Solution</summary>

```sh
do
  if [[ $MAJOR != major ]]
  then
    # get major_id
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")

    # if not found
    if [[ -z $MAJOR_ID ]]
    then
      # insert major
      INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
      echo $INSERT_MAJOR_RESULT

      # get new major_id

    fi

    # get course_id

    # if not found

    # insert course

    # get new course_id

    # insert into majors_courses
  fi
done
```

</details>
<br />

28. Tronquer la table `majors`

<details>
  <summary>Solution</summary>

```sql
TRUNCATE majors, majors_courses;
```

</details>
<br />

29. Éxécuter le script pour s'asssurer qu'il n'ajoute plus la première ligne 30. Afficher les données de `majors`

Nous avons trois discplines majeurs uniques dans notre test. Les trois ont été ajoutés dans notre BDD

30. Supprimer la ligne `echo $INSERT_MAJOR_RESULT`

Nous voulons un message lorsque quelque chose est inséré afin que le script soit plus informatif

31. En-dessous de la variable `INSERT_MAJOR_RESULT` ajouter une condition `if`qui vérifie si la variable est égale à `"INSERT 0 1"`, ce qui affichera un message `Inséré dans majors, $MAJOR` avec la commande `echo`

<details>
  <summary>Solution</summary>

```sh
if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
      then
          echo "Inserted into majors, $MAJOR"
      fi
```

</details>
<br />

32. Tronquer la table `majors`

<details>
  <summary>Solution</summary>

```sql
TRUNCATE majors CASACDE;
```

</details>
<br />

33. Vérifier que la table est vide est éxécuté le script

34. En-dessous du commentaire `get new major_id` définir `MAJOR_ID`à une requête que récupère le nouveau `major_id`depuis la BDD

<details>
  <summary>Solution</summary>

```sh
MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
```

</details>
<br />

34. Faire pareil avec `COURSE`

<details>
  <summary>Solution</summary>

```sh
cat courses_test.csv | while IFS="," read MAJOR COURSE
do
  if [[ $MAJOR != "major" ]]
  then
    # get major_id
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")

    # if not found
    if [[ -z $MAJOR_ID ]]
    then
      # insert major
      INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
      if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
      then
        echo Inserted into majors, $MAJOR
      fi

      # get new major_id
      MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
    fi

    # get course_id
    COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")

    # if not found
    if [[ -z $COURSE_ID ]]
    then
      # insert course
      INSERT_COURSE_RESULT=$($PSQL "INSERT INTO courses(course) VALUES('$COURSE')")

      if [[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]
      then
        echo Inserted into courses, $COURSE
      fi
      # get new course_id
      COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")
    fi

    # insert into majors_courses
  fi
done

```

</details>
<br />

Au lieu de supprimer manuellement les données chaque fois que nous voulons exécuter le script, ajoutons la commande pour le faire pour nous

35. En-dessous de la variable `PSQL` utiliser `echo` pour requérir la BDD. Dans la requête, tronquer les tables dans cet ordre : `students`, `majors`, `courses`, `majors_courses`

<details>
  <summary>Solution</summary>

```sh
echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")
```

</details>
<br />

36. Éxécuter le script 38. Créer une variable `INSERT_MAJORS_COURSES_RESULT` et lui définir la requête permettant d'insérer `MAJOR_ID` et `COURSE_ID` dans la table `majors_courses`.

<details>
  <summary>Solution</summary>

```sh
INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)")
```

</details>
<br />

37. En-dessous de la variable que nous venons de créer, ajotuer une condition si elle est égale à `"INSERT 0 1"` comme les autres. Utiliser `echo`pour afficher `Inséré dans majors_courses, $MAJOR : $COURSE` 40. Éxécuter le script 41. Afficher les données de la table `majors` 42. Afficher les données de la table `courses` 43. Afficher les données de la table `majors_courses`

### Remplir la table `students`

1. Faire un fichier en copiant students.csv dans un fichier nommé `students_test.csv`

```sh
cp students.csv students_test.csv
```

2. Garder les cinq premières lignes de `students_test.csv`
3. Dans `insert_data.sh`, en-dessous de la boucle, utiliser la commande `cat` et parcourir `students_test.csv` et `read`pour créer les variables `FRIST`, `LAST`, `MAJOR` et `GPA`. Utiliser la commande `echo`pour afficher `FIRST`

<details>
  <summary>Solution</summary>

```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  echo $FIRST
done
```

</details>
<br />

4. Éxécuter le script `insert_data.sh`

Cela affiche encore le titre (la première ligne)

5. Supprimer la ligne `echo $FIRST`
6. Faire une condtion qui vérifie si `FIRST`est différent de `"first_name"`

<details>
  <summary>Solution</summary>

```sh
if [[ $FIRST != "first_name" ]]
then
fi
```

</details>
<br />

Toutes les colonnes du fichier CSV peuvent être insérées directement dans la base de données sauf la majeure. Nous devons récupérer à nouveau le `major_id` pour cela. Il y a aussi des valeurs nulles, nous devrons donc utiliser `null` si le `major_id` n'est pas trouvé

7. Ajouter quatre commentaires dans la boucle : `get major_id`, `if not found`, `set to null`, and` insert student` dans cet ordre
8. Sous le commentaire `get major_id`, définir la variable `MAJOR_ID` sur une requête qui obtient le `major_id` pour la majeure actuelle des étudiants.

<details>
  <summary>Solution</summary>

```sh
MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
```

</details>
<br />

9. Sous le commentaire `if not found`ajouter une condition `if`qui vérifie si la variable est vide. Mettre le commentaire `set to null` dans ce bloc

<details>
  <summary>Solution</summary>

```sh
if [[ -z $MAJOR_ID ]]
    then
      # set to null
    fi
```

</details>
<br />

Lorsque nous allons insérer les données de l'étudiant, nous souhaitons utiliser le `MAJOR_ID` s'il est trouvé, ou `null` sinon

10. Sous `set to null`, définir `MAJOR_ID` à `null`

<details>
  <summary>Solution</summary>

```sh
if [[ -z $MAJOR_ID ]]
    then
      # set to null
      MAJOR_ID=null
    fi
```

</details>
<br />

11. Supprimer la ligne `echo $MAJOR_ID` 10. Afficher le détail de `students` pour voir quelle colonnes ajouter

```sh
\d students
```

12. Créer une variable `INSERT_STUDENT_RESULT` qui ajoute un étudiant dans la BDD. Ne pas oublier les guillemets simples pour les colonnes `VARCHAR`

<details>
  <summary>Solution</summary>

```sh
 INSERT_STUDENT_RESULT=$($PSQL "INSERT INTO  students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA)")
```

</details>
<br />

13. Sous la variable créée, ajouter une condition `if`qui vérifié si elle est égale à `"INSERT 0 1"` comme les autres. Si c'est le cas, utiliser `echo`pour afficher `Inserted into students, $FIRST $LAST`

<details>
  <summary>Solution</summary>

```sh
if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
    then
      echo "Inséré dans students, $FIRST $LAST"
    fi
```

</details>
<br />

14. Éxécuter le script 14. Afficher les données de `students` avec une requête `SELECT` 15. Changer les lignes `cat` pour utiliser les fichiers originaux 16. Éxécuter le script 17. Afficher les données de `students` 18. Afficher les données de `majors` 19. Afficher les données de `courses` 20. Afficher les données de `majors_courses` 21. Supprimer les fichiers `students_courses.csv` et `courses_test.csv` 22. Faire un dump de la BDD

```sh
pg_dump --clean --create --inserts --username=postgres students > students.sql
```
