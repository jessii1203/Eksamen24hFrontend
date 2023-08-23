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
        option.innerHTML = item.name; // Assuming item has a 'name' property
        option.value = JSON.stringify(item); // Convert object to JSON string

        dropdown.appendChild(option);
    });
}

const urlCustomer = "http://localhost:8080/customer/getAllData";
const urlAlbums = "http://localhost:8080/album/getAllData";

fetchData(urlCustomer, "selectCustomer");
fetchData(urlAlbums, "selectAlbum");
