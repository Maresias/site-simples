var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImagens = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');

const getImagesSrc = function (){
    for (var i = 0; i < galleryImagens.length; i ++){
        galleryImagens[i].addEventListener('click', function (){
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
        })
        

    }
}

getImagesSrc();

for (var c = 0; c < closeGallery.length; c ++){
    closeGallery[c].addEventListener('click',function(){
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    })
}

//IDENTIFICAMOS O ITEM ATUAL NO FRAME


//DEFINIMOS O NUMERO DO PROXIMO ITEM = ATUAL +  1

// FAZEMOS  O LOOP E IDENTIFICAMOS QUAL ITEM FAZ MATCH COM O NUMERO PREOXIMO ITEM 

// CAPTURAMOS O DATA-SRC


// PASSAMOS O DATA-SR PARA A TAG DE IMG NO FRAME
