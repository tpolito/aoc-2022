const parseInput = (rawInput: string) => rawInput;

export const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  let ans = 0;
  for (const line of input) {
    const firstHalf = line.slice(0, line.length / 2).split('');
    const secondHalf = line.slice(line.length / 2).split('');

    const intersection = [
      ...new Set(firstHalf.filter((letter) => secondHalf.includes(letter))),
    ];

    console.log(intersection);

    for (const letter of intersection) {
      if (letter.toLowerCase() === letter) {
        ans += letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      } else {
        ans += letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
      }
    }
  }
  return ans;
};

export const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  let ans = 0;
  for (let i = 0; i < input.length; i += 3) {
    const first = input[i].split('');
    const second = input[i + 1].split('');
    const third = input[i + 2].split('');

    const intersection = [
      ...new Set(
        first.filter(
          (letter) => second.includes(letter) && third.includes(letter)
        )
      ),
    ];

    for (const letter of intersection) {
      if (letter.toLowerCase() === letter) {
        ans += letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      } else {
        ans += letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
      }
    }
  }
  return ans;
};

const score = (char: string) => {
  let score = 0;
  if (char.toLowerCase() === char) {
    score += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  } else {
    score += char.charCodeAt(0) - ''.charCodeAt(0) + 27;
  }

  return score;
};
