var amigo = {nome: 'João',
    sexo: 'M',
    peso: 75,
     engordar(p = 0){
        this.peso += p
        
    }}
var difpeso = -7
amigo.engordar(difpeso)
console.log(`${amigo.nome} passou a pesar ${amigo.peso} já que foi adicionado ${difpeso} ao seu peso anterior`)