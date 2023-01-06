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