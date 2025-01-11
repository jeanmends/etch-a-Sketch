function chageGrind(value){
    const parent = document.querySelector('#parent');
    parent.innerHTML = '';
    const totalDivs = value * value; // Número total de divs
    

// Adicionar as divs ao contêiner
for (let i = 0; i < totalDivs; i++) {
  const child = document.createElement('div');
  child.classList.add('child');
  parent.appendChild(child);
}


const columns = Math.ceil(Math.sqrt(totalDivs));  
const size = 600 / columns; 

// Atualizar o estilo com base nas colunas
parent.style.flexWrap = 'wrap';
parent.style.width = '600px';
parent.style.height = '600px';
parent.style.gap = '0';

// Adicionar o estilo dinâmico às divs filhas
const children = document.querySelectorAll('.child');
children.forEach(child => {
  child.style.width = `${size}px`;
  child.style.height = `${size}px`;
});

children.forEach(child =>{
    child.addEventListener("mousemove", () =>{
        let r,g,b;
        r = randomColor();
        g = randomColor();
        b = randomColor();
        child.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})
}


/*
children.forEach(child =>{
    child.addEventListener("click", () =>{
        child.style.backgroundColor = 'black';
    })
})

*/



function randomColor(){
    return Math.floor(Math.random() * 257);
}

const button = document.querySelector('button');

button.addEventListener("click", () =>{
    let value = '';
    value = parseInt(prompt("Text a grind between 1 and 100"));
    console.log("value typed: " +value)
    if (value < 1 || value > 100){
        alert("Please, input a number between 1 and 100");
    }else{
       chageGrind(value);
    }
    
})

document.addEventListener("onload", chageGrind(16));