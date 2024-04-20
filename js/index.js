import { Mahsulot } from "./class.js"
import { MAHSULOTDATA } from "./const.js"

const wrapper = document.querySelector(".wrapper")
const addModule = document.querySelector('.add__modul')
const module = document.querySelector('.module')
const closeWindow = document.querySelector('.close__window')
const cancelBtn = document.querySelector('.form__btn__cancel');
const form = document.querySelector(".form")
const name = document.querySelector(".name")
const quantity = document.querySelector(".quantity")
const unit = document.querySelector("#unit")
const price = document.querySelector(".price")
const color = document.querySelector(".color")
const url = document.querySelector(".url")
const inputValue = document.querySelectorAll('.inputValue')

const DATA = JSON.parse(localStorage.getItem(MAHSULOTDATA)) || [
    {
        id: "1",
        name: "Banana",
        quantity: 15,
        unit: 'kg',
        price: 20_000,
        color: 'white',

        url: 'https://digitalfish.tv/wp-content/uploads/2019/04/Platano-HD-4-5.png'
    },
    {
        id: "2",
        name: "Sut",
        quantity: 20,
        unit: 'litr',
        price: 8_000,
        color: 'white',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg'
    },
    {
        id: "3",
        name: "Sut",
        quantity: 20,
        unit: 'litr',
        price: 8_000,
        color: 'white',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg'
    },
]





form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newMahsulot = new Mahsulot(url.value, name.value, quantity.value, unit.value, price.value, color.value)
    DATA.push(newMahsulot)
    localStorage.setItem(MAHSULOTDATA, JSON.stringify(DATA))
    createCard(DATA)
    inputValue.forEach(input => {
        input.value = ""
    })

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
            <div class="card__image">
                <img src="${user.url}" alt="">
            </div>
            <h3><span>Mahsulot Nomi: </span>${user.name}</h3>
            <p><span>Mahsulot Soni: </span>${user.quantity}</p>
            <p><span>Mahsulot Miqdori: </span>${user.unit}</p>
            <p><span>Mahsulot Narxi: </span>${user.price}</p>
            <p><span>Mahsulot Rangi: </span>${user.color}</p>
            <button class="btnRed" name="delete" data-id = '${user.id}'>Delete</button>
            <button class="btn" name="edit">Edit</button>
        `
        fragment.appendChild(card)
    })
    wrapper.appendChild(fragment)
}
createCard(DATA)

const deletUser = (id) => {
    if (!confirm("O'chirib yuborishga ishonchingiz komilmi! ")) return
    let index = DATA.findIndex(u => u.id === id)
    DATA.splice(index, 1)
    createCard(DATA)
}

wrapper.addEventListener('click', (e) => {
    if (e.target.name === 'delete') {
        deletUser(e.target.dataset.id);
    }
})



addModule.addEventListener('click', (e) => {
    closeWindow.style.display = 'block'
    module.style.display = 'flex'
})

closeWindow.addEventListener('click', (e) => {
    module.style.display = 'none'
    closeWindow.style.display = 'none'
})
cancelBtn.addEventListener('click', (e) => {
    console.log('ok');
    module.style.display = 'none'
    closeWindow.style.display = 'none'
})
