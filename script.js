const container = document.querySelector(".container");
container.style.width = "700px";
container.style.height = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
// container.style.flexDirection = "column";
container.style.border = "2px solid red";


let nodes = "";
for(let i = 0; i<2000; i++){
    nodes = document.createElement("div");
    // nodes.textContent = "p";
    nodes.classList.add("box");
    container.appendChild(nodes);
    // nodes.style.padding = "3px";
    // nodes.style.height = "16px";
    nodes.style.border = ".2px solid black";
    nodes.addEventListener("mouseover", colorGrid);
}



function colorGrid(e){
    e.target.style.backgroundColor = 'black';
}