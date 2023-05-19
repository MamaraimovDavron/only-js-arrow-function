let value = 1;
let powerOfN = (n) => {
    for(let i = 0; i < n; i++){
        let row = '';
        for(let j = 0; j < n; j++){
            row += value ++ + " ";
        }
        console.log(row);
    }

}



powerOfN(10);  