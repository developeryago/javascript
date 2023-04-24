
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
        var genero = ""
        var img = document.getElementById('img')
        var foto = document.createElement('img')
        foto.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = "Homem"
            if (resultado >= 0 && resultado <= 3){
                resp.innerHTML = `Detectamos um bebê de ${resultado} anos`
                img.src = 'bebe.jpg'
            } else if (resultado <= 11){
                resp.innerHTML = `Detectamos um menino de ${resultado} anos`
                img.src = 'menino.jpg'
            } else if ( resultado <= 17){
                resp.innerHTML = `Detectamos um jovem de ${resultado} anos`
                img.src = 'jovem-m.jpg'
            } else if (resultado <= 45){
                resp.innerHTML = `Detectamos um homem de ${resultado} anos`
                img.src = 'adulto-m.jpg'
            } else if (resultado >= 46){
                resp.innerHTML = `Detectamos um senhor de ${resultado} anos`
                img.src = 'idoso.jpg'
            } resp.appendChild(img)
        } else if(sex[1].checked){
            genero = 'Mulher'
            if (resultado >= 0 && resultado <= 3){
                resp.innerHTML = `Detectamos um bebê de ${resultado} anos`
                img.src = 'bebe.jpg'
            } else if (resultado <= 11){
                resp.innerHTML = `Detectamos uma menina de ${resultado} anos`
                img.src = 'menina.jpg'
            } else if ( resultado <= 17){
                resp.innerHTML = `Detectamos uma jovem de ${resultado} anos`
                img.src = 'jovem-f.jpg'
            } else if (resultado <= 45){
                resp.innerHTML = `Detectamos uma mulher de ${resultado} anos`
                img.src = 'adulto-f.jpg'
            } else if (resultado >= 46){
                resp.innerHTML = `Detectamos uma senhora de ${resultado} anos`
                img.src = 'idosa.jpg'
            }
        }
        
    }    
}
