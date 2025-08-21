const root = document.querySelector('body')
const container = document.querySelector('#container');
const header = document.querySelector('h1');

const addPxl = document.createElement('button');
const chgColor = document.createElement('button');
const canvas = document.createElement('div');
const operators = document.createElement('div');

container.appendChild(header);

operators.classList.add('operators');
container.appendChild(operators);

addPxl.classList.add('addPxl');
addPxl.textContent = 'Enter Pixels';
operators.appendChild(addPxl);

chgColor.classList.add('chgColor');
chgColor.textContent = 'Change Color';
operators.appendChild(chgColor);

canvas.classList.add('canvas');
container.appendChild(canvas);

function draw(num){
    for(let i = 0; i < num*num; i++){
        const pxl = document.createElement('div');
        pxl.classList.add('pxl');
        pxl.style.width = '12px';
        pxl.style.height = '12px';
        pxl.style.border = '1px solid black';
        pxl.style.margin = '0.05em';
        canvas.appendChild(pxl);
    }

    const allPxls = document.getElementsByClassName('pxl');
    for (let i = 0; i < allPxls.length; i++) {
        allPxls[i].addEventListener('mouseenter', function() {
        allPxls[i].style.backgroundColor = 'black';
        });
    }

    chgColor.addEventListener('click', function(){
        const color = prompt('What color do you want?');
        for(let i = 0; i < allPxls.length; i++){
            allPxls[i].addEventListener('mouseenter', function(){
            allPxls[i].style.backgroundColor = color;
        })
        }
    });
}

function clear(e){
    const allPxls = document.querySelectorAll(e);
    for(let i = 0; i < allPxls.length; i++){
        allPxls[i].remove();
    }
}

addPxl.addEventListener('click', function(){
    var num;
    while(true){
        num = prompt('Enter the number of pixels (per side):');
        if(num <= 100) { break } alert('error') 
        }
        if(document.querySelectorAll('.pxl').length > 0){
            clear('.pxl');
            draw(num);
        } else {
            draw(num);
        }
});