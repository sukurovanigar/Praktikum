// //1
// var text = "";
// for (var y = 1, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal").innerHTML = text;

// //2
// var text = "";
// for (var y = 2, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal2").innerHTML = text;

// //3
// var text = "";
// for (var y = 3, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * 3 + "<br>";
// }
// document.getElementById("mal3").innerHTML = text;

// //4
// var text = "";
// for (var y = 4, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal4").innerHTML = text;

// //5
// var text = "";
// for (var y = 5, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal5").innerHTML = text;

// //6
// var text = "";
// for (var y = 6, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal6").innerHTML = text;

// //7
// var text = "";
// for (var y = 7, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal7").innerHTML = text;

// //8
// var text = "";
// for (var y = 8, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal8").innerHTML = text;

// //9
// var text = "";
// for (var y = 9, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal9").innerHTML = text;

// //10
// var text = "";
// for (var y = 10, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// }
// document.getElementById("mal10").innerHTML = text;


// // weniger code

// var text = "";
// for (var y = 1, x = 1; x <= 10; x++) {
//     text += x + " x " + y + " = " + x * y + "<br>";
// } 



// var text = "";
// var i = 0;
// while (i < 11) {
//   text += "<br>The number is " + i;
//   i++;
// }
// document.getElementById("mal10").innerHTML = text;
var text = '';
for(var x = 1; x <= 10; x++){
    for(var y = 1; y <= 10; y++){
        text += x + " x " + y + " = " + x * y + "<br>";
        document.getElementById("mal11").innerHTML = text;
    }
}

