const parent = document.querySelector('#parent');
const totalDivs = 16 * 16; // Número total de divs

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

/*
children.forEach(child =>{
    child.addEventListener("click", () =>{
        child.style.backgroundColor = 'black';
    })
})

*/

children.forEach(child =>{
    child.addEventListener("mousemove", () =>{
        let r,g,b;
        r = randomColor();
        g = randomColor();
        b = randomColor();
        child.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})

function randomColor(){
    return Math.floor(Math.random() * 257);
}