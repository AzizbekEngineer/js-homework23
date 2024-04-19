const wrapper = document.querySelector(".wrapper")
const form = document.querySelector(".form")
const fname = document.querySelector(".fname")
const lname = document.querySelector(".lname")
const inputValue = document.querySelector('.inputValue')

const DATA = [
    {
        id: "1",
        fname: "John",
        lname: "Doe"
    },
    {
        id: "2",
        fname: "Selena",
        lname: "Gomez"
    },
]

class User {
    constructor(fname, lname) {
        this.id = `${new Date().getTime()}`
        this.fname = fname
        this.lname = lname
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newUser = new User(fname.value, lname.value)
    DATA.push(newUser)
    console.log(DATA);
    createCard(DATA)
    inputValue.value = ''

    // let card = document.createElement('div')
    // card.classList.add('card')
    // card.innerHTML += `
    // <div class="card__image"></div>
    //     <h3>${fname.value}</h3>
    //     <p>${fname.value}</p>
    //     <button>Delete</button>
    //      <button>Edit</button>
    // </div>
    // `
    // wrapper.appendChild(card)
})


function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove()
    }
    let fragment = document.createDocumentFragment()
    data.forEach((user) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <div class="card__image"></div>
            <h3>${user.fname}</h3>
            <p>${user.lname}</p>
            <button>Delete</button>
            <button>Edit</button>
        `
        fragment.appendChild(card)
    })
    wrapper.appendChild(fragment)
}
createCard(DATA)