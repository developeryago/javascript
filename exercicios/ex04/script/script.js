function calc(){
    var num = document.getElementById("num")
    var vezes = 1
    var resp = document.getElementById("resp")

    if (num.value == 0){
        alert('Dados inválidos, digite um número maior ou menor que 0')
    } else{
        var n = Number(num.value)
        for (var c = n; vezes <= 10; vezes += 1){
            resp.innerHTML += `${c} X ${vezes} = ${c * vezes}<br> `
        }
    } resp.style.textAlign = 'center' 
}