// Parent node
const parentNode = document.querySelector('#container');

// Use flex-box on '#container' (Parent Node)
parentNode.style.display = 'flex';

// Loop to add 16 squares
for(let i = 0; i < 16; i++){
    const square = document.createElement('div');
    square.style.width = '20px';
    square.style.height = '20px';
    square.style.border = '1px solid black';
    square.style.margin = '3px';
    // Row & Col
    parentNode.appendChild(square);
}