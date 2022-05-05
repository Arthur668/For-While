// let n = 101
// for (i = 1; i < 101; i++){
//     console.log(i)
//  }

// let n = 101
// for (i = 0; i < 101; i+=2){
//     console.log(i)
//  }

let media = 0
let n = 5
for(let i = 0; i < n; i++){
    let salario = Math.random() * 1000
    console.log("Salario: ", salario.toFixed(2))
    media += salario
}
media = media / n
console.log("Media: ", media.toFixed(2))


// let salario = 15000
// for (let i = 0; i < 5; i++ ){
//     console.log('Salario:', salario)
//     salario = salario / 2
//     console.log('salario atualizado', salario)
// }


