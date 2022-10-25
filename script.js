// let res = document.querySelector('#resultado');
// let conj = new Array(res);

// const telaErro = document.querySelector('.telaErro');
// const textoErro = document.querySelector('.textoErro')
// const botaoOk = document.querySelector('.telaOk');


// function insert(num) {
//     if (res.innerHTML == 0) {
//         res.innerHTML = "";

//     }
//     res.innerHTML += num;

    
// }

// function limpar() {
//     res.innerHTML = 0;
// }

// function apagar() {
//     if (res.innerHTML != 0) {
//         let resultado = res.innerHTML;
//         res.innerHTML = resultado.slice(0, -1)
//     } 
//     setTimeout(() => {
//         if (res.innerHTML === "") {
//             res.innerHTML = 0
//         }
//     }, 0.1);
    
// }

// function calcular() {
//     try {
//         //Se executar a operação normalmente, tudo seguirá normalmente.
//         let resultado = res.innerHTML;
//         if (resultado) {
//         res.innerHTML = eval(resultado)
//         } else {
//         res.innerHTML = 0
//         } 

//     } catch {
//         //Se por alguma razão a expressão não for calculada, é por que houve um erro por parte do usuário. O catch retornará algo nesse caso alertando e orientando o usuário.
//         telaErro.classList.remove('sumir');
        
//     }
// }

// botaoOk.addEventListener('click', () => {
    
//     telaErro.classList.add('sumir');
//     limpar() //chama a função limpar

// })

let chars = ['A', 'B', 'A', 'C', 'B', 1, 3, 1, 31];

let uniqueChars = [...new Set(chars)];

let onlyNumbers = chars.filter(Number);


console.log('Array completo: ' + chars);
console.log('Array de elementos únicos: ' + uniqueChars);
console.log('Array só de números: ' + onlyNumbers);


