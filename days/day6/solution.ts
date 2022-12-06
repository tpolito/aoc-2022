const parseInput = (rawInput: string) => rawInput;

export const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const windowSize = 4;

  for (let i = 0; i <= input.split('').length - windowSize; i++) {
    const window = new Set(input.slice(i, i + windowSize));
    if (window.size === windowSize) {
      return i + windowSize;
    }
  }
};

export const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const windowSize = 14;

  for (let i = 0; i <= input.split('').length - windowSize; i++) {
    const window = new Set(input.slice(i, i + windowSize));
    if (window.size === windowSize) {
      return i + windowSize;
    }
  }
};
