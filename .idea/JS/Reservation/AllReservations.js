
function fetchAny(url) {
    return fetch(url).then((response) => response.json())
}
const tableBody = document.getElementById("tableBody")
document.addEventListener("DOMContentLoaded", fetchData)

async function fetchData(){

    const url = "http://localhost:8080/reservation/getAllData"

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
        "<td>" + data.customer.name + "</td>" +
        "<td>" + data.album.title + "</td>" +
        "<td>" + data.album.artist + "</td>" +
        "<td>" + data.reservationStatus + "</td>" +
        "<td>" +
        "<button class='dataRowBtn' id='rowBtn" + index + "' value='" + JSON.stringify(data) + "'>Afmeld</button>" +
        "</td>"

    tableBody.appendChild(tr)

    //hent knappen fra tabellen
    const btn = document.getElementById("rowBtn" + index);

    //Knappen skal have en eventlistener
    btn.addEventListener("click", () => {


        const url = "http://localhost:8080/reservation/updateData/"+data.id

        let confirmCancel = confirm("Er du sikker på at du vil afmelde?")
        if (confirmCancel){

            data.reservationStatus = "AFMELDT";

            restUpdateData(url,data)
        }
        localStorage.setItem("chosenAlbum", JSON.stringify(data))
        window.location.href="AllReservations.html" //loader siden igen


    })

}

async function restUpdateData(url, data) {

    const updatedData = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    }

    const response = await fetch(url, updatedData);

    if (!response.ok) {
        alert("Det gik ikke godt med update");
    } else {
        alert("Data er opdateret");
    }

    return response;
}