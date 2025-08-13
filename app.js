const parentNode = document.querySelector('#container');

function canvas(num){
    for(let i = 0; i < num; i++){
        const square = document.createElement('div');
        square.style.width = '20px';
        square.style.height = '20px';
        square.style.border = '1px solid black';
        square.style.margin = '3px';
        parentNode.appendChild(square);
    }
}

canvas(256);