var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImagens = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');
var currCounter = document.querySelector('.jl-current-slide');
var totalCounter = document.querySelector('.jl-total-slide');
var skeletonLoading = document.querySelector('.jl-skeleton-loading');



//COUNTER FORMATER

var counterFormatter = function(n){
    if (n < 10){
        return '0' + n;
    }else{
        return n;
    }
}


totalCounter.innerHTML = galleryImagens.length;

//SKELETON LOADING//

const skeletonAnim = function (imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function(){
        skeletonLoading.classList.add('jl-fade-out');
        console.log('iniciou fade out')
        setTimeout(function(){
            skeletonLoading.style.display = 'none'
            console.log('iniciou display none')
        }, 5000)
    })
}



//OPEN GALLERY MODAL
const getImagesSrc = function (){
    for (var i = 0; i < galleryImagens.length; i ++){
        galleryImagens[i].addEventListener('click', function (){
            var imageSrc = this.getAttribute('data-src');
            var itemNum = this.getAttribute('data-item');

            //SKELETON//

            skeletonLoading.style.display = 'flex';

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');

            currCounter.innerHTML = counterFormatter(itemNum);

            skeletonAnim(imageSrc);
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

const nexItem = function(){

    //IDENTIFICAMOS O ITEM ATUAL NO FRAME
    var currItemNum = frameImage.getAttribute('data-index');

    //DEFINIMOS O NUMERO DO PROXIMO ITEM = ATUAL +  1
    var nextItemNum = parseInt(currItemNum) + 1;

    // FAZEMOS  O LOOP E IDENTIFICAMOS QUAL ITEM FAZ MATCH COM O NUMERO PREOXIMO ITEM 
    for(var n = 0 ; n < galleryImagens.length; n ++){
        var item = galleryImagens[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum){
            // CAPTURAMOS O DATA-SRC
            var nextSrc = item.getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex'
            // PASSAMOS O DATA-SR PARA A TAG DE IMG NO FRAME
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currCounter.innerHTML = counterFormatter(nextIndex);

            skeletonAnim(nextSrc);
        }
    }
}

btnNext.addEventListener('click', function(){
    nexItem();
});

const prevItem = function(){
    // IDENTIFICANDO O FRAME 
    var currItemNum = frameImage.getAttribute('data-index');

    // DEFIIMOS O  NUMERO DO PREV ITEM
    var prevItemNum = parseInt(currItemNum) - 1;

    //FAZEMOS O LOOP E IDENTIFICAMOS QUAL ITEM FAZ MACTH COM O PREV ITEM 
    for(var p = 0; p < galleryImagens.length; p ++){
        var item = galleryImagens[p];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === prevItemNum){
            var prevSrc = item.getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex'
            // PASSAMOS O DATA-SRC E DATA-INDEX A TAG IMG
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex) ;

            skeletonAnim(prevSrc);
        }

    }
}

btnPrev.addEventListener('click', function(){
    prevItem();
})