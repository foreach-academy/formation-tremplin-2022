const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

// function countVowel(string) {
//   return string
//     .toLowerCase()
//     .split('')
//     .reduce(function (total, char) {
//       if (vowels.includes(char)) {
//         total += 1;
//       }

//       return total;
//     }, 0);
// }

function countVowel(string) {
  return string
    .toLowerCase()
    .split('')
    .reduce(function (total, char) {
      if (vowels.includes(char)) {
        if (total[char]) {
          total[char] += 1;
        } else {
          total[char] = 1;
        }
      }

      return total;
    }, {});
}

console.log(countVowel('hello world'));
