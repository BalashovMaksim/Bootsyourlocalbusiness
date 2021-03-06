$(document).ready(function(){
    $('.bootsup__slider').slick({
        arrows:false,
        slidesToShow:1,
        dots:true,
        slidesToScroll:1,
    });
});

const menuLink = document.querySelectorAll('.header__link[data-goto]');

if(menuLink.length > 0){
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
        
    })
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
            const headerMenu = document.querySelector('.header__menu');
            const headerBurger = document.querySelector('.header__burger');
            const body = document.body
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            body.classList.remove('lock');
        }
    }
}

//Google Maps

function initMap(){
    let opt = {
        center:{lat: 56.331590, lng: 36.728724},
        zoom: 10,
    }
    let map = new google.maps.Map(document.getElementById("map"), opt)
    let marker = new google.maps.Marker({
        position:{lat: 56.331590, lng: 36.728724},
        map: map,
    });
}