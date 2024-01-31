function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes();
let segundos = data.getSeconds();

msg.innerHTML = `Neste momento são ${hora } horas e ${minutos} minutos.`
if(hora >= 0 && hora < 12){
    //Bom DIA!
img.src = 'manha.png'
document.body.style.background = '#9FB0BF'
}else if(hora >= 12 && hora < 18){
    //Boa TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#F09F26'
    }else{
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#4F221A'
    }
}



