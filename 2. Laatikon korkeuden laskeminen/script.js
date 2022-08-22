
let button = document.querySelector('#button');

button.addEventListener('click', function(event) {

    var tilavuus = document.laskeminen.tilavuus.value;
    if (isNaN(tilavuus) || tilavuus<0 || tilavuus == 0 ) {
        document.getElementById("virhe").innerHTML = "VIRHE!";

        return alert('Tilavuuden on oltava positiivinen luku');
    }

    var pintaala = document.laskeminen.pintaala.value;
    if (isNaN(pintaala )) {
        return alert('Pohjanpinta-alalla on oltava positiivinen luku');
    } else if (pintaala == 0 ) {
        return alert('Tapahtui nollalla jako. Laskutoimitusta ei saa tehtyä');
    } else if (pintaala <0 ) {
        return alert('Pohjanpinta-alalla on oltava positiivinen luku');
    }

    var korkeus = tilavuus / pintaala;
    document.laskeminen.korkeus.value = korkeus;


});


 
  
  


