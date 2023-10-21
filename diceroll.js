const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');


const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const status = document.querySelector('#status');

let roll1 = 0;
let roll2 = 0;

d1.addEventListener('click', function() {
    roll1 = Math.floor(Math.random() * 6) + 1;
    d1.classList.add("change");
})

d2.addEventListener('click', function() {
    roll2 = Math.floor(Math.random() * 6) + 1;
    d2.classList.add("change");
})

btn.addEventListener('click', function() {
    if (roll1 > 0 && roll2 > 0) {
        dice1.innerText = roll1;
        dice2.innerText = roll2;
        if (roll1 == roll2) {
            status.innerText = "You WIN";
        } else {
            status.innerText = "You loose";
        }
    } else {
        alert('click on the cards');
    }
})

reset.addEventListener(`click`, function() {
    window.location.reload();
})