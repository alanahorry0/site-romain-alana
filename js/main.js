const liste = document.querySelector("#programme");
let pageState = "all";
liste.innerHTML = programme.map((Evenement) => Evenement.carte()).join(' ');




const eauDouce = document.getElementById("btnEauDouce")
const eauSalee = document.getElementById("btnEauSalee")
const eauProfonde = document.getElementById("btnEauProfonde")

eauDouce.addEventListener("click", function(){
    programme = programme.filter(evenement => evenement.type === 'EauProfonde')
    liste.innerHTML = programme.map((Evenement) => Evenement.carte()).join(' ')
});
eauSalee.addEventListener("click", function(){
    liste.innerHTML = programme.map((Evenement) => Evenement.carte()).join(' ')
});
eauProfonde.addEventListener("click", function(){

});

