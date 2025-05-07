const p = document.querySelector("p")

let number = 0

function display()  {
    p.innerText = number
}
function sub1() {
    number--
    display()
}
function reset() {
    number = 0
    display()
}
function add1() {
    number++
    display()
}
function sub10()    {
    number = number -10
    display()
}
function add10() {
    number = number +10
    display()
}

