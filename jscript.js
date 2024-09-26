let container = document.querySelector(".container");

function create(num) {
    container.innerHTML = '';
    let squaresize = 960 / num;
    for (let i = 0; i < num; i++) {
        let bigsquare = document.createElement("div");
        bigsquare.classList.add("bigsquare");
        for (let i = 0; i < num; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squaresize}px`;
            square.style.height =  `${squaresize}px`;
            bigsquare.appendChild(square);
        }
        container.appendChild(bigsquare);
    }
}

create(16);
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let input = prompt("Choose a number from 1 - 100");
    if (isNaN(input) || input < 1 || input > 100) {
        alert('Please choose a number from 1 to 100');
        return;
    }
    number = parseInt(input)
    create(number);
})