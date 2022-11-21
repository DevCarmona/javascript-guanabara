let num = [5, 8, 4, 7, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}
