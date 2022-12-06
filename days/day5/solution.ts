const parseInput = (rawInput: string) => rawInput;

export const part1 = (rawInput: string) => {
  const [diagram, moves] = parseInput(rawInput).split('\n\n');
  const stacks: string[][] = [];
  for (const line of diagram.split('\n').slice(0, -1)) {
    for (let i = 0; i < line.length; i += 4) {
      if (line[i + 1] !== ' ') {
        stacks[i / 4] = stacks[i / 4] ?? [];
        stacks[i / 4].unshift(line[i + 1]);
      }
    }
  }
  for (const move of moves.split('\n')) {
    const [n, from, to] = move.match(/\d+/g)!.map(Number);
    const crates = stacks[from - 1].slice(-n);
    stacks[to - 1].push(...crates.reverse());
    stacks[from - 1].length -= n;
  }

  return stacks.map((stack: string[]) => stack[stack.length - 1]).join('');
};

export const part2 = (rawInput: string) => {
  const [diagram, moves] = parseInput(rawInput).split('\n\n');
  const stacks: string[][] = [];
  for (const line of diagram.split('\n').slice(0, -1)) {
    for (let i = 0; i < line.length; i += 4) {
      if (line[i + 1] !== ' ') {
        stacks[i / 4] = stacks[i / 4] ?? [];
        stacks[i / 4].unshift(line[i + 1]);
      }
    }
  }
  for (const move of moves.split('\n')) {
    const [n, from, to] = move.match(/\d+/g)!.map(Number);
    const crates = stacks[from - 1].slice(-n);
    stacks[to - 1].push(...crates);
    stacks[from - 1].length -= n;
  }

  return stacks.map((stack) => stack[stack.length - 1]).join('');
};
