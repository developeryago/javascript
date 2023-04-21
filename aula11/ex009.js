function calc(){
    var p = document.getElementById("nasci")
    var pais = String(p.value)
    var r = document.getElementById("r")
    r.innerHTML = `<p>Sua resposta foi <strong>${pais}</strong></p>`
    if (pais == "Brasil" || pais == "Brasileiro"){
        r.innerHTML += "<p>Você é <strong>BR</strong>, mano</p>"
    } else{
        r.innerHTML += "<p>Tu é <strong>Gringo</strong>, seu mané</p>"
    }
}
