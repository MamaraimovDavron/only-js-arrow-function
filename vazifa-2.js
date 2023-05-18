let powerOfN = (n) => {
    for(let i = 1; i <= n * n; i++){
        console.log(i);
        for(let j = 1; j <= i; j++){
            console.log(j);
        }
    }
}

powerOfN(3);