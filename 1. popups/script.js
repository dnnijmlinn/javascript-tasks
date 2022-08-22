    
let button = document.querySelector('#button');

button.addEventListener('click', function(event) {
    let message = prompt('Kirjoita säde');
    let a =  3.14 * message * message;
    let virhe = "Syöte ei ole numeerisessa muodossa!";
    
    if(message /1){
        alert(a);
        document.getElementById("virhe").innerHTML = "Ympyrän pinta-ala on " + a;

    } else {
        alert(virhe);
        document.getElementById("virhe").innerHTML = "Syöte ei ole numeerisessa muodossa!";
    }
    
});
