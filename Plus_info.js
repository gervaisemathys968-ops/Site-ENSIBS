function AfficheTextes() { 
    document.getElementById("retrouvez").style.fontSize = "35px"; 
    document.getElementById("retrouvez").style.color = "white"; 
    document.getElementById("retrouvez").style.backgroundColor = "blue"; 
    document.getElementById("retrouvez").innerHTML = "Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient"; 
} 
 
function AffichageDate() { 
    document.getElementById("Button-Derniere-Consultation").textContent = new Date().toLocaleString("fr-FR", { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit"});
}