# Cours Bash

[Installer Git Bash](https://git-scm.com/downloads)

# Projet #1 Questionnaire

1. Créer une fichier `questionnaire.sh` en utilisant la commande `touch`

2. Écire `echo hello questionnaire` dans le fichier

3. Exéctuer le script avec la commande `sh questionnaire.sh` pour utliser l'interpréteur Shell

On peut aussi utiliser l'interpréteur `bash` avec la commande `bash questionnaire.sh`.

4. Pour voir où est situé l'interpréteur (chemin absolu) `bash` utiliser la commande `wich bash` (sur Linux) `where bash` (sur Windows)

On peut dire au programme d'utiliser cet interpréteur en utilisant un `shebang`tout en haut du fichier comme ça : `#!/bin/bash`.

5. Ajouter le `shebang`en haut du fichier

Maintenant, on peut éxécuter le fichier au lieu d'utilier les commandes `sh` ou `bash` et il utilisera `bash`par défaut.

6. Exécuter le script avec `./questionnaire.sh`

On devrait avoir une permission refusée (sur Linux).

7. Afficher la liste des fichiers en format long avec `ls -l` pour voir les permissions

À côté de notre fichier se trouve `-rw-r--r--`. Tous sauf le premier caractère (`-`) décrivent les autorisations dont disposent les différents utilisateurs avec le fichier. `r` signifie `lire`, `w` signifie `écrire`, `x` signifie `exécuter`. On ne voit pas de `x`, donc personne ne peut l'exécuter.

8. Entrer la commande `chmod +x questionnaire.sh` dans le termianl pour donner la permission d'exécuter à tout le monde

9. Lister à nouveau les fichiers aevc `ls -l`pour voir les nouvelles permi

10. Exécuter à nouveau le script avec `./questionnaire.sh`

On peut ajouter n'importe quelle commande dnas le script

11. Ajouter la commande `ls -l` dans le script et l'éxécuter

12. Supprimer tout sauf le `shebang` dans le script

Bash a des variables, des fonctions et d'autres choses que vous connaissez peut-être. Nous pouvons créer une variable avec `VARIABLE_NAME=VALUE`. Il ne peut pas y avoir d'espace autour du signe égal (`=`). Si une variable contient des espaces, placer des guillemets doubles autour d'elle

13. Créer une variable nommée `QUESTION1` et définissez sa valeur sur `"Comment t'appelles-tu ?"`

Pour utiliser une variable, placer `$` devant comme ceci : `$VARIABLE_NAME`. Les scripts shell s'exécutent de haut en bas, on ne peut donc utiliser la variable qu'en dessous de l'endroit où elle est créée.

14. Utiliser `echo` pour afficher notre variable et éxécuter le script

La question a été affichée. Ensuite, nous voulons pouvoir accepter les entrées d'un utilisateur. Nous pouvons le faire avec `read` comme ceci : `read VARIABLE_NAME`. Cela obtiendra l'entrée de l'utilisateur et la stockera dans une nouvelle variable.

15. Après avoir affichée la question, utiliser `read` pour obtenir une entrée et la stocker dans une variable nommée `NAME`.

16. Utiliser `echo` pour afficher `Hello <name>.`

17. Juste en dessous de notre première variable, créer-en une autre nommée `QUESTION2`. Définissez la valeur sur `D'où venez-vous ?`.

18. Afficher la deuxième question

19. Utiliser `read` pour récupérer l'entrée de l'utilisateur dans une variable `LOCATION`

20. Afficher `Bonjour <name> de <location>`

21. Utiliser `echo` pour imprimer `~~ Questionnaire ~~` avant que quoi que ce soit d'autre ne soit affiché.

22. Exécuter le script

Une façon de trouver des informations sur une commande est d'utiliser `--help` (sur tous les OS) ou `man` (sur Linux). Il signifie `manuel` et nous pouvons l'utiliser comme ceci : `man <commande>` ou `<commande> --help`.

23. Voir s'il existe un manuel pour `echo`.

```sh
man echo
```

```sh
help echo
```

En haut du menu, l'option `-e` semble prometteuse. Et le `\n` en dessous indique une nouvelle ligne. Nous devrions jeter un oeil à ceux-ci.

24. Dans notre script, changer le titre en `echo -e "\n~~ Questionnaire ~~\n"` pour voir si cela imprime les lignes vides.

On peut utiliser `CTRL+C`pour arrêter l'exécution du script

25. Créer une variable `QUESTION3`et définir sa valeur sur `"Quel est votre site Web de codage préféré ?"` et l'afficher

26. Ajouter une variable `WEBSITE`pour récupérer l'entrée

27. Modifier la commande `echo` de la réponse pour imprimer cette phrase à la place : `Bonjour <name> de <location>. J\'ai appris que votre site Web de codage préféré est <website> !`

28. Exécuter le script

29. Modifier la réponse finale pour imprimer une ligne vide au début de la phrase.

<details><summary>Solution</summary>

```sh
#!/bin/bash

echo -e "\n~~ Questionnaire ~~\n"

QUESTION1="Comment t'appelles-tu ?"
echo $QUESTION1
read NAME
echo hello $NAME

QUESTION2="D'où venez vous ?"
echo $QUESTION2
read LOCATION
echo Bonjour $NAME de $LOCATION

QUESTION2="Quel est votre site Web de codage préféré ?"
echo $QUESTION2
read WEBSITE

echo -e "\nBonjour $NAME de $LOCATION. J'ai appris que votre site Web de codage préféré est $WEBSITE !"
```

</details>

# Projet #2 Compte à rebours

1. Créer un fichier `countdown.sh`

2. Donner au fichier les permissions d'éxécution (si nécessaire)

3. Ajouter un `shebang` tout en haut du fichier pour utiliser l'interpréteur `bash`

Les commentaires en `bash` ressemblent à ceci : `# <commentaire>`

4. Ajouter un commentaire sous le `shebang` qui dit `Programme qui compte à rebours à partir d'un argument donné` afin que les gens sachent ce qu'il fait.

Notons que le `shebang` est un cas particulier et n'est pas traité comme un commentaire.

Les programmes peuvent prendre des arguments. Nous pouvons y accéder de différentes manières avec `$`.

5. Ajouter `echo $*` dans notre script pour afficher tous les arguments qui lui sont transmis.

6. Exécuter le script avec `./countdown.sh`

Rien n'a été imprimé.

7. Exécuter à nouveau le script, mais en ajoutant trois arguments à la commande : `arg1`, `arg2` et `arg3`. Placer-les après la commande avec un espace avant chacun.

<details>
  <summary>Solution</summary>

```sh
./countdown.sh arg1 arg2 arg3
```

</details>
<br />

`$*` a affiché tous les arguments passés à notre script. Pour accéder à l'un d'entre eux, utiliser `$<numéro>`. `arg2` aurait pu être accédé avec `$2`.

8. Modifier le script pour que `echo` affiche le premier argument au lieu de tous les arguments.

<details>
  <summary>Solution</summary>

```sh
echo $1
```

</details>
<br />

9. Exécuter à nouveau le fichier avec `./countdown.sh arg1 arg2 arg3`

On peut utiliser `help` pour voir les commandes intégrées
On peut voir plus d'informations sur le `if` avec `help if`

10. Supprimer `echo $1` dans le script et ajouter une condition `if` qui vérifie `si [[ $1 == arg1 ]]`. Dans sa zone `then`, utiliser `echo` afficher `true`.

Il doit y avoir des espaces à l'intérieur des crochets (`[[ ... ]]`) et autour de l'opérateur (`==`).

<details>
<summary>Solution</summary>

```sh
if [[ $1 ==  arg1 ]]; then
  echo true
fi
```

</details>

11. Exécuter le script avec `arg1` comme seul argument

12. Ajouter une condition`else` pour afficher `false`

<details>
  <summary>Solution</summary>

```sh
if [[ $1 ==  arg1 ]]; then
  echo true
else
  echo false
fi
```

</details>
<br />

13. Exécuter le script avec un argument autre que `arg1`

Notre programme s'attend à un nombre entier comme argument pour commencer le compte à rebours. Nous pouvons comparer des entiers entre les crochets (`[[ ... ]]`) de notre `if` avec :

- `-eq` (`égal`)
- `-ne` (`différent de`),
- `-lt` (`inférieur à`)
- `-le` (`inférieur ou égal`)
- `-gt` (`supérieur à`)
- `-ge` (`supérieur ou égal`).

14. Modifier la condition `if` pour vérifier si le premier argument est inférieur à `5`.

<details>
  <summary>Solution</summary>

```sh
if [[ $1 -lt 5 ]]
```

</details>

15. Exécuter le script et utiliser `4` comme argument

16. Exécuter encore le script et utiliser `5` comme argument

```
Voir `help [[ expression ]]`
Voir `help test`
```

17. Modifier la condition dans le script pour vérifier si le premier argument est inférieur ou égal à `5`.

18. Exécuter le script et utiliser `5` comme argument

19. Taper `[[ -a countdown.sh ]]; echo $?` dans le terminal pour voir si le fichier existe.

Le terminal affiche `0` car il n'y a pas d'erreurs,cela équivaudrait à `true`. Tout autres valeurs que `0` correspondraient à des erreurs (`false`)

20. Refaire la commande dans la console mais avec `bad_file.txt`

21. Vérifier les permissions d'éxécution avec la commande `[[ -x countdown.sh ]]; echo $?`

22. Changer la condition `if` pour vérifier si le premier argument est `supérieur à zéro` afin que d'être sûr que c'est quelque chose que l'on peut décompter

23. Modifier la commande `echo` existante pour afficher `Incluez un entier positif comme premier argument.` si un entier positif n'est pas utilisé.

24. Exécuter le script avec un argument autre qu'un nombre positif

25. Dans le bloc `then` de la condition, remplacer `echo` par une boucle `for` qui affiche de l'argument (`$1`) à `1`

<details>
  <summary>Solution</summary>

```sh
for (( i = $1; i >= 0; i -- )); do
    echo $i
done
```

</details>

22. Exécuter le script et utiliser `10` comme argument

23. Ajouter la commande `sleep 1` pour faire une pause de 1s après l'affichage de chaque chiffre

24. Ajouter le titre `~~ Compte à Rebours ~~`

```sh
echo -e "\n~~ Compte à Rebours ~~\n"
```

25. Commenter la boucle `for`

```sh
: '
    commentaire ici
    plus de commentaires ici
  '
```

26. Faire une boucle `while` à la place

```
Voir `help while`
```

<details>
  <summary>Solution</summary>

```sh
I=$1
while [[ $I -ge 0 ]]; do
  echo $I
  (( I-- ))
  sleep 1
done
```

</details>

# Projet #3 Bingo

1. Créer un fichier `bingo.sh`

2. Donner au fichier les permissions d'éxécution

3. Ajouter un `shebang` tout en haut du fichier

4. Ajouter un commenter sous le `shebang` qui dit : `Générateur de numéros de bingo`

5. Afficher le titre `~~ Générateur de numéros de bingo ~~` avec `echo`

6. Créer une variable `NUMBER` égale à `5`

7. Afficher `NUMBER`

8. Exécuter le script

Les numéros de bingo vont jusqu'à `75`, chaque numéro est associé à une lettre du mot `bingo`. Nous devrons générer aléatoirement un nombre compris entre 1 et 75.

Bash peut avoir quelque chose qui peut nous aider ici. Un shell est livré avec des variables d'environnement.

9. Affichons-les en entrant `printenv` dans le terminal.

Ce sont toutes des variables d'environnement, elles sont prédéfinies et chargées avec chaque shell. La plupart d'entre elles ne sont pas très pertinentes, mais il est bon de savoir qu'elles sont là.

10. Utiliser la commande `echo $RANDOM` dans le terminal

11. Dans le script, utiliser la variable `RANDOM` pour définir `NUMBER`à un autre aléatoire au lieu de `5`

<details>
  <summary>Solution</summary>

```sh
NUMBER=$RANDOM
```

</details>
<br />

La variable `RANDOM` générera un nombre aléatoire entre `0` et `32767`.

Nous pouvons utiliser l'opérateur `module` (`%`) pour le placer dans la plage souhaitée.

12. Changer la valeur de `NUMBER` à `$RANDOM%75`

Bash voit tout comme des chaînes de caractères.

`(( ... ))` effectuera un calcul ou une opération et n'affichera rien. `$(( ... ))` retournera le résultat.

13. Changer la variable `NUMBER` égale à un nombre aléatoire entre 1 et 75

```sh
NUMBER=$(( RANDOM % 3 + 1 ))
```

14. Exécuter le script

15. Créer une variable `TEXT` et définir la valeur sur `"Le prochain numéro est "`. Lorsque le script est terminé, la sortie sera quelque chose comme `Le prochain numéro est B:15`.

La lettre qui va avec le nombre aléatoire dépend de ce que le nombre est. Si c'est `15` ou moins, ce sera un `B`.

16. Faire une condition `if`

<details>
  <summary>Solution</summary>

```sh
if (( NUMBER <= 15)); then
  echo $TEXT B:$NUMBER
fi
```

</details>
<br />

17. Faire une condition `elif` si c'est `30` ou moins, ce sera un `I`. Utiliser la notion `[[ ]]`

<details>
  <summary>Solution</summary>

```sh
if (( NUMBER <= 15)); then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]; then
  echo $TEXT I:$NUMBER
fi
```

</details>
<br />

18. Faire une condition `elif` si c'est moins de `46`, ce sera un `N`. Utiliser la notation `(( ))`

<details>
  <summary>Solution</summary>

```sh
if (( NUMBER <= 15 )); then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]; then
  echo $TEXT I:$NUMBER
elif (( $NUMBER < 46 )); then
  echo $TEXT N:$NUMBER
fi
```

</details>
<br />

19. Faire une condition `elif` si c'est moins de `61`, ce sera un `G`. Utiliser la notation `[[ ]]`

20. Ajouter un `else` pour afficher la dernière phrase

<details>
  <summary>Solution</summary>

```sh
if (( NUMBER <= 15)); then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]; then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 )); then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]; then
  echo $TEXT G:$NUMBER
else
  echo $TEXT O:$NUMBER
fi
```

</details>

# Projet #4 Diseur de Bonne Aventure

1. Créer une fichier `fortune.sh`

2. Donner les permissions d'éxécution au fichier

3. Ajouter un shebang en haut du fchier pour utiliser `bash`

4. Ajouter un commentaire `Programme pour dire la bonne aventure à une personne`

5. Ajouter un titre `~~ Diseur de Bonne Aventure ~~`. Ne pas oublier les sauts de ligne avant et après

6. Créer un tableau nommé `REPONSES`. Donner ces six valeurs : `Oui`, `Non`, `Peut-être`, `Bonnes perspectives`, `Ne comptez pas dessus` et `Redemandez plus tard`

```sh
RESPONSES=("Oui" "Non" "Peut-être" "Bonnes perspectives" "Ne comptez pas dessus" "Redemandez plus tard")
```

7. Utiliser `echo` pour afficher le dernier élément

<details>
  <summary>Solution</summary>

```sh
echo ${RESPONSES[5]}
```

</details>
<br />

8. Créer une variable nommée `N`. La définir égale à un nombre aléatoire entre `0`et `5`

<details>
  <summary>Solution</summary>

```sh
N=$(( RANDOM % 6 ))
```

</details>
<br />

9. Utiliser `echo`pour afficher un élément du tableau au hasard

<details>
  <summary>Solution</summary>

```sh
echo ${RESPONSES[$N]}
```

</details>
<br />

```
Utiliser la commande `help function`.
```

10. Créer une fonction `GET_FORTUNE` avant le dernier `echo`

<details>
  <summary>Solution</summary>

```sh
GET_FORTUNE() {}
```

</details>
<br />

11. Dans la fonction, utiliser `echo` pour afficher `Posez une question oui ou non :`

12. Appeler la fonction en mettant le nom de celle-ci (sans les parenthèses) en dessous de l'endroit où on l'a créé. Aucun `$` nécessaire. S'assurer que la réponse que l'on affiche se trouve en bas du fichier.

13. Dans la fonction, après avoir affiché la question, utiliser `read`pour récupérér l'entrée de l'utilisateur dans une variable nommée `QUESTION`

<details>
  <summary>Solution</summary>

```sh
GET_FORTUNE() {
  echo "Posez une question oui ou non :"
  read QUESTION
}
```

</details>
<br />

14. Exécuter le script

On veut s'assurer que l'entrée est une question. Nous allons ajouter une boucle après la fonction qui demande une entrée jusqu'à ce que l'entrée se termine par un point d'interrogation.

```sh
Voir `help until`.
Voir `help [[ expression ]]`.
```

<details>
  <summary>Solution</summary>

```sh
until [[ $QUESTION =~ \?$ ]]; do
  GET_FORTUNE
done
```

</details>
<br />

15. Tester si l'entrée se termine par un point d'interrogation (`?`).

On sait qu'on demande la même chose si l'entrée n'est pas ce que l'on veut. Nous devons informer les utilisateurs que la question doit se terminer par `?`.

16. Ajouter une condition `if` dans la fonction qui vérifie `si [[ ! $1 ]]` (si il n'y a pas d'argument). Placer l'instruction `echo` existante dans le bloc `then` et s'assurer que le `read` existant est après la fin de la condition `if`.

<details>
  <summary>Solution</summary>

```sh
if [[ ! $1 ]]; then
  echo "Posez une question oui ou non :"
fi

read QUESTION
```

</details>

17. Ajouter un `else` qui affiche `Réessayez. Assurez-vous que la question se termine par un point d'interrogation :`

18. Appeler la fonction `GET_FORTUNE` avec l'argument `again`

<details>
  <summary>Solution</summary>

```sh
until [[ $QUESTION =~ \?$ ]]
do
  GET_FORTUNE again
done
```

</details>
<br />

19. Dans le script, appeler la fonction `GET_FORTUNE`sans argument avant la boucle `until`

20. Ajouter un saut de ligne là où on afiche la réponse

21. Exécuter le script

<details>
  <summary>Solution</summary>

```sh
#!/bin/bash

# Programme pour dire la bonne aventure à une personne

echo -e "\n~~ Diseur de Bonne Aventure ~~\n"

RESPONSES=("Oui" "Non" "Peut-être" "Bonnes perspectives" "Ne comptez pas dessus" "Demander à nouveau plus tard")

N=$(( RANDOM % 6))


GET_FORTUNE() {
  if [[ ! $1 ]]; then
    echo "Posez une question oui ou non :"
  else
    echo "Réessayez. Assurez-vous que la question se termine par un point d'interrogation :"
  fi

  read QUESTION
}

GET_FORTUNE

until [[ $QUESTION =~ \?$ ]]; do
  GET_FORTUNE again
done

echo -e "\n${RESPONSES[$N]}"

```

</details>

# Projet #5

1. Créer un fichier `five.sh`

2. Donner les permissions d'exécution

3. Ajouter le `shebang`

4. Ajouter un commentaire `Programme pour exécuter mes quatre autres programmes`

5. Ajouter la commande pour exécuter `questionnaire.sh`

6. Ajouter les commandes pour exécuter le reste des programmes. Ne pas oublier qu'il faut un argument pour exécuter `countdown.sh`
