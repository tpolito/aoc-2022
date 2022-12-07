use std::fs;

fn main() {
    let input = fs::read_to_string("data/day01.txt").expect("Failed to read input file");

    let part1_ans = part1(&input);
    println!("Part 1: {}", part1_ans);

    let part2_ans = part2(&input);
    println!("Part 2: {}", part2_ans);
}

fn part1(input: &str) -> i32 {
    let ans = input
        .split("\n\n")
        .map(|elf| {
            elf.lines()
                .map(|cal| cal.parse::<i32>().unwrap())
                .sum::<i32>()
        })
        .max()
        .unwrap();

    ans
}

fn part2(input: &str) -> i32 {
    let mut ans: Vec<i32> = input
        .split("\n\n")
        .map(|elf| {
            elf.split("\n")
                .map(|cal| cal.parse::<i32>().unwrap())
                .sum::<i32>()
        })
        .collect();

    ans.sort();
    ans.iter().rev().take(3).sum()
}
