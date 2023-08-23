function fetchAny(url) {
    console.log(url);
    return fetch(url).then((response) => response.json());
}

async function fetchData(url, selectId) {
    const data = await fetchAny(url);
    putDataInDropdown(data, selectId);
}

function putDataInDropdown(data, selectId) {
    const dropdown = document.getElementById(selectId);

    data.forEach(item => {
        const option = document.createElement("option");

        if (selectId=="selectCustomer"){

            option.innerHTML = item.name + " - " + item.email
        }


        else if (selectId=="selectAlbum"){

            option.innerHTML = item.title + " - " + item.artist
        }

        option.value = JSON.stringify(item);
        dropdown.appendChild(option);
    });
}

const urlCustomer = "http://localhost:8080/customer/getAllData";
const urlAlbums = "http://localhost:8080/album/availability/AVAILABLE"; //kun dem der er tilgengældige

fetchData(urlCustomer, "selectCustomer");
fetchData(urlAlbums, "selectAlbum");


/* Post data JS - gennem en form */


const submitRestaurant = document.getElementById("postForm");
submitRestaurant.addEventListener("submit", submitData);


async function submitData(event){

    const selectedCustomer = document.querySelector("#selectCustomer")
    const selectedAlbum = document.querySelector("#selectAlbum")

    event.preventDefault();

    const form = event.currentTarget
    const url =" http://localhost:8080/reservation/postData"

    try
    {

       const newObjectJsonString = {
            "customer": JSON.parse(selectedCustomer.value),
            "album": JSON.parse(selectedAlbum.value)
       }

        console.log(newObjectJsonString)

        const postToDb = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObjectJsonString)
        }

        const fetchresponse = await fetch(url, postToDb);

        if(!fetchresponse.ok){
            const errorMessage = await response.text()
            throw new Error(errorMessage)
        }
        else {
            alert("Postet til DB")
            window.location.href="AllReservations.html"
        }

    } catch (error){
        alert(error.message)
    }

}


