
let button = document.querySelector('#buttonlas');

button.addEventListener('click', function(event) {

    var leveys = document.laskeminen.leveys.value;
    if (isNaN(leveys )) {
        document.getElementById("virhel").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    } else if (leveys == 0 ) {
        document.getElementById("virhel").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('Tapahtui nollalla jako. Laskutoimitusta ei saa tehtyä');
    } else if (leveys <0 ) {
        document.getElementById("virhel").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    }

    var korkeus = document.laskeminen.korkeus.value;
    if (isNaN(korkeus )) {
        document.getElementById("virhek").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    } else if (korkeus == 0 ) {
        document.getElementById("virhek").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('Tapahtui nollalla jako. Laskutoimitusta ei saa tehtyä');
    } else if (korkeus <0 ) {
        document.getElementById("virhek").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    }

    var syvyys = document.laskeminen.syvyys.value;
    if (isNaN(syvyys )) {
        document.getElementById("virhes").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    } else if (syvyys == 0 ) {
        document.getElementById("virhes").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('Tapahtui nollalla jako. Laskutoimitusta ei saa tehtyä');
    } else if (syvyys <0 ) {
        document.getElementById("virhes").innerHTML = "Ole hyvä ja anna lukuja, joka ovat suurempia kuin nolla!";
        return alert('On oltava positiivinen luku');
    }

    var tilavuus = leveys * korkeus * syvyys;
    tilavuus = ( tilavuus.toFixed(2) );

    document.laskeminen.tilavuus.value = tilavuus;

});


 
  
