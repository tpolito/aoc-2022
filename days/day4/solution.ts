const parseInput = (rawInput: string) => rawInput;

export const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');

  let ans = 0;
  for (const row of input) {
    const split = row.split(',');
    const a = split[0].split('-').map(Number);
    const b = split[1].split('-').map(Number);

    if ((a[0] <= b[0] && a[1] >= b[1]) || (a[0] >= b[0] && a[1] <= b[1])) {
      ans++;
    }
  }
  return ans;
};

export const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');

  let ans = 0;
  for (const row of input) {
    const split = row.split(',');
    const a = split[0].split('-').map(Number);
    const b = split[1].split('-').map(Number);

    if ((a[0] >= b[0] && a[0] <= b[1]) || (b[0] >= a[0] && b[0] <= a[1])) {
      ans++;
    }
  }
  return ans;
};
