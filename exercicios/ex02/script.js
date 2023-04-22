
function calc(){
    var data = new Date()
    var ano = data.getFullYear()
    var usuario = document.getElementById("ano")
    var resultado = ano - Number(usuario.value)
    var resp = document.querySelector("p#resp")

    if (Number(usuario.value) > ano || resultado > 100 || Number(usuario.value) == 0){
        alert("Verifique as informações e tente novamente")
    } else{
        var sex = document.getElementsByName("radio")
        resp.innerHTML = (`Você tem ${resultado}anos`)
    }
        
}
