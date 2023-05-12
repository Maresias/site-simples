var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var galleryImagens = document.querySelectorAll('.jl-thumb-img');

const getImagesSrc = function (){
    for (var i = 0; i < galleryImagens.length; i ++){
        galleryImagens[i].addEventListener('click', function (){
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

            overlay.classList.toggle('jl-is-open');
        })
        

    }
}


getImagesSrc();