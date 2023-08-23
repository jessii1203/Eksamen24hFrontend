/* Post data JS - når alle informationer bliver givet gennem en form */


const submitRestaurant = document.getElementById("postForm");
submitRestaurant.addEventListener("submit", submitData);


async function submitData(event){

    event.preventDefault();

    const form = event.currentTarget
    const url = form.action; /* husk at skrive den rigtige url i form action i html'en */


    try
    {
        const formData = new FormData(form)
        const newObject = Object.fromEntries(formData.entries())

        console.log(newObject)

        const newObjectJsonString = JSON.stringify(newObject)

        const postToDb = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: newObjectJsonString
        }

        const fetchresponse = await fetch(url, postToDb);

        if(!fetchresponse.ok){
            const errorMessage = await response.text()
            throw new Error(errorMessage)
        }
        else {
            alert("Postet til DB")
            //og hvad den skal gøre når den er postet
        }

    } catch (error){
        alert(error.message)
    }

}

