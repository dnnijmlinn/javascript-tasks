// amount of additional ingredients
var lisa = document.getElementById("lisa");
//total almount of all orders
var yhinta = document.getElementsByName("yhinta");
//array list orders. -> summa 
var array = [];

//checking the radio
function radio(){
    var inp =document.getElementsByName("rad");
    for (var i = 0; i < 3; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            var sel = (document.getElementById("pizhinta").innerHTML + inp[i].value)*1;
            document.laskeminen.phinta.value = sel + (document.laskeminen.lisa.value*1);
        }
    }
}
//checking the check box and adding to the total amount lisata1......lisata6
function lisata1(){
    var chb1 = document.getElementById("checkbox1");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb1.checked){
        document.laskeminen.phinta.value = (phinta + 0.7).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1) + 0.70).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.7.toFixed(2));
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.70).toFixed(2);

    } 
}

function lisata2(){
    var chb2 = document.getElementById("checkbox2");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb2.checked){
        document.laskeminen.phinta.value = (phinta + 0.6).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)+0.60).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.6).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.60).toFixed(2);
    } 
}

function lisata3(){
    var chb3 = document.getElementById("checkbox3");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb3.checked){
        document.laskeminen.phinta.value = (phinta + 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)+0.50).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.50).toFixed(2);
    } 
}

function lisata4(){
    var chb4 = document.getElementById("checkbox4");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb4.checked){
        document.laskeminen.phinta.value = (phinta + 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)+0.5).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.5).toFixed(2);
    } 
}

function lisata5(){
    var chb5 = document.getElementById("checkbox5");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb5.checked){
        document.laskeminen.phinta.value = (phinta + 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)+0.5).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.5).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.5).toFixed(2);
    } 
}

function lisata6(){
    var chb6 = document.getElementById("checkbox6");
    var phinta = document.getElementById("pizhinta").value;
    phinta = phinta * 1;

    if(chb6.checked){
        document.laskeminen.phinta.value = (phinta + 0.7).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)+0.7).toFixed(2);
    } else {
        document.laskeminen.phinta.value = (phinta - 0.7).toFixed(2);
        document.laskeminen.lisa.value = ((document.laskeminen.lisa.value*1)-0.7).toFixed(2);
    } 
}
//function button
let button = document.querySelector('#button');

button.addEventListener('click', function(event) {
    var chb1 = document.getElementById("checkbox1");
    var chb2 = document.getElementById("checkbox2");
    var chb3 = document.getElementById("checkbox3");
    var chb4 = document.getElementById("checkbox4");
    var chb5 = document.getElementById("checkbox5");
    var chb6 = document.getElementById("checkbox6");
    var lisata = "";
    var inp =document.getElementsByName("rad");
    
    //pizza amount and additional items
    for (var i = 0; i < 1000; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            if(inp[i].value === "5"){
                var lause = "normaali,";
            }  else if (inp[i].value === "7"){
                var lause = "perhe,";
            } 
            if(chb1.checked){
                lisata = lisata + "kinkku,";
            }
            if(chb2.checked){
                lisata = lisata + "ananas,";
            }
            if(chb3.checked){
                lisata = lisata + "tonnikala,";
            }
            if(chb4.checked){
                lisata = lisata + "herkkusieni,";
            }
            if(chb5.checked){
                lisata = lisata + "oliivi,";
            }
            if(chb6.checked){
                lisata = lisata + "lisäjuusto,";
            }

            //5 or 7 pizza
            var sel = (document.getElementById("textarea").innerHTML + (inp[i].value)*1);
            //adding an offer witnh a full order
            document.laskeminen.tpizza.value += lause + lisata
            + document.laskeminen.mhinta.value + " kpl "
            + ((sel*1) + (document.laskeminen.lisa.value*1)) + " eur " + 
            (document.laskeminen.mhinta.value * ((sel*1) + (document.laskeminen.lisa.value*1)).toFixed(2) + "eur") +  "\r\n";
            // adding the total order to the array list
            array.push((document.laskeminen.mhinta.value * ((sel*1) + (document.laskeminen.lisa.value*1))));
            //amount in the array list
            let result = array.reduce(function(sum, elem){
                return sum + elem;
            }, 0);
            document.getElementById("yhinta").value = result.toFixed(2) ;
        } 
    }
});
