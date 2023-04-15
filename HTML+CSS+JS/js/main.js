//Declarando variaveis 
var btnContact = document.querySelector('.jl-btn-contact')

//Page Preloader
window.addEventListener('load', function(){
    var pagePreload = document.querySelector('.jl-preloader');
        pagePreload.classList.add('jl-fade-out')
    
    setTimeout(function(){
        pagePreload.style.display = 'none'
    }, 2000)

    
})



//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});