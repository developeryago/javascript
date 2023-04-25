function calc(){
    var num = Number(document.getElementById("num").value)
    var vezes = 1
    var calc = num * vezes
    var resp = document.getElementById("resp")
    
    while (vezes <=10){
        resp.innerHTML = (`${num} X ${vezes} = ${calc}`)
        vezes += 1
    }

}