import { configSync } from 'https://deno.land/std@0.166.0/dotenv/mod.ts';
import { part1, part2 } from './solution.ts';

(async function () {
  try {
    const input = await Deno.readTextFile(
      `${configSync().INPUT_PATH}/day6/input.txt`
    );

    console.log('---- Part 1 ----');
    console.log('Part1 Result:', part1(input));

    console.log('---- Part 2 ----');
    console.log('Part2 Result:', part2(input));
  } catch (err) {
    console.error(err);
  }
})();
