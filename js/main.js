const liste = document.querySelector("#programme");
let pageState = "all";
liste.innerHTML = programme.map((Evenement) => Evenement.carte()).join(' ');

const barre = document.getElementById("laBarre")



const eauDouce = document.getElementById("btnEauDouce")
const eauSalee = document.getElementById("btnEauSalee")
const eauProfonde = document.getElementById("btnEauProfonde")
const tout = document.getElementById("btnTout")

eauDouce.addEventListener("click", function(){
    programmeSecondaire = programme.filter(Evenement => Evenement.type === 'Eau Douce')
    liste.innerHTML = programmeSecondaire.map((Evenement) => Evenement.carte()).join(' ')
    console.log("Le DRUK")
});

eauSalee.addEventListener("click", function(){
    programmeSecondaire = programme.filter(Evenement => Evenement.type === 'Eau Salée')
    liste.innerHTML = programmeSecondaire.map((Evenement) => Evenement.carte()).join(' ')
    console.log("Le drapeau tunisien")
});

eauProfonde.addEventListener("click", function(){
    programmeSecondaire = programme.filter(Evenement => Evenement.type === 'Eau Profonde')
    liste.innerHTML = programmeSecondaire.map((Evenement) => Evenement.carte()).join(' ')
    console.log("Brique")
});

tout.addEventListener("click", function(){
    console.log("Flamant rose")
    liste.innerHTML = programme.map((Evenement) => Evenement.carte()).join(' ');

});

barre.addEventListener("input",function(){

    programmeSecondaire = programme.filter(Evenement => Evenement.nomV.toLowerCase().match(barre.value.toLowerCase()))
    liste.innerHTML = programmeSecondaire.map((Evenement) => Evenement.carte()).join(' ')

    console.log(barre.value)
})

