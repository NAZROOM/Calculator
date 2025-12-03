let display = document.getElementById("display");

function appendValue(value) {
    display.innerHTML += value;
}

function clearDisplay() {
    display.innerHTML = "";
}

function deleteLast() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        display.innerHTML = eval(display.innerHTML.replace("÷", "/").replace("×", "*"));
    } catch {
        display.innerHTML = "Error";
    }
}
