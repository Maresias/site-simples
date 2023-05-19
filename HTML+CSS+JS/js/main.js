//Declarando variaveis 
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');

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

//ABRINDO E FECHANDO O MENU MOBILE//

for(var m = 0; m < toggleMenu.length; m++ ){
    toggleMenu[m].addEventListener('click', function(){
        var overlay = document.querySelector('.jl-menu-overlay');
        overlay.classList.toggle('jl-is-open')
        menuMobile.classList.toggle('jl-menu-is-closed');
        menuMobile.classList.toggle('jl-menu-is-open');
    });
}
//Abrindo e fechando o Modal de orçamento//

for(var i = 0; i < toggleModal.length; i++ ){
    toggleModal[i].addEventListener('click', function(){
        var modalOcamento = document.querySelector('#jl-modal-orcamento');
        var overlay = document.querySelector('.jl-overlay');
        overlay.classList.toggle('jl-is-open');
        modalOcamento.classList.toggle('jl-is-open');
        modalOcamento.classList.toggle('jl-slide-top-in')
    });
}


//ANIMANDO ELEMENTOS ON SCROLL COM EAYPIONTS//

var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) + 'px';

var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint(
    {
    element: myScrollDown,
    handler: function() {

      myScrollDown.classList.toggle('jl-fade-out');
      
    },
    offset: '80%'
  });


 