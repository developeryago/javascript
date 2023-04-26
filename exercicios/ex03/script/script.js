function contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resp = document.getElementById("resp")

    if (inicio.value == 0 || fim.value == 0){
        alert('Verifique os dados e tente novamente')
    } else{
        resp.innerHTML = `Contando: <br>`
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p == 0){
            alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                resp.innerHTML += `${c} \u{1F449} `
            }
        } else{
            for (var c = i; c >= f; c -= p){
                resp.innerHTML += `${c} \u{1F449}`
            }
        }
    }   resp.innerHTML += `\u{1F3C1}`
}