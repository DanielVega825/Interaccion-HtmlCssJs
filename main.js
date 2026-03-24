let valor = 0;

const display = document.getElementById('contadorValue');

function verficarValor() {
    if (valor > 10) {
        display.style.color = "red";
    } else {
        display.style.color = "black";
    }
}

(function increment(){
    document.getElementById('incrementBtn').addEventListener('click', () => {
        valor += 1;
        display.innerText = valor; 
        verficarValor();
    });
})();

(function decrement(){
    document.getElementById('decrementBtn').addEventListener('click', () => {
        valor -= 1;
        display.innerText = valor; 
        verficarValor();
    });
})();

