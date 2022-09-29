let res = document.querySelector('#resultado');
let conj = new Array(res)


function insert(num) {
    if (res.innerHTML == 0) {
        res.innerHTML = "";
    } 
    setTimeout(() => {
        if (conj.length < 3) {
            res.innerHTML += num;
        }
    }, 0.01);
}

function limpar() {
    res.innerHTML = 0;
}

function apagar() {
    if (res.innerHTML != 0) {
        let resultado = res.innerHTML;
        res.innerHTML = resultado.slice(0, -1)
    } 
    setTimeout(() => {
        if (res.innerHTML === "") {
            res.innerHTML = 0
        }
    }, 0.1);
    
}

function calcular() {
    let resultado = res.innerHTML;
    if (resultado) {
        res.innerHTML = eval(resultado)
    } else {
        res.innerHTML = 0
    }
}