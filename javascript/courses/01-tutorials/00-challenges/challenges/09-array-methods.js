//* accès à students depuis 10-data.js

//* map
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

//* filter
const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }

  // if (student.score >= 80) return student;
  //? voir description mdn filter js
  return student.score >= 80;
});

// console.log(highScores);

//* find
const specificId = students.find(function (banana) {
  if (banana.id === 3) return banana;
});

const fruits = ['banana', 'orange'];
const random = fruits.find(function (fruit) {
  return fruit === 'banana';
});

//? on récupère que l'item
// console.log(random);
// console.log(specificId);

//* reduce #1
const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

//* cours square bracket notation
// servira pour l'exo sondage
const subject = 'art';

const total = {};

// total.math = "valeur au pif"
//? permet de créer des props dynamiquement
total[subject] = 'valeur au pif';
// console.log(total);

//* reduce #2
const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject;

  if (survey[favSubject]) {
    survey[favSubject] += 1;
  } else {
    survey[favSubject] = 1;
  }

  return survey;
}, {});

console.log(survey);
