use std::fs;

fn main() {
    let input = fs::read_to_string("data/day02.txt").expect("Failed to read input file");

    let part1_ans = part1(&input);
    println!("Part 1: {}", part1_ans);

    let part2_ans = part2(&input);
    println!("Part 2: {}", part2_ans);
}

fn part1(input: &str) -> i32 {
    let ans = input
        .split("\n")
        .map(|x| match x {
            "A X" => 3 + 1,
            "A Y" => 6 + 2,
            "A Z" => 0 + 3,
            "B X" => 0 + 1,
            "B Y" => 3 + 2,
            "B Z" => 6 + 3,
            "C X" => 6 + 1,
            "C Y" => 0 + 2,
            "C Z" => 3 + 3,
            _ => 0,
        })
        .sum::<i32>();

    ans
}

fn part2(input: &str) -> i32 {
    let ans = input
        .split("\n")
        .map(|x| match x {
            "A X" => 0 + 3,
            "A Y" => 3 + 1,
            "A Z" => 6 + 2,
            "B X" => 0 + 1,
            "B Y" => 3 + 2,
            "B Z" => 6 + 3,
            "C X" => 0 + 2,
            "C Y" => 3 + 3,
            "C Z" => 6 + 1,
            _ => 0,
        })
        .sum::<i32>();

    ans
}
