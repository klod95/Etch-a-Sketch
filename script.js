// So this way must be realy slow and requires alot of pc power because it lags on higher grids
// thats why i put the range from 10 to 24
// i will leave it like this and probably will come in the future back to make a few changes
// changes like code that can be removed, create difrently the grids, more eficient
// and reduce the overal lines of code.

// default grid 6*6
const divCreater = () => {
    for ( i = 1; i <= 36; i++ ){
        const container = document.querySelector(".container");
        const divs = document.createElement('div');
        divs.classList.add("divClass");
        container.appendChild(divs);
        const divSelector = document.querySelectorAll(".divClass");
        divSelector.forEach((e) => { 
        e.style.width = 80 + 'px';
        e.style.height = 80  + 'px';})
        const outputval = document.getElementById('output');
        outputval.textContent = "6"
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
    // and not get out of container div. i belive this way was hast to be slow.
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



const clearfun = () => {
    const divSelector = document.querySelectorAll(".divClass");
    divSelector.forEach(div => {
        div.style.backgroundColor = "";
    });
}
const clearbtn = document.getElementById('clear').addEventListener('click',clearfun);





