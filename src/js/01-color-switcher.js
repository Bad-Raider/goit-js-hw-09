// randon color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
// DOM elements
const btnStartEl = document.querySelector("[data-start]");
const btnStopEl = document.querySelector("[data-stop]");
const bodyEl = document.body;

let interval = null;

addedDisableAttribute(btnStopEl);

btnStartEl.addEventListener("click", handleStartChangingColorBody);
// handler "btnStartEl"
function handleStartChangingColorBody() {
    addedDisableAttribute(btnStartEl);
    removeDisableAttribute(btnStopEl);

    return interval = setInterval(() => {
        changeColor();
    }, 1000);
};

btnStopEl.addEventListener("click", handleStopChangingColorBody);
// handler "btnStopEl"
function handleStopChangingColorBody() {
    clearInterval(interval);
    addedDisableAttribute(btnStopEl);
    removeDisableAttribute(btnStartEl);
}

function changeColor() {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
};

function addedDisableAttribute(element) {
    element.setAttribute("disabled", true);
};

function removeDisableAttribute(element) {
    element.removeAttribute("disabled");
};



