import { configSync } from 'https://deno.land/std@0.166.0/dotenv/mod.ts';

// Parse arguments
const args = Deno.args;
if (args.length > 1) {
  console.log('Too many arguments');
  Deno.exit(1);
}

const day = args[0];
const year = configSync().YEAR;
// Validate date
if (Number(day) <= 0 || Number(day) > 25) {
  console.log('Invalid day.');
  Deno.exit(1);
}

console.log('Fetching input...');
const rawInput = await fetch(
  `https://adventofcode.com/${year}/day/${day}/input`,
  {
    headers: {
      cookie: `session=${configSync().SESSION}`,
    },
  }
);

const realInput = rawInput.status === 200 ? await rawInput.text() : null;
if (realInput === null) {
  console.log('Failed to fetch input with a status of', rawInput.status);
  Deno.exit(1);
}

console.log('Creating directory...');
Deno.mkdirSync(`days/day${day}`);

console.log('Writing input...');
Deno.writeTextFileSync(`days/day${day}/input.txt`, realInput);

console.log('Creating files from template...');
Deno.copyFileSync('template/day-template.ts', `days/day${day}/day-template.ts`);
Deno.renameSync(`days/day${day}/day-template.ts`, `days/day${day}/solution.ts`);

Deno.copyFileSync(
  'template/main-template.ts',
  `days/day${day}/main-template.ts`
);
Deno.renameSync(`days/day${day}/main-template.ts`, `days/day${day}/main.ts`);

console.log('Done!');
