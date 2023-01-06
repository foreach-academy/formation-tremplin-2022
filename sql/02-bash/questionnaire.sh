#!/bin/bash

echo -e "\n~~ Questionnaire ~~\n"

QUESTION1="Comment t'appelles-tu ?"
QUESTION2="\nD'où venez vous ?"
QUESTION2="\nQuel est votre site Web de codage préféré ?"

echo $QUESTION1
read NAME

echo -e $QUESTION2
read LOCATION

echo -e $QUESTION2
read WEBSITE

echo -e "\nBonjour $NAME de $LOCATION. J'ai appris que votre site Web de codage préféré est $WEBSITE !"