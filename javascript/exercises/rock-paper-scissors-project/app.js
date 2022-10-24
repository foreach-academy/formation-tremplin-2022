const choices = ['pierre', 'papier', 'ciseaux'];
const NUMBER_OF_ROUNDS = 5;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (
    (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
    (playerSelection === 'papier' && computerSelection === 'pierre') ||
    (playerSelection === 'ciseaux' && computerSelection === 'papier')
  ) {
    return 1;
  } else {
    return -1;
  }
}

function game() {
  let score = 0;

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const playerSelection = prompt(
      'Choississez entre pierre, papier ou ciseaux :'
    );
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    score += result;

    // if (result === 0) {
    //   console.log('Égalité');
    // } else if (result > 0) {
    //   console.log('Vous gagnez la manche');
    // } else {
    //   console.log('Vous perdez la manche');
    // }
  }

  if (score === 0) {
    return 'Match nul.';
  } else if (score > 0) {
    return 'Vous remportez la partie !';
  } else {
    return 'Vous perdez la partie :(';
  }
}

console.log(game());
