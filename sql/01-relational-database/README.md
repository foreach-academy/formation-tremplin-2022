# Base de Données Relationnelles

[Télécharger PostgreSQL](https://www.postgresql.org/download/)

_Décocher l'éxécution de Stack Builder à la dernière étape_

**NB : notes sur la console Windows et psql**

La console Windows est par défaut dans un encodage compatible DOS (par exemple CP850).
Lorsque vous démarrez **psql** pour la première fois, vous aurez le message d'avertissement suivant :

```
Attention : l'encodage console (850) diffère de l'encodage Windows (1
```

Il est recommandé de modifier l'encodage de la console,
Pour éviter cela, vous pouvez éditer le fichier C:\Program Files\PostgreSQL\9.0\scripts\runpsql.bat
en ajoutant la ligne :

```
chcp 1252
```

avant le lancement de psql.

## Les Bases de PostgreSQL

1. Se connecter à PostgreSQL :

- Lancer SQL Shell (psql)
- Apuyez 4 fois sur entrer pour utiliser les valeurs par défaut
- Saisissez votre mot de passe à définir de l'installation

2. `\l` pour voir les BDDs par défaut

3. Créer une BDD `first_database`

```SQL
CREATE DATABASE first_database;
```

4. Vérifier que la BDD est bien créée en réutilisant la commande `\l`

5. Créer une BDD `second_database`

6. Se connecter à la BDD `second_database` avec la commande `\c second_database`

7. Afficher les tables avec la commande `\d`

8. Créer les tables `first_table` et `second_table`

```SQL
CREATE TABLE first_table();
CREATE TABLE second_table();
```

9. Afficher les tables avec la commande `\d`

10. Voir plus de détails sur la seconde table avec la commande `\d second_table`

11. Une table a besoin de **colonnes** pour la décrire. Ajouter une colonne `first_column` avec un type `INT` dans la table `second_table`

```SQL
ALTER TABLE second_table ADD COLUMN first_column INT;
```

12. Afficher les tables avec la commande `\d`

13. Ajouter une colonne `id`avec le type `INT`

14. Ajouter une colonne `age`avec le type `INT`

15. Supprimer la colonne `age`

```SQL
ALTER TABLE second_table DROP COLUMN age;
```

15. Supprimer la colonne `first_column`

16. Ajouter une colonne `name`avec le type `VARCHAR(30)` (le nombre entre parenthèses indique le nombre de caractères maximum)

```SQL
ALTER TABLE second_table ADD name VARCHAR(30);
```

17. Renommer la colonne `name` en `username`

```SQL
ALTER TABLE second_table RENAME COLUMN name TO username;
```

18. Les **lignes** réprésente les données dans la table. Ajouter une ligne dans la table `second_table`. Lui donner un `id` de `1` et un `username` `'Samus'` (ne pas oublier les **guillements simple** car c'est un type `VARCHAR`)

```SQL
INSERT INTO second_table(id, username) VALUES(1, 'Samus');
```

19. Afficher la donnée

```SQL
SELECT * FROM second_table;
```

20. Insérer une ligne avec les valeurs `2` et `Mario`

21. Insérer une ligne avec les valeurs `3` et `Luigi`

22. Afficher les données

23. Supprimer la ligne que l'on vient de créer avec l'`id`

```SQL
DELETE FROM second_table WHERE id = 3;
```

23. Supprimer la ligne de `Mario` avec l'`username`

```SQL
DELETE FROM second_table WHERE username='Mario';
```

24. Supprimer la ligne de `Samus`

25. Afficher le détail de la table `second_table`

26. Supprimer dans `second_table` la colonne `username`

```SQL
ALTER TABLE second_table DROP username;
```

27. Supprimer la colonne `id` 28. Supprimer la table `second_table`

```SQL
DROP TABLE second_table;
```

28. Supprimer la table `first_table`

29. Afficher la liste des tables (`\d`)

30. Afficher la liste des BDDs (`\l`)

## BDD Mario

### Créer la BDD

1. Renommer la BDD `first_database` en `mario_database`

```SQL
ALTER DATABASE first_database RENAME TO mario_database;
```

2. Afficher la liste des BDDs

3. Se connecter à la BDD `mario_database`

4. Supprimer la BDD `second_database`

```SQL
DROP DATABASE second_database;
```

5. Vérifier la suppression en affichant la liste des BDDs

### Créer une table

6. Créer une table `characters`

### Créer les colonnes

7. Créer une colonne `character_id` qui a le type `SERIAL` (cela ajoute une contrainte `NOT NULL` et incrémentation automatique)

8. Ajouter une colonne `name` de type `VARCHAR(30)` avec une contrainte `NOT NULL`

```SQL
ALTER TABLE characters ADD name VARCHAR(30) NOT NULL;
```

9. Ajouter une colonne `homeland` de type `VARCHAR` qui a un maximum de `60` caractères

10. Ajouter une colonne `favorite_color` de type `VARCHAR` de `30` caractères maximum

11. Afficher le détail de la table `character`. On doit avoir 4 colonnes

### Créer les lignes

11. Ajouter une ligne avec un `name` de `Mario`, un `homeland` `Royaume Champignon` et une `favorite_color`de `Rouge`

```SQL
INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Royaume Champignon', 'Rouge');
```

12. Afficher la ligne avec une requête `SELECT`

13. Ajouter une ligne avec un `name` de `Luigi`, un `homeland` `Royaume Champignon` et une `favorite_color`de `Vert`

14. Afficher les données de la table

15. Ajouter une ligne avec un `name` de `Peach`, un `homeland` `Royaume Champignon` et une `favorite_color` de `Rose`

Ajouter les lignes une par une est fastidieux. Voici comment en ajoutant plusieurs d'un coup :

```SQL
INSERT INTO characters(name, homeland, favorite_color) VALUES ('Mario', 'Royaume Champignon', 'Rouge'),
('Luigi', 'Royaume Champignon', 'Vert'),
('Peach', 'Royaume Champignon', 'Rose');
```

16. Ajouter quatre lignes supplémentaires avec les valeurs de:

- `Toadstool`, `Royaume Champignon` et `Rouge`
- `Bowser`, `Royaume Champignon` et `Vert`
- `Daisy`, `Royaume Champignon` et `Jaune`
- `Yoshi`, `L''île Yoshi` (l'apostrophe est échappée) et `Vert`

17. Changer la couleur favorite de `Daisy` en `Orange` en utilisant `name` dans la condition

```SQL
UPDATE characters SET favorite_color='Orange' WHERE name='Daisy';
```

18. Changer le nom de `Toadstool` en `Toad` en utilisant la condition `favorite_color=Rouge`

19. Afficher les données de la table

Oh non, utiliser la condition `favorite_color=Rouge` était une mauvaise idée. Le nom de Mario a aussi changé car il aime le rouge.

20. Rechanger le nom de `Mario` en utilisant le `character_id` le plus petit

21. Afficher les données de la table

22. Changer la couleur favorite de `Toad` en `Bleu`

23. Changer la couleur favorite de `Bowser` en `Jaune`

24. Changer le pays d'origine de `Bowser` en `Royaume Koopa`

25. Afficher les données par ordre de `character_id`

```SQL
SELECT * FROM characters ORDER BY character_id;
```

Nous allons ajouter une **clef primaire**. C'est une colonne qui identifie de manière unique chaque ligne dans la table.

24. Ajouter une `PRIMARY KEY`

```SQL
ALTER TABLE characters ADD PRIMARY KEY(name);
```

On doit définir une clef primaire dans chaque table et il ne peut n'y en avoir qu'une par table

25. Afficher le détail de la table `characters`

Il serait mieux d'utiliser `character_id` comme clef primaire.

26. Supprimer la clef primaire `name`. Il faut regarder dans le détail de la table pour voir le nom de la contrainte

```SQL
ALTER TABLE characters DROP CONSTRAINT characters_pkey;
```

27. Définir une clef primaire `character_id`

### Créer une seconde table

28. Créer une table `more_info`

29. Afficher les tables

On constate qu'il y a une troisième table `characters_character_id_seq`

30. Afficher le détail de `characters_character_id_seq`

Cette table sert à trouver la valeur suivante de `character_id`

31. Ajouter une colonne `more_info_id` de type `SERIAL` dans la table `more_info`

32. Définir cette nouvelle colonne en tant que clef primaire

33. Afficher toutes les tables de `mario_databse` avec `\d`

Il doit y avoir une autre séquence pour `more_info_id` car il est incrémenté automatiquement

34. Ajouter une colonne `birthday` de type `DATE`

35. Ajouter une colonne `height` de type `INT`

36. Ajouter une colonne `weight` de type `NUMERIC(4, 1)` (c'est un type de donnée pour les décimaux qui va jusque 4 chiffres dont 1 qui doit se trouver à droite de la virgule)

37. Afficher le détail de `more_info`

Il y a nos quatre colonnes et la clef primaire que nous avons créée en bas. Pour savoir à quelle ligne correspond un personnage, nous devons définir une clef étrangère afin de pouvoir relier les lignes de cette table aux lignes de notre table de `characters`.

```SQL
ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters (character_id);
```

Pour définir une ligne pour Mario dans `more_info`, il nous suffit de définir la valeur `character_id` (clef étrangère) sur ce qu'elle est dans la table `characters`.

36. Afficher le détail de `more_info`

Il y a notre clef étrangère en desous de la table. Ces tables ont une relation _one-to-one_. Une ligne dans la table `characters` sera liée à exactement une ligne dans `more_info` et vice-versa. On va renforcer ça en ajoutant une contrainte `UNIQUE` à notre clef étrangère :

37. Ajouter une contrainte `UNIQUE` à `more_info`

```SQL
ALTER TABLE more_info ADD UNIQUE(character_id);
```

La colonne doit être `NOT NULL` car on ne veut pas avoir une ligne qui n'est pour personne

38. Ajouter la contrainte `NOT NULL` à la colonne de la clef étrangère

```SQL
ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;
```

39. Afficher les `character_id` et `name` de la table `characters`

```SQL
SELECT character_id, name FROM characters;
```

40. Ajouter une ligne dans `more_info` pour `Mario` sachant que sa date de naissance est le 09/07/1981, qu'il mesure 155cm et pèse 64.5kg. N'oubliez pas de définir son `character_id`

Le format `DATE` est une chaîne de caractères au format 'YYYY-MM-DD'

41. Afficher les données de `more_info`

42. Ajouter une ligne dans `more_info` pour `Luigi` sachant que sa date de naissance est le 14/07/1983, qu'il mesure 175cm et pèse 48.8kg. N'oubliez pas de définir son `character_id`

43. Ajouter une ligne dans `more_info` pour `Peach` sachant que sa date de naissance est le 18/10/1985, qu'il mesure 173cm et pèse 52.2kg. N'oubliez pas de définir son `character_id`

44. Afficher le `character_id` et le `name`de `Toad` en utilisant une condition `WHERE`

```SQL
SELECT character_id, name FROM characters WHERE name='Toad';
```

43. Ajouter une ligne dans `more_info` pour `Toad` sachant que sa date de naissance est le 10/01/1950, qu'il mesure 66cm et pèse 35.6kg. N'oubliez pas de définir son `character_id`

44. Ajouter une ligne dans `more_info` pour `Bowser` sachant que sa date de naissance est le 29/10/1990, qu'il mesure 258cm et pèse 300kg. N'oubliez pas de définir son `character_id`

45. Ajouter une ligne dans `more_info` pour `Daisy` sachant que sa date de naissance est le 31/07/1989 et qu'ignore son poids et sa taille (`NULL`). N'oubliez pas de définir son `character_id`

46. Afficher les données de `more_info`

Les valeurs nulles apparaissent comme vides

45. Ajouter une ligne dans `more_info` pour `Yoshi` sachant que sa date de naissance est le 1990/04/13, qu'il mesure 162cm et pèse 59.1kg. N'oubliez pas de définir son `character_id`

46. Renommer la colonne `height` en `height_in_cm`

47. Renommer la colonne `weight` en `weight_in_kg`

## Créer une troisième table

47. Créer une table `sounds` avec les colonnes `sound_id` de type `SERIAL` et une contrainte de `PRIMARY KEY`

```SQL
CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);
```

48. Ajouter une colonne `filename` de type `VARCHAR(40)` avec les contraintes `NOT NULL` et `UNIQUE`

```SQL
ALTER TABLE sounds ADD filename VARCHAR(40) NOT NULL UNIQUE;
```

On souhaite à nouveau utiliser `character_id` comme clef étrangère. Ce sera une relation "one-to-many" car un personnage aura plusieurs sons, mais aucun son n'aura plus d'un personnage.

49. Ajouter une colonne `character_id` dans `sounds` avec les propriétés `INT`, `NOT NULL` et définir sa clef étrangère qui référence `character_id` dans `characters`

```SQL
ALTER TABLE sounds ADD character_id INT NOT NULL REFERENCES characters(character_id);
```

50. Afficher le détail de `sounds`

51. Afficher les données de `characters` trier par `character_id`

52. Insérer `its-a-me.wav` dans `sounds` avec l'id de Mario pour `character_id`

53. Ajouter une autre ligne `yippee.wav` pour Mario

54. Ajouter une ligne `ha-ha.wav` pour Luigi

55. Ajouter une autre ligne `oh-yeah.wav` pour Luigi

56. Ajouter des lignes `yay.wav` et `woo-hoo.wav` pour Peach

57. Ajouter les lignes `mm-hmm.wav` pour Peach et `yahoo.wav` pour Mario

### Créer une quatrième table

51. Créer une table `actions` avec une colonne
    `action_id` de type `SERIAL` et en faire une `PRIMARY KEY`. Essayer de le faire en seule commande

52. Ajouter une colonne `action` de type `VARCHAR(20)` et qui a les contraintes `UNIQUE` et `NOT NULL`

La table des actions n'aura pas de clefs étrangères. Elle va avoir une relation "many-to-many" avec la table `characters`. En effet, de **nombreux** personnages peuvent effectuer de **nombreuses** actions. Vous verrez pourquoi nous n'avons pas besoin d'une clef étrangère plus tard

53. Insérer une ligne `courrir`

54. Insérer une ligne `sauter`

55. Insérer une ligne `se baisser`

Les relations "many-to-many" utilisent généralement une table de **jonction** pour relier deux tables ensemble, formant ainsi deux relations "one-to-many". Nos tables `characters` et `actions` seront liées à l'aide d'une table de jonction

56. Créer une table `character_actions` qui décrira quelles actions peut effectuer un personnage

Notre table de jonction utilisera les clefs primaires des tables de `characters` et `actions` comme clefs étrangères pour créer la relation

57. Ajouter une colonne `character_id` de type `INT` et avec la contrainte `NOT NULL`

58. Définir la colonne `character_id` comme étant une clef étrangère

```SQL
ALTER TABLE character_actions ADD FOREIGN KEY(character_id) REFERENCES characters(character_id);
```

59. Ajouter une autre colonne `action_id` de type `INT` et avec la contrainte `NOT NULL`

60. Définir la colonne `action_id` comme étant une clef étrangère

61. Afficher le détail de `character_actions`

Chaque table doit avoir une clé primaire. Nos tables précédentes avaient une seule colonne comme clef primaire. Celle-ci sera différente. Nous pouvons créer une clef primaire à partir de deux colonnes, appelée clef primaire **composite**

62. Utiliser `character_id`et `action_id` pour créer une clef primaire composite pour cette table

```SQL
ALTER TABLE character_actions ADD PRIMARY KEY(character_id, action_id);
```

Cette table aura plusieurs lignes avec le même `character_id` et plusieurs lignes le même `action_id`. Donc ni l'une ni l'autre n'est unique. Mais nous n'aurons jamais le même `character_id` et `action_id` dans une seule ligne. Ainsi, les deux colonnes ensemble peuvent être utilisées pour identifier de manière unique chaque ligne

63. Afficher le détail de `character_actions`pour voir la clef composite

64. Insérer trois lignes dans `character_actions` pour toutes les actions que `Yoshi` peut effectuer. Il peut toutes les effectuer.

```SQL
Insert INTO character_actions(character_id, action_id) VALUES(7,1),(7,2),(7,3);
```

65. Afficher les données de `character_actions`

66. Insérer trois lignes dans `character_actions` pour toutes les actions que `Peach` peut effectuer. Elle peut toutes les effectuer.

67. `Bowser` peut effectuer toutes les actions

68. `Toad` peut effectuer toutes les actions

69. `Peach` peut effectuer toutes les actions

70. `Luigi` peut effectuer toutes les actions

71. `daisy` peut effectuer toutes les actions

72. Le dernier est `Mario`. Ajouter trois lignes pour ses actions

```SQL
Insert INTO character_actions(character_id, action_id) VALUES(1,1),(1,2),(1,3);
```

73. Afficher les données de `character_actions`

74. Afficher toutes les tables

75. Afficher les données de `characters`

76. Afficher les données de `more_info`

On peut voir que le `character_id`, il nous suffit donc de trouver l'id correspondant dans la table `characters` pour savoir à qui il s'adresse Nous l'avons ajouté en tant que clef étrangère, cela signifie que vous pouvez obtenir toutes les données des deux tables avec une commande `JOIN`

77. Entrer une commande `JOIN` pour voir **toutes** les infos des deux tables. Les tables `characters` et `more_info` ont la colonne `character_id` en commun

```SQL
SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;
```

Nous pouvons maintenant voir toutes les informations des deux tables. Si vous vous souvenez, c'est une relation "one-to-one". Il y a donc une ligne dans chaque table qui correspond à une ligne de l'autre.

78. Utiliser une autre commande `JOIN` pour afficher les tables `characters` et `sounds` ensemble. Elles utilisent la colonne `character_id` comme clef

Cela montre la relation "one-to-many". Nous pouvons voir que certains personnages ont plus d'une ligne car ils ont de **nombreux** sons.

79. Afficher toutes les infos des tables `characters`, `actions`et `character_ations`

```SQL
SELECT * FROM character_actions
FULL JOIN characters ON character_actions.character_id = characters.character_id
FULL JOIN actions ON character_actions.action_id = actions.action_id;
```

On peut voir la relation "many-to-many" car plusieurs personnages ont plusieurs actions.
