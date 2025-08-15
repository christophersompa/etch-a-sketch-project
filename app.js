const parentNode = document.querySelector('#container');

parentNode.style.display = 'flex';
parentNode.style.flexWrap = 'wrap';
parentNode.style.width = '460px';

function canvas(num){
    for(let i = 0; i < num; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '20px';
        square.style.height = '20px';
        square.style.border = '1px solid black';
        square.style.margin = '3px';
        parentNode.appendChild(square);
    }
}

canvas(256);

// This returns HTML Collections, you'll need to loop over them
const allSquares = document.getElementsByClassName('square');

for (let i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener('mouseenter', function() {
    allSquares[i].style.backgroundColor = 'red';
  });
}
