// default grid 6*6
const divCreater = () => {
    for ( i = 1; i <= 36; i++ ){
        const container = document.querySelector(".container");
        const divs = document.createElement('div');
        divs.classList.add("divClass");
        container.appendChild(divs);
        }
    };
   
    divCreater();
    
// input 
const gridSizeChanger = document.getElementById('input'); //input selector
input.addEventListener("input", (e) => {
    const container = document.querySelector(".container"); // div remover
        while (container.firstChild){
            container.firstChild.remove()
        };
    const outputval = document.getElementById('output'); //output selector
    outputval.textContent = gridSizeChanger.value; // shows default value
    outputval.textContent = e.target.value;// shows the current value as you move range
    inputValue = e.target.value;
    var height = e.target.value;
    var width = e.target.value;
    var gridSize = height*width;
    // div creation with the right px so it can always fit in parent div(480px) 
    // and not get out of container div. i belive this was hast to be slow.
    const divCreater = () => {
        for ( i = 1; i <= gridSize; i++ ){
            const container = document.querySelector(".container");
            const divs = document.createElement('div');
            divs.classList.add("divClass");
            container.appendChild(divs);
            const divSelector = document.querySelectorAll(".divClass");
                 divSelector.forEach((e) => { 
                 e.style.width = 480 / width + 'px';
                 e.style.height = 480 / height + 'px';
            });
        }
    }; 
    divCreater();
    colorChanger();
});

var color = document.getElementById("colorPicker");

const colorChanger = () => { 
    const divSelector = document.querySelectorAll(".divClass");
    divSelector.forEach((e) => {
    e.addEventListener("mouseover",() => {
    e.style.backgroundColor = color.value;
    })
    });
} 
color.addEventListener('input', colorChanger);

colorChanger()

  





