// Root node
const root = document.querySelector('body')

// parent Node
const parentNode = document.querySelector('#container');
parentNode.style.display = 'flex';
parentNode.style.flexWrap = 'wrap';
parentNode.style.width = '460px';

// Enter number of pixels
const btnPixel = document.createElement('button');
const header = document.querySelector('h1');
btnPixel.classList.add('btn_pixels');
btnPixel.textContent = 'Enter Pixels';
root.appendChild(btnPixel);
header.after(btnPixel);

// Create the 'change color' button
const btnColor = document.createElement('button');
btnColor.classList.add('btn_color');
btnColor.textContent = 'Change Color';
root.appendChild(btnColor);

// Prompt the number of pixels
btnPixel.addEventListener('click', function(){
    const pixels = prompt('Enter the number of pixels:');
    canvas(pixels);
});


// Let's play!
function canvas(num){
    // Add Pixel
    for(let i = 0; i < num; i++){
        const square = document.createElement('div');
        square.classList.add('pixel');
        square.style.width = '20px';
        square.style.height = '20px';
        square.style.border = '1px solid black';
        square.style.margin = '3px';
        parentNode.appendChild(square);
    }
    // Start sketching
    const allPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].addEventListener('mouseenter', function() {
        allPixels[i].style.backgroundColor = 'black';
        });
    }
    // Change color
    btnColor.addEventListener('click', function(){
        const color = prompt('What color do you want?');
        for(let i = 0; i < allPixels.length; i++){
            allPixels[i].addEventListener('mouseenter', function(){
            allPixels[i].style.backgroundColor = color;
        })
        }
    });
}
