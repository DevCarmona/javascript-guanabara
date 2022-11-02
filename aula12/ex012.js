var hora = 3
if(hora < 12 && hora >= 5) {
    console.log(`Agora são exatamente ${hora} horas da manhã`)
    console.log('Bom Dia')
} else if(hora <= 18 && hora > 11) {
    console.log(`Agora são exatamente ${hora} horas da tarde`)
    console.log('Boa Tarde')
} else if(hora >= 19 && hora <= 23) {
    console.log(`Agora são exatamente ${hora} horas da noite`)
    console.log('Boa Noite')
} else {
    console.log(`Agora são exatamente ${hora} horas da madrugada`)
    console.log('Boa Madrugada')
}