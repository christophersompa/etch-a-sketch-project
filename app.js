const root = document.querySelector('body')
const parentNode = document.querySelector('#container');

const addPxl = document.createElement('button');
const header = document.querySelector('h1');
const chgColor = document.createElement('button');

parentNode.style.display = 'flex';
parentNode.style.flexWrap = 'wrap';
parentNode.style.width = '460px';

addPxl.classList.add('addPxl');
addPxl.textContent = 'Enter Pixels';
root.appendChild(addPxl);
header.after(addPxl);

chgColor.classList.add('chgcColor');
chgColor.textContent = 'Change Color';
root.appendChild(chgColor);

function canvas(num){
    for(let i = 0; i < num*num; i++){
        const pxl = document.createElement('div');
        pxl.classList.add('pxl');
        pxl.style.width = '20px';
        pxl.style.height = '20px';
        pxl.style.border = '1px solid black';
        pxl.style.margin = '3px';
        parentNode.appendChild(pxl);
    }

    const allPxls = document.getElementsByClassName('pxl');
    for (let i = 0; i < allPxls.length; i++) {
        allPxls[i].addEventListener('mouseenter', function() {
        allPxls[i].style.backgroundColor = 'black';
        });
    }

    btnColor.addEventListener('click', function(){
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
            canvas(num);
        } else {
            canvas(num);
        }
});