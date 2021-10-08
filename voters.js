//Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação. Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35 anos, quantos de 36 a 55 nos e quantos de cada uma dessas faixas etárias realmente votaram. O objeto resultante contendo esses dados deve ter 6 propriedades.
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function getAgeRange(startAge, endAge) {
  return function (personAge) {
    return personAge >= startAge && personAge <= endAge ? true : false;
  };
}

const young = getAgeRange(18, 25);
const mid = getAgeRange(26, 35);
const old = getAgeRange(36, 55);

function getVoterResults(votersGroup) {
  const voterStatistics = votersGroup.reduce(
    (totalVoters, currentVoter) => {
      if (young(currentVoter.age)) {
        return {
          ...totalVoters,
          youngAge: totalVoters.youngAge + 1,
          youngVotes: currentVoter.voted
            ? totalVoters.youngVotes + 1
            : totalVoters.youngVotes,
        };
      } else if (mid(currentVoter.age)) {
        return {
          ...totalVoters,
          midAge: totalVoters.midAge + 1,
          midVotes: currentVoter.voted
            ? totalVoters.midVotes + 1
            : totalVoters.midVotes,
        };
      } else if (old(currentVoter.age)) {
        return {
          ...totalVoters,
          oldAge: totalVoters.oldAge + 1,
          oldVotes: currentVoter.voted
            ? totalVoters.oldVotes + 1
            : totalVoters.oldVotes,
        };
      }
    },
    {
      youngVotes: 0,
      youngAge: 0,
      midVotes: 0,
      midAge: 0,
      oldVotes: 0,
      oldAge: 0,
    }
  );
  return voterStatistics;
}

console.log(getVoterResults(voters));
