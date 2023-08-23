
//opdater data - når objektet hentes fra en localStorage

//henter fra localstorage
const savedData = JSON.parse(localStorage.getItem('chosenAlbum'));

document.addEventListener('DOMContentLoaded', editData
);


//FØRST VISER VI DATA I INPUT FIELDS
function editData(){
    console.log(savedData)
    //hent først inputfields fra html'en så vi kan udfylde dem

    const data1 = document.getElementById("title")
    const data2 = document.getElementById("artist")
    const data3 = document.getElementById("genre")
    const data4 = document.getElementById("availability")

    //udfyld inputfields nu med data fra objektet

    data1.value = savedData.title
    data2.value = savedData.artist
    data3.value = savedData.genre
    data4.value = savedData.availability



}

//nu til knappen der skal poste til db

const updateBtn = document.getElementById("updateBtn")
updateBtn.addEventListener("click", updateData)

async function updateData(){
    console.log("her")

    //først hentes de nye værdier fra inputfields
    const inputFields = document.querySelectorAll('.updateInputField');

    //tjekker for alle felter og opdaterer objektet hvis der er ændringer

    inputFields.forEach(inputField => {
        const fieldName = inputField.name;
        const fieldValue = inputField.value.trim(); //trimmer mellemrum

        if (fieldValue !== savedData[fieldName]) {
            savedData[fieldName] = fieldValue;
        }
    });
    console.log(savedData)

    await postUpdatedData();
}

async function postUpdatedData() {
    console.log("test123")
    const url = "http://localhost:8080/album/updateData/" + savedData.id;
    console.log("test1234")

    const updatedData = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(savedData)
    }

    //calls backend and wait for return
    const response = await fetch(url, updatedData);

    console.log(response)

    if (!response.ok) {
        alert("Det gik ikke godt med update");
    }
    else {
        alert("Postet")
       window.location.href = "AllAlbums.html"
    }

    return response;
}

const deleteBtn = document.getElementById("sletKnap")
deleteBtn.addEventListener("click", restDelete)

async function restDelete() {

    const url = "http://localhost:8080/album/deleteData/" + savedData.id


    const deleteData ={
        method: "DELETE",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(savedData)
    }

    const response = await fetch(url, deleteData)

    if (!response.ok){
        alert("failed to delete")

    }
    else {
        alert("deleted")
        window.location.href = "AllAlbums.html"
    }

    return response

}