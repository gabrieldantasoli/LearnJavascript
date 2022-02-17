// Start Header events/interations
var btnnavbar = document.querySelector('#btnnavbar') ;
var nav = document.querySelector('nav') ;

function changeNavbar() {
    document.querySelector('body').classList.toggle('active') ;
    nav.classList.toggle('active') ;
    btnnavbar.classList.toggle('fa-times') ;
} ;

window.onscroll = () => {
    if (nav.classList == 'active'){
        changeNavbar() ;
    }
} ;

window.onresize = () => {
    if (window.innerWidth > 950 && nav.classList == 'active'){
        changeNavbar() ;
    } ;
} ;

document.querySelectorAll('#navbar a').forEach(item => item.addEventListener('click',function() {
    if (nav.classList == 'active') {
        changeNavbar() ;
    } ;
})) ;

btnnavbar.addEventListener('click',changeNavbar) ;
// Ends Header events/interations

// Starts Window alerts

// Alert
document.getElementById('alert').addEventListener('click',function() {
    alert('Olá , mundo !')
}) ;

// Confirm 
document.getElementById('confirm').addEventListener('click',function() {
    confirm('Escolha entre : Confirmar ou Cancelar .')
}) ;

document.getElementById('confirm2').addEventListener('click',function() {
    var c = confirm('Escolha entre : Confirmar ou Cancelar .')
    alert(c)
}) ;

// Prompt 
document.getElementById('prompt').addEventListener('click',function() {
    prompt('Digite seu nome : ')
}) ;

document.getElementById('prompt2').addEventListener('click',function() {
    var c = prompt('Digite seu nome : ')
    alert(c)
}) ;
// Ends Window alerts

// Starts conditions 

document.getElementById('sinal').addEventListener('click',function() {
    var c = prompt('Qual a cor do sinal ?')
    if (c == 'vermelho') {
        alert('Pare o carro !')
    } ;
}) ;

document.getElementById('sinal1').addEventListener('click',function() {
    var c = prompt('Tenho dinheiro sim ou não ?')
    if (c == 'sim') {
        alert('Compro a pizza !')
    }else {
        alert('Fico com fome !')
    } ;
}) ;

document.getElementById('sinal2').addEventListener('click',function() {
    let c = prompt('Quanto dinheiro tenho em reais ?')
    c = parseInt(c) ;
    if (c < 25 && c > 0) {
        alert('Compro a pizza !')
    }else if(c >= 25) {
        alert('Compro a pizza e o refrigerante !')
    }else {
        alert('Fico com fome !')
    } ;
}) ;

// Ends conditions

//start switch 

document.querySelector('#switch .codigo').addEventListener('click',function() {
    let numero = prompt('Digite um número de 0 a 4 :')
    switch(parseInt(numero)) {
        case 1:
            alert('primeiro')
            break
        case 2:
            alert('Segundo')
            break
        case 3:
            alert('Terceiro')
            break
        case 4:
            alert('Quarto')
            break
        default:
            alert('Eu disse um número entre 0 e 4 !')
    }
})

//ends switch