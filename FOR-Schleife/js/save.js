
document.write("<h1>Zahlenpyramide</h1>")
function pyramid() {
    var row = 4;
    var output = "";
    var zahl = "1";
    var myspace = "";
    for (var i = 0; i < row; i++) {
        for (var s = 0; s < (row - i - 2); s++) {
            myspace += " ";
        }
        for (var col = 1; col <= i + 1; col++) {
            output += zahl;
            zahl++;
        }
        document.write("<center>");
        document.write(myspace + output+ "<br>");
        output = "";
    }
}
pyramid();
//1
var text = "";
for (var y = 1, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal").innerHTML = text;

//2
var text = "";
for (var y = 2, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal2").innerHTML = text;

//3
var text = "";
for (var y = 3, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * 3 + "<br>";
}
document.getElementById("mal3").innerHTML = text;

//4
var text = "";
for (var y = 4, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal4").innerHTML = text;

//5
var text = "";
for (var y = 5, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal5").innerHTML = text;

//6
var text = "";
for (var y = 6, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal6").innerHTML = text;

//7
var text = "";
for (var y = 7, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal7").innerHTML = text;

//8
var text = "";
for (var y = 8, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal8").innerHTML = text;

//9
var text = "";
for (var y = 9, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal9").innerHTML = text;

//10
var text = "";
for (var y = 10, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
}
document.getElementById("mal10").innerHTML = text;


// weniger code

var text = "";
for (var y = 1, x = 1; x <= 10; x++) {
    text += x + " x " + y + " = " + x * y + "<br>";
} 



var text = "";
var i = 0;
while (i < 11) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("mal10").innerHTML = text;


// wechselautomat

function gimmiMoney() {
    // 2€ finden
    const value17370 = document.getElementById("add").value; // 173.70 €
    const price8685 = value17370 / 2; //ok 173.70 / 2 = 86.85
    const price3_86 = (Math.trunc(price8685)); //ok 86.85 trunc = 86 mal 2€ ok 
    document.getElementById("money").innerHTML = "2€: " + (price3_86) + "x"; // 2€ ok 86x
    // 1€ findem
    const price1 = (value17370 - (2 * price3_86)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const price4_1 = Math.abs(Math.trunc(price1))// 1€
    document.getElementById("money1").innerHTML = "1€: " + "0" + (price4_1) + "x";
    // 0.50 € finden
    const cent = (price1 - price4_1).toFixed(2); //0.70

    // if(cent==0.90){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 02x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.80){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 01x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.70){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 01x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.60){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 00x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.50){
    //     document.getElementById("money2").innerHTML="0.50€ : 01x <br> 0.20€ : 00x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.40){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 02x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.30){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 01x <br> 0.10€ : 01x <br>"
    // }else if(cent==0.20){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 01x <br> 0.10€ : 00x <br>"
    // }else if(cent==0.10){
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 00x <br> 0.10€ : 01x <br>"
    // }else {
    //     document.getElementById("money2").innerHTML="0.50€ : 00x <br> 0.20€ : 00x <br> 0.10€ : 00x <br>"
    // }
    if (cent == 0.00) {
        document.getElementById("money3").innerHTML = "es gibt kein Cent"
    }
    if (cent >= 0.09) {
        const price6 = cent / 0.50;// 1 mal 0.50 cent
        document.getElementById("money2").innerHTML = "0.50€: " + "0" + (Math.trunc(price6)) + "x";
        // 0.20 € finden
        if(cent== 0.40){
            document.getElementById("money3").innerHTML = "0.20€: " + "02x";
        }else{
        const price7_020 = (cent - 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
        const price8 = (price7_020 / 0.20).toFixed(2); //0.20 / 0.20 = 1
        document.getElementById("money3").innerHTML = "0.20€: " + "0" + Math.abs(Math.trunc(price8)) + "x";
        }
        
        // 0.10 € finden
        const price9 = ((cent - 0.70) / 0.10).toFixed(2)
        if (cent == 0.90 || cent == 0.20 || cent== 0.50|| cent== 0.40) {
            document.getElementById("money4").innerHTML = "0.10€: 00x";
        } else {
            document.getElementById("money4").innerHTML = "0.10€: 0" + Math.abs(Math.trunc(price9)) + "x";
        }
    }
}
// HILFSNOTEN:

// value17370 = 173.70 € 
// price8685 = 86.85 €
// price3_86 = 86.00 €
// price1 = 01.70 €
// price4_1 = 1€
// cent = 0.70 €
// price6 = es gibt nur 1 mal 0.50 in 0.70.
// price7_020 = 0,20
// price8 = 1

