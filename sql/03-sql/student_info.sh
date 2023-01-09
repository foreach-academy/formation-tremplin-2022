#!/bin/bash

# Info à propos de mes étudiants en informatique depuis la BDD students

echo -e "\n~~ Mes Étudiants en Informatique ~~\n"

export PGPASSWORD=admin
PSQL="psql -X -U postgres -d students --no-align --tuples-only -c"

echo -e "\nPrénom, nom et GPA des étudiants avec un GPA de 4.0 :"
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0")"

echo -e "\nTous les cours dont la première lettre est avant le 'D' dans l'alphabet :"
echo "$($PSQL "SELECT course from courses WHERE course < 'D'")"

echo -e "\nPrénom, nom et GPA des étudiants dont le nom commence par un 'R' ou sont après, et ont un GPA supérieur à 3.8 ou inférieur à 2.0"
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"

echo -e "\nNom des étudiants dont le nom contient 'sa' insensible à la casse ou un 'r' comme avant dernière lettre :"
echo "$($PSQL "SELECT last_name FROM students WHERE last_name ILIKE '%sa%' OR last_name LIKE '%r_';")"

echo -e "\nPrénom, nom et GPA des étudiants qui n'ont pas sélectionnés une majeure et dont le prénom commence par un 'D' ou dont le GPA est supérieur à 3.0 :"
echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)")"

echo -e "\nNoms des cinq premiers cours, dans l'ordre alphabétique inversé, qui ont un 'e' en seconde lettre or qui se terminent par un 's' :"
echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"

echo -e "\nGPA moyen de tous les étudiants arrondi à deux décimales :"
echo "$($PSQL "SELECT ROUND(AVG(gpa),2) from students")"

echo -e "ID de la majeure, nombre total d'étudiants dans une colonne nommée 'number_of_students' et GPA moyen arrondi à deux décimales dans une colonne nommée 'average_gpa', pour chaque ID de majeure dans le tableau des étudiants ayant un nombre d'étudiants supérieur à 1 :"
echo "$($PSQL "SELECT major_id, COUNT(student_id) AS number_of_students, ROUND(AVG(gpa), 2) AS average_gpa FROM students GROUP BY(major_id) HAVING COUNT(*) > 1")"

echo -e "\nListe des majeures, par ordre alphabétique, qu'aucun étudiant ne suit ou a un étudiant dont le prénom contient un "ma" insensible à la casse :"
echo "$($PSQL "SELECT major FROM majors FULL JOIN students ON majors.major_id=students.major_id WHERE student_id IS NULL OR first_name ILIKE '%ma%' ORDER BY major")";

echo -e "\nListe des cours uniques, par ordre alphabétique inversé, qu'aucun étudiant ou 'Obie Hilpert' ne suit :"
echo "$($PSQL "SELECT DISTINCT(c.course) FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses AS c USING(course_id) WHERE student_id IS NULL OR (first_name='Obie' AND last_name='Hilpert') ORDER BY course DESC")"

echo -e "\nListe des cours, par ordre alphabétique, avec un seul étudiant inscrit :"
echo "$($PSQL "SELECT course FROM students INNER JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course HAVING COUNT(student_id) = 1 ORDER BY course")"