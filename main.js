const btn1 = document.querySelector('.btn1');
const input = document.querySelector('.password');
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', () => {
    if (input.type == 'text') {
        input.type = 'password'
        btn1.innerHTML = '🔒'
    } else {
        input.type = 'text'
        btn1.innerHTML = '🔓'
    }
})

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    return `rgb(${r}, ${g}, ${b})` 
}

function randomDeg() {
    return Math.floor(Math.random() * 361)
}

btn2.addEventListener('click', () => {
    if (body.style.background == 'white') {
        body.style.background = randomColor()
    } else {
        body.style.background = 'white'
    }
})

btn3.addEventListener('click', () => {
    if (box.style.background == 'white') {
        box.style.background = `linear-gradient(${randomDeg()}deg, ${randomColor()}, ${randomColor()})`
    } else {
        box.style.background = 'white'
    }
})




// for (let i = 0; i < btn3.length; i++) {
//     btn3[i].addEventListener('click', () => {
//     box.style.background = randomColor()
// })
//     btn2[i].addEventListener('click', () => {
//     body.style.background = `linear-gradient(${randomDeg()}deg, ${randomColor()}, ${randomColor()})`
// })
// }











