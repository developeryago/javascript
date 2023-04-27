var num = document.querySelector('input#num')
var resp = document.getElementById("resp")
var lista = []

function isNumber(n){
    if (Number(n) >= 0 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) == -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumber(num.value) && inList(num.value, lista)){
       lista.push(Number(num.value))
       resp.innerHTML += `O valor ${num.value} foi adicionado a lista <br>`
       num.value = ''
       num.focus()
    } else{
        alert('Valor Inválido!')
    }
}

function calc(){
    if (lista.length == 0){
        alert('Adicione valores antes de calcular')
    } else{
        resp.innerHTML += `<p>Criamos a lista: ${lista}</p>`
        resp.innerHTML += `<p>Tivemos um total de <strong>${lista.length} elemetos</strong> adicionados</p>`
        var soma = 0
        var multiplicação = 1
        for (c = 0; c <lista.length; c += 1){
            soma += lista[c]
        }
        resp.innerHTML += `<p>A soma entre todos os valores é igual a ${soma}</p>`
        for (c = 0; c < lista.length; c ++){
            multiplicação *= lista[c]
        }
        let media = soma / lista.length
        resp.innerHTML += `<p>Já a multiplicação é igual a ${multiplicação}</p>`
        resp.innerHTML += `<p>E a média é igual a ${media}</p>`
    } resp.style.textAlign = 'center'
    resp.style.lineHeight = '1.1em'
}
