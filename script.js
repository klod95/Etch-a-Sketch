

const divCreater = () => {
    for ( i = 1; i <= 256; i++ ){
        const container = document.querySelector(".container");
        const divs = document.createElement('div');
        divs.classList.add("divClass");
        container.appendChild(divs);
    }
} 
divCreater();


const divSelector = document.querySelectorAll(".divClass");

divSelector.forEach((e) => {
    e.addEventListener("mouseover",colorChange)
    function colorChange(){
        e.style.backgroundColor = "blue"; 
    }
});

const gridSizeChanger = document.getElementById('input');
const outputval = document.getElementById('output');
outputval.textContent = gridSizeChanger.value;

input.addEventListener("input", (e) => {
    outputval.textContent = e.target.value;
    return e.target.value;
  });

 

  





