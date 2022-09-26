/* 
        TO DO:
    - create delete feature 
    - create color-change feature
    - style everything 
*/
const main_container = document.querySelector('.main-container');
const container = document.getElementById('container');
const button_reset = document.getElementById('reset');

const createDivs = (amount) => {
    var amount_full = amount * amount;
    if(amount <= 100){
        for (let i = 0; i < amount_full; i++) {
            const drawable = document.createElement('div');
            drawable.id = i;
            drawable.classList = 'div-drawable'
            drawable.onmouseenter = () => {
                drawable.style.backgroundColor = 'black';
            }
            container.appendChild(drawable);
        }
        container.style.cssText = 'grid-template-columns: repeat('+ Math.sqrt(amount_full) +', 1fr)';     
        main_container.appendChild(container);
    } else {
        // ??? 
    }
}

const resetCanvas = () => {
    createDivs(64);
}


const main = () => {
    createDivs(128);
    button_reset.onclick = () => {
        resetCanvas();
    }
}

main();