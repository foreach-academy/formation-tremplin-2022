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