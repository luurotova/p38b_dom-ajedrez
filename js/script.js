const allCells = document.querySelectorAll('[value="negra"]');
const btn = document.querySelector("button");

btn.addEventListener("click", paintCell);

function paintCell(){
    allCells.forEach(cell => {
        cell.classList.toggle("red-cell");
    })
}

