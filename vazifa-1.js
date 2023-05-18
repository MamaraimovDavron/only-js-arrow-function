let getMonth = (fasl) => {
    switch(fasl){
        case "Yanvar":
            console.log("Qish");
            break;
        case "Fevral":
            console.log("Qish");
            break;
        case "Dekabr":
            console.log("Qish");
            break;
        case "Mart":
            console.log("Bahor");
            break;
        case "Aprel":
            console.log("Bahor");
            break;
        case "May":
            console.log("Bahor");
            break;
        case "Iyun":
            console.log("Yoz");
            break;
        case "Iyul":
            console.log("Yoz");
            break;
        case "Avgust":
            console.log("Yoz");
            break;
        case "Sentabr":
            console.log("Kuz");
            break;
        case "Oktabr":
            console.log("Kuz");
            break;
        case "Noyabr":
            console.log("Kuz");
            break;
        default :
            console.log("Bunday oy mavjud emas!");
            break;
    }
}

getMonth('Iyun');