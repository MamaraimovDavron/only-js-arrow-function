let getMonth = (fasl) => {
    switch(fasl){
        case "Qish":
            console.log("Yanvar");
            console.log("Fevral");
            console.log("Dekabr");
            break;

        case "Bahor":
            console.log("Mart");
            console.log("Aprel");
            console.log("May");
            break;

        case "Yoz":
            console.log("Iyun");
            console.log("Iyul");
            console.log("Avgust");
            break;

        case "Kuz":
            console.log("Sentabr");
            console.log("Oktabr");
            console.log("Noyabr");
            break;
        
        default :
            console.log("Bunday fasl mavjud emas!");
            break;
    }
}

getMonth('Qish');