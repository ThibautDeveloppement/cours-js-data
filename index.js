// Rappel des types de donnees
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; //type Umdefined

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//  console.log(array[0][5]);

let array2 = ["Beziers", 15, true, [1,2], {nom: "thibaut"}]
//console.log(array2[4].nom);

let objet = {
    pseudo: "thibaut",
    age: 33,
    technos: ["Javascript", "React", "nodeJs"],
    admin: false
}

//objet.adresse = "7 rue du code"
//console.log(objet.technos[1][3]);

let data = [
{
    pseudo: "thibaut",
    age: 27,
    technos: ["Javascript", "React", "nodeJs"],
    admin: false,
},
{
    pseudo: "olivia",
    age: 29,
    technos: ["css", "React", "nodeJs"],
    admin: false,
},
{
    pseudo: "sally",
    age: 2,
    technos: ["php", "React", "nodeJs"],
    admin: true,
}
]

//console.log(data[2].pseudo);

//---------------------------------------------
//structures de controle
//---------------------------------------------

if(data[0].age > data[1].age){
    //console.log(data[0].pseudo + " est plus vieux que " + data[1].pseudo);
}
else{
    // console.log(data[1].pseudo + " est plus vieille que " + data[0].pseudo);
}

//ce cours prepare la gestion de data de javascript