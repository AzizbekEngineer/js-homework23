const title = document.querySelector(".title")

title.dataset.fname = "Mike"
title.dataset.address = "New York"

// console.log(title.getAttribute("id"));
console.log(title.id);
console.log(title.dataset.fname);
console.log(title.dataset.userAge);


const span = document.querySelector(".title span")
const collection = document.querySelector(".collection")

collection.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        span.innerHTML = e.target.innerHTML
    }else if(e.target.tagName === "BUTTON"){
        alert("Button click")
    }
})







// const items = document.querySelectorAll(".collection li")
// items.forEach(li => {
//     li.addEventListener("click", e => {
//         span.innerHTML = e.target.innerHTML
//     })
// })