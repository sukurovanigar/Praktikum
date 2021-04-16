function gimmiMoney() {
    // 2€ finden
    const value = document.getElementById("add").value; // 173.70 €
    const halbvalue = value / 2; //ok 173.70 / 2 = 86.85
    const euro2 = (Math.trunc(halbvalue)); //ok 86.85 trunc = 86 mal 2€ ok 
    document.getElementById("money").innerHTML = "2 € : x " + euro2; // 2€ ok 86x
    // 1€ findem
    const findDifferense = (value - (2 * euro2)).toFixed(2);//ok 173.70-(2 * 86)= 173.70 - 172.00 = 01.70 € bleibt  geld
    const euro1 = (Math.trunc(findDifferense))// 1€
    document.getElementById("money1").innerHTML = "1 € : x " + euro1;
    // 0.50 € finden
    const findCent = (findDifferense - euro1).toFixed(2); //0.70
    const cent50 = Math.trunc(findCent / 0.50);// 1 mal 0.50 cent
    document.getElementById("money2").innerHTML = "0.50 € : x " + cent50;
    // 0.20 € finden
    const findModify20 = (findCent % 0.50).toFixed(2); // 0.70 - 0.50 = 0.20
    const cent20 = Math.trunc((findModify20 / 0.20).toFixed(2)); //0.20 / 0.20 = 1
    document.getElementById("money3").innerHTML = "0.20 € : x " + cent20;
    // 0.10 € finden
    const findModify10 = (findModify20 % 0.20).toFixed(2);
    const cent10 = Math.trunc((findModify10 / 0.10).toFixed(2));
    document.getElementById("money4").innerHTML = "0.10 € : x " + cent10;
    // Jetzt wechsel it
    const checkValue2 = document.getElementById("zwei").value;
    const checkValue1 = document.getElementById("ein").value;
    const checkValue50 = document.getElementById("funfzig").value;
    const checkValue20 = document.getElementById("zwanzig").value;
    const checkValue10 = document.getElementById("zehn").value;
    // Subtraction of Values
    const take2 = checkValue2 - euro2;
    const take1 = checkValue1 - euro1;
    const take50 = checkValue50 - cent50;
    const take20 = checkValue20 - cent20;
    const take10 = checkValue10 - cent10;

    if(take2<0){
        const show1 =Math.trunc((take1-Math.abs(take2*2)).toFixed(2));
        document.getElementById("test").innerHTML="2 € : x" +checkValue2 +" 1 € : x"+show1;
    }
    
    // if(take2<0||take1<0||take50<0||take20<0||take10<0){
    //     alert("Entschuldigung! Das Geld reicht nicht. Bitte nehmen Sie Ihre Geld zürück.")
    //     document.getElementById("message").innerHTML="ACHTUNG: <br> ES GIBT KEIN GELD IN AUTOMAT"
    // }else{
    //     document.getElementById("message").innerHTML="Sie können Ihre Münze mit nehmen!"
    // }}
    document.getElementById("test2").innerHTML=take2;
    document.getElementById("test1").innerHTML=take1;
    document.getElementById("test50").innerHTML=take50;
    document.getElementById("test20").innerHTML=take20;
    document.getElementById("test10").innerHTML=take10;
}
