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


  //PORTFOLIO SLIDER 

  //Declarando variaveis do slider
  var sliderContainer = document.querySelector('.jl-slider-container');
  var sliderList = document.querySelector('.jl-slider-list');
  var sliderItem = document.querySelectorAll('.jl-slider-item');
  var sliderListWidth = null;

  //Capturando larguras individuais 
  var containerWidth = sliderContainer.parentElement.offsetWidth;


  //Passando larguaras dinamicas
  sliderContainer.style.width = containerWidth + 'px';



  for (var p = 0; p < sliderItem.length; p++){
      sliderItem[p].style.width = containerWidth + 'px';
      var sliderItemWidth = sliderItem[p].offsetWidth;

      sliderListWidth += sliderItemWidth;

  }

  sliderList.style.width = sliderListWidth + 'px';




  //Fazendo animacao do slider onclick

  var prevItem = document.querySelector('.jl-item-prev');
  var nextItem = document.querySelector('.jl-item-next');
  var sliderPos = 0;
  
  nextItem.addEventListener('click', function(){
      var lastItem = sliderListWidth - containerWidth;
      if ((-1 * (sliderPos) === lastItem)){
          return;
      }
      sliderPos -= containerWidth;
      anime({
          targets: sliderList,
          translateX: sliderPos
      });
  });

  prevItem.addEventListener('click', function(){

    if (sliderPos === 0){
        return;
    }

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
    });
  });