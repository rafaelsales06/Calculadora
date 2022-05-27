let screen = document.getElementById("screen-primal")
let screensecund = document.getElementById("screen-secund")
let numConter = 0;
let numVali = 0;
let num1 = 0;
let num2 = 0;
let parcialNumber = "";
let operation = "";
let sinal = true;


function add_number(a){
    numConter ++
    
    if(numConter <= 10){
        let numb = a.getAttribute("value");
        parcialNumber += numb;
        let numInt = parseInt(parcialNumber);
        numVali = numInt;
        screen.innerHTML = `<h1 class='calc'>${parcialNumber}</h1>`;
    };
}
function clear_All(){
    screen.innerHTML = "";
    screensecund.innerHTML = "";
    num1 = 0;
    numVali = 0;
    numConter = 0;
    sinal = true;
    parcialNumber= "";
    operation = ""
}
function clear_Parcial(){
    screen.innerHTML = "";
    sinal = true;
    numVali = 0;
    numConter = 0;
}

function porcent(){
    numVali = numVali/100
    screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
}

function operat(a,b){
    if (operation === ""){
        num1 = numVali
        screensecund.innerHTML = `<h4 class='calc'>${b} ${numVali}</h4>`;
        operation = a;   
        screen.innerHTML = ""; 
        parcialNumber= "";
        numConter = 0;
        numVali = 0;
    }else{
        num2 = numVali;
        console.log(typeof numVali)
        console.log(numVali)
        switch (operation) {
            case 'division':
                numVali = num1/num2;
                screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
                screensecund.innerHTML = "";
                numConter = 0;
                operation = "";
                parcialNumber= "";
            break

            case 'multi':
                numVali = num1*num2;
                screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
                screensecund.innerHTML = "";
                numConter = 0;
                operation = "";
                parcialNumber= "";
            break
            case 'addi':
                numVali = num1+num2;
                screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
                screensecund.innerHTML = "";
                numConter = 0;
                operation = "";
                parcialNumber= "";
            break
            case 'subtra':
                numVali = num1-num2;
                screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
                screensecund.innerHTML = "";
                numConter = 0;
                operation = "";
                parcialNumber= "";
            break
        }
        
    };
}
function result(){
    num2 = numVali
    console.log(typeof numVali)
    console.log(numVali)
    switch (operation) {
        case 'division':
            numVali = num1/num2;
            screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
            screensecund.innerHTML = "";
            numConter = 0;
            operation = "";
            parcialNumber= "";
        break
        case 'multi':
            numVali = num1*num2;
            screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
            screensecund.innerHTML = "";
            numConter = 0;
            operation = "";
            parcialNumber= "";
            console.log(numVali)
        break
        case 'addi':
            numVali = num1+num2;
            screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
            screensecund.innerHTML = "";
            numConter = 0;
            operation = "";
            parcialNumber= "";
        break
        case 'subtra':
            numVali = num1-num2;
            screen.innerHTML = `<h1 class='calc'>${numVali}</h1>`;
            screensecund.innerHTML = "";
            numConter = 0;
            operation = "";
            parcialNumber= "";
        break
    }
}
function invertSinal(){
    if(sinal == true){
        numVali = numVali * (-1);
        parcialNumber = numVali
        sinal = false;
        screen.innerHTML = `<h1 class='calc'> ${numVali}</h1>`;
        console.log(numVali)
    }
    else{
        numVali = numVali * (-1);
        parcialNumber = numVali
        sinal = true;
        screen.innerHTML = `<h1 class='calc'> ${numVali}</h1>`;
        console.log(numVali)
    }

}

