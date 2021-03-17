const inputAdults= document.getElementById("adults");
const inputChildren= document.getElementById("children");
const inputDuration= document.getElementById("duration");

let results= document.getElementById("results");

function calc(){

    const adults=inputAdults.value;
    const children=inputChildren.value;
    const duration=inputDuration.value;

    let qntMeat= meatCalc(duration)*adults+(meatCalc(duration)/2*children);
    let qntBeer= beerCalc(duration)*adults;
    let qntDrinks= drinksCalc(duration)*adults+(drinksCalc(duration)/2*children);

    results.innerHTML = `<p>${qntMeat/1000}Kg de Carne</p>`;
    results.innerHTML += `<p>${Math.ceil(qntBeer/355)} Latinhas de Cerveja</p>`;
    results.innerHTML += `<p>${Math.ceil(qntDrinks/2000)} Garrafas(2LT) de Refrigerante e Água</p>`;

}



function meatCalc(duration){
    if(duration>=6){
        return 650
    }
    else{
        return 400
    }
}

function beerCalc(duration){
    if(duration>=6){
        return 2000
    }
    else{
        return 1200
    }
}

function drinksCalc(duration){
    if(duration>=6){
        return 1500
    }
    else{
        return 1000
    }
}