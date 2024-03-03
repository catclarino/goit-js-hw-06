const counterValue = document.querySelector('#value')

const decrBtn = document.querySelector('button[data-action="decrement"]')
const incrBtn = document.querySelector('button[data-action="increment"]')

let result = 0

decrBtn.addEventListener('click', decremental)
incrBtn.addEventListener('click', incremental)

function decremental() {
    result -= 1;
    counterValue.textContent = result
}

function incremental() {
    result += 1;
    counterValue.textContent = result
}