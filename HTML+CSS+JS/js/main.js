//Declarando variaveis 
var btnContact = document.querySelector('.jl-btn-contact')
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

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

//Abrindo e fechando o Modal de orçamento//

for(var i = 0; i < toggleModal.length; i++ ){
    toggleModal[i].addEventListener('click', function(){
        var overlay = document.querySelector('.jl-overlay');
        var modalOcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOcamento.classList.toggle('jl-is-open');
        modalOcamento.classList.toggle('jl-slide-top-in')
    });
}


//ANIMANDO ELEMENTOS ON SCROLL COM EAYPIONTS//

var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint(
    {
    element: myScrollDown,
    handler: function() {

      myScrollDown.classList.toggle('jl-fade-out');
      
    },
    offset: '80%'
  });


 