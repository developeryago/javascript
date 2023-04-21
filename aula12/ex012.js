var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}hrs`)
if (hora < 12 && hora > 6){
    console.log('Bom dia!')
} else if (hora < 18 && hora > 12){
    console.log('Boa tarde!')
} else if (hora < 6){
    console.log('Tá de madrugada doido, vai dormir!')
} else{
    console.log('Boa noite!')
}