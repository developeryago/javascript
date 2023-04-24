function Carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var mensagem = document.getElementById("msg")
    var img = document.getElementById("foto")
    var fundo = document.getElementById("fundo")
    if (hora >= 4 && hora < 12){
        mensagem.innerHTML = `Bom dia! Agora são ${hora}hrs`
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora < 18){
        mensagem.innerHTML = `Boa tarde! Agora são ${hora}hrs`
        fundo.style.backgroundColor = "rgb(94, 76, 50)"
        img.src = 'tarde.jpg'
    } else{
        mensagem.innerHTML = `Boa noite! Agora são ${hora}hrs`
        fundo.style.backgroundColor = "black"
        img.src = 'noite.jpg'
    } 
}