const heading = document.getElementById("heading1");
const slider = document.getElementById('ColourSlide');
const changeBtn = document.getElementById("ColourChange");
const randomBtn = document.getElementById("RandomColour");

heading.innerHTML = "NEW COLOUR!";
heading.style.fontSize = "90px";
slider.disabled = true; 

changeBtn.onclick = Click;
function Click() {
    slider.disabled = false;
};

randomBtn.onclick = Randomize;
slider.oninput = Slidess;
function Randomize() {
    slider.disabled = true;
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
};

function Slidess() {
    document.body.style.backgroundColor = `hsl(${slider.value}, 100%, 50%)`;
};
