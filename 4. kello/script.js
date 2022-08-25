function Kello() {
    var str ="";
    var paivat = new Array("Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai");
    var kuukaudet = new Array("Tammikuu", "Helmiku", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu");

    var nyt = new Date();

    str += "Tänään on: " + paivat[nyt.getDay()] + ", " + nyt.getDate() + " " + kuukaudet[nyt.getMonth()] + " " + nyt.getFullYear();
    str += " " + nyt.getHours() + ":" + nyt.getMinutes() + ":" + nyt.getSeconds();

    document.getElementById("tanaan").innerHTML = str;
}

    setInterval(Kello, 1000);
