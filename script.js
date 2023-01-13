//your code here
var span = document.getElementsByTagName("span")[0]
var orderedList = document.getElementById("orderedList")
var prevBtn = document.getElementById("load_prev")
var nextBtn = document.getElementById("load_next")

var pageNumberHere = 1

var apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${pageNumberHere}  + &per_page=5`

async function fetching() {
    var apiData = await fetch(apiLink)
    var apiDataConvert = await apiData.json()
    // console.log(apiDataConvert)
    insert(apiDataConvert)
}

document.addEventListener('DOMContentLoaded', fetching)


function insert(dataName) {
    dataName.map((e) => {
        span.textContent = pageNumberHere
        var listItem = document.createElement("li")
        listItem.textContent = e.title
        orderedList.append(listItem)
    })
    console.log(dataName)
}


function nextPage() {
    orderedList.textContent = ""
    pageNumberHere++
    apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${pageNumberHere}  + &per_page=5`
    fetching()
}

nextBtn.addEventListener('click', nextPage)


function prevPage() {
    if (pageNumberHere > 1) {
        orderedList.textContent = ""
        pageNumberHere--
        apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${pageNumberHere}  + &per_page=5`
        fetching()
    }
}

prevBtn.addEventListener('click', prevPage)