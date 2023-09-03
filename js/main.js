const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
})


const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

const swiperTwo = new Swiper('.certificates__slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    slidesPerView: 1,
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle){
    accordeonTitle.addEventListener('click', function(){

        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');

        if(currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }   else{
            currentText.style.maxHeight = null
        }
    })
})

      Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs : {
          type: "modern"
        }
        ,clickContent: function (current, event) {
            if (current.type === "image") {
         
              const enlargedImage = document.createElement("img");
              enlargedImage.src = current.src;
            
              return {
                src: current.src,
                type: "image",
                content: enlargedImage
              };
            } else {
              return false;
            }

          }
        });