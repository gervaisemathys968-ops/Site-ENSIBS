function promotion(year){
    var imgSrc;
    if(year == 2024){
        imgSrc = "promotion 2024.jpg"
    } else if(year == 2023){
        imgSrc = "promotion 2023.jpg"
    } else if(year == 2022){
        imgSrc = "promotion 2022.jpg"
    } else {
        imgSrc = "promotion 2021.jpg"
    }
    document.getElementById("cérémonie").src = imgSrc; /*Récupérer un objet avec son identifiant*/
}