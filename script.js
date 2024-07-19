let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.getElementById('.container')
let items = document.querySelectorAll('.list.item')
let indicator = document.querySelectorAll('.indicators')
let dots = document.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


//quando clicado


nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')
    
}
prevButton.onclick = () =>{
}


    
