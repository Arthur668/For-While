// let n = 10
// for (i = n; i > 0; i--){
//     console.log(i)
// }
let mediaTotal = 0
let n = 5
for(let i = 0; i < n; i++){
    let n1 = Math.random() * 10
    let n2 = Math.random() * 10
    let n3 = Math.random() * 10
    let media = (n1 + n2 + n3) / 3
    console.log("Notas: ", n1.toFixed(2), n2.toFixed(2), n3.toFixed(2));
    
}