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