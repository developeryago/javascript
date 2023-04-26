let num = [5, 8, 9, 3]

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nossos números são ${num}, mas agrupados em ordem crescente temos ${num.sort()}`)
num.push(1)
num.sort()
console.log(`Agora temos ${num.length} posições e o primeiro passa a ser ${num[0]}`)