const solve = (n) => (n === 1) ? 1 : n * solve(n - 1);

console.log(solve(4));