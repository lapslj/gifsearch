console.log("Let's get this party started!");

const sButton = document.querySelector("#sButton")
const ctr = $(".container")

console.log(sButton)
i = 0

async function getData() {
    const keyterm = $("#sTerm").val()
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyterm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response.data.data)
    let iUrl = response.data.data[i].id
    i += 1
    imgify(iUrl)
}

function imgify(url) {
    let nImg = $("<img>").attr("src",`https://i.giphy.com/media/${url}/giphy.webp`)
    console.log(url)
    $(".container").prepend(nImg)

}

function clearContainer() {
    $("img").remove()
    console.log("hey")

}


// function renderList(places){
//     const ul = document.querySelector("#ghibspots")
//     for (let place of places) {
//         const newLI = document.createElement("LI");
//         newLI.classList.toggle("mild");
//         newLI.innerHTML = `In <b>${place.name} </b> it is ${place.climate}.`;
//         ul.append(newLI)
//     }

// }

sButton.addEventListener("click",getData)
$("#rButton").on("click",clearContainer)