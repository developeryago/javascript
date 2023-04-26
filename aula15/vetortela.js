var vetor = [5,8,9,7,4,6,0,9]

for (c = 0; c < vetor.length; c += 1){
    console.log(`O vetor ${c} é ${vetor[c]}`)
}

vetor.sort()

for (var c in vetor){
    console.log(vetor[c])
}

/*while (c = 0 < vetor.length){
    console.log(`Já de forma ordenada temos ${vetor[c]} na posição ${c}`)
    c += 1
}*/