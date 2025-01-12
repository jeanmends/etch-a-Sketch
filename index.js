function chageGrind(value = 16, type ='oneColor'){
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
/*
if (type == 'oneColor'){
    oneColorVersion(children);
}else{
    colorVersion(children);
}

*/
oneColorVersion(children);
}

      

function oneColorVersion(children){
    children.forEach(child =>{
        child.addEventListener("mousemove", () =>{
            let opacity = child.style.opacity;
            if (opacity == ''){
                opacity = 0.0;
            }

            if (opacity < 1){
                child.style.backgroundColor = 'black';
                opacity = parseFloat(opacity) + 0.1;
                child.style.opacity = opacity;
                
            }
           // console.log("opacity after: " + opacity);

        })
    })
    
}

/*
function colorVersion(children){
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
*/


function randomColor(){

    return Math.floor(Math.random() * 257);

}

const button = document.querySelector('button');

button.addEventListener("click", () =>{
    let value = '';
    value = parseInt(prompt("Text a grind between 1 and 100"));
    if (isNaN(value)){
        alert("Please, input a number between 1 and 100");
    }else{
        if ((value < 1 || value > 100)){
            alert("Please, input a number between 1 and 100");
        }else{
           chageGrind(value);
        }
        
    }
    

})

document.addEventListener("onload", chageGrind(16));