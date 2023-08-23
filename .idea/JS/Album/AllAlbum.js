
function fetchAny(url) {
    return fetch(url).then((response) => response.json())
}
const tableBody = document.getElementById("tableBody")
document.addEventListener("DOMContentLoaded", fetchData)

async function fetchData(){

    const url = "http://localhost:8080/album/getAllData"

    const data = await fetchAny(url)

    tableBody.innerHTML = ""

    data.forEach(putDataInTableWButton)

}


function putDataInTableWButton(data, index){

    //Index er det reservationens nummer/plads i arrayet, som for each loop selv kan tælle op for os
    //så hver knap har en unik id der består af index tallet
    //knappen har hele dataen som value


    const tr = document.createElement("tr")

    tr.innerHTML =
        "<td>" + data.id + "</td>" +
        "<td>" + data.title + "</td>" +
        "<td>" + data.artist + "</td>" +
        "<td>" + data.genre + "</td>" +
        "<td>" + data.availability + "</td>" +
        "<td>" +
        "<button class='dataRowBtn' id='rowBtn" + index + "' value='" + JSON.stringify(data) + "'>vælg</button>" +
        "</td>"

    tableBody.appendChild(tr)

    //hent knappen fra tabellen
    const btn = document.getElementById("rowBtn" + index);

    //Knappen skal have en eventlistener
    btn.addEventListener("click", () => {


        localStorage.setItem("chosenAlbum", JSON.stringify(data))
        window.location.href="oneAlbum.html"


    })


}