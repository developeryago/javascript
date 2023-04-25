function contar(){
    var inicio = Number(document.getElementById("inicio"))
    var fim = Number(document.getElementById("fim"))
    var passo = Number(document.getElementById("passo"))
    var resp = document.getElementById("resp")

    if (Number(inicio.value) >= Number(fim.value)){
        alert('Verifique os dados e tente novamente')
    } else{
        for (inicio; inicio <= fim; inicio += passo){
            resp.innerHTML = (`${inicio} + ${passo}`)
        }
    }
    
}