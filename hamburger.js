const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('nav');
const pop = document.querySelector('#popup')
const cancle = document.querySelector('.cancle')

toggle.addEventListener('click', () => {
    hamburger.classList.toggle("active")
})

window.addEventListener('load', () => {
    pop.classList.add("popActive")
})

cancle.addEventListener('click', () => {
    pop.classList.remove("popActive")
    //or pop.style.display = 'none'
})



// using if statement
// toggle.addEventListener('click', () => {
//     if (hamburger.style.display === 'flex') {
//         hamburger.style.display = 'none'
//     } else {
//         hamburger.style.display = 'flex';
//     }
// })

// hamburger.addEventListener('mouseleave', () => {
//     hamburger.style.display = 'none'
// })



