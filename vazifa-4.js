const solve = (n) => {
    if(n === 0) return 0;
    else return n + solve(n - 1);
}

console.log("n dan 1 gacha summa = " + solve(5));