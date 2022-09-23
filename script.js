function verificar() {

var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
if ( fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 12) {
            //Criança
            img.setAttribute('src', 'criançamenino.png')
        }else if (idade > 12 && idade < 18) {
            //Adolescente
            img.setAttribute('src', 'adolescentemenino.png')
        } else if (idade >= 18 && idade < 60) {
            //Adulto
            img.setAttribute('src', 'adultoh.png')
        }else if (idade >= 60 ) {
            //Idoso
            img.setAttribute('src', 'idoso.png')
        }
    }else if (fsex[1]) {
        genero = 'Mulher'
        if(idade >= 0 && idade < 12) {
            //Criança
            img.setAttribute('src', 'criançamenina.png')
        }else if (idade > 12 && idade < 18) {
            //Adolescente
            img.setAttribute('src', 'adolescentemenina.png')
        } else if (idade >= 18 && idade < 60) {
            //Adulto
            img.setAttribute('src', 'adultam.png')
        }else if (idade >= 60 ) {
            //Idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
}



}







