const solve = (n) => {
    if(n === 0) return 0;
    else return solve(n - 1) + n;
}

console.log("1 dan n gacha summa = " + solve(15));