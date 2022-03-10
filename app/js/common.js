
let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


window.onscroll = function () {
    scrollFunction();

};

function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (window.innerWidth > 1050) {document.documentElement.scrollTop
        // console.log( + 'scrolled from top');
        if (document.body.querySelector('.header')) {

                if (oldValue >= newValue) {
                    // console.log('scroll top?')
                    document.querySelector('.header').classList.remove('is-fixed');
                    if (window.pageYOffset >= 20) {
                        document.querySelector('.header').classList.add('is-fixed');
                    }
                }
                else {
                    document.querySelector('.header').classList.add('is-fixed');

                }

        }



    } else {
        if (oldValue < newValue) {

        } else if (oldValue > newValue) {

        }
    }

    oldValue = newValue;
}


let oldValue = 0;
let newValue = 0;

function scrollFunction() {
    checkScrollDir()
    // if (window.innerWidth < 1201) {
    //     console.log($('.header').outerHeight(true) + ' header-height')
    //     if (document.body.scrollTop > $('.header').outerHeight(true) || document.documentElement.scrollTop > $('.header').outerHeight(true)) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             // document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // } else {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // }


}

document.onload = () => {
    scrollFunction();
};
scrollFunction();

let catalogMen = [...document.querySelectorAll('.bot-menu > ul > li.has-item')];

function hoverableMenu() {
    if (!catalogMen.length) {

    } else {
        catalogMen.forEach((btn) => {
            if (window.innerWidth > 1050) {
                btn.addEventListener('mouseover', () => {
                    document.querySelector('.backplate-menu').classList.add('visible');

                });
                btn.addEventListener('mouseout', () => {
                    document.querySelector('.backplate-menu').classList.remove('visible');

                })
            } else {

            }

        })
    }
}

hoverableMenu();

//burger
let burger = [...document.querySelectorAll('.burger')];

function openMobileMenu() {
    if (burger.length) {
        burger.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                document.querySelector('.bot-menu').classList.toggle('open');
                document.body.classList.toggle('no-scroll');
            })
        })
    }
}
openMobileMenu();

//sliders
let homeHeroSld = [...document.querySelectorAll('.js-slider.hero-home')];

function homeHeroSlider() {
    if (!homeHeroSld.length) {

    } else {
        homeHeroSld.forEach((sld) => {
            let sldCont = sld.querySelector('.home-hero-slider');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                // autoplay: {
                //     delay: 4000,
                //     pauseOnMouseEnter: true,
                // },


            });
        })
    }
}

homeHeroSlider();

//sliders



let btnCatNav = [...document.querySelectorAll('.catalog-mob__btn')];

function openCatMob() {
    if (btnCatNav.length) {
        btnCatNav.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.catalog__block').classList.toggle('visible');
                document.querySelector('.backplate-menu').classList.toggle('visible');
                if (document.querySelector('.menu-item-has-children.open')) {
                    document.querySelector('.menu-item-has-children.open').classList.remove('open');
                }
            })
        })
    }
}
openCatMob();

//closeallBackplate
let backPlateBlock = [...document.querySelectorAll('.backplate-menu')];

function closeAllBackPlate() {
    if (backPlateBlock.length) {
        backPlateBlock.forEach((btn) => {
            if (window.innerWidth < 1051) {
                btn.addEventListener('click', () => {
                    [...document.querySelectorAll('.open')].forEach((i) => {
                        i.classList.remove('open');
                    });
                    [...document.querySelectorAll('.visible')].forEach((i) => {
                        i.classList.remove('visible');
                    });
                })
            }
        })
    }
}
closeAllBackPlate();

let btnSearch = [...document.querySelectorAll('.icon-search')];

function openSearcMob() {
    if (btnSearch.length) {
        btnSearch.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-search').classList.toggle('open');
            })
        })
    }
}
openSearcMob();

let btnMenu = [...document.querySelectorAll('.header-catalog__btn')];

function openBtnMenu() {
    if (!btnMenu.length) {

    } else {
        btnMenu.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-catalog__btn').classList.toggle('active');
                document.querySelector('.header-menu').classList.toggle('active');
                document.querySelector('body').classList.toggle('no-scroll');

            })
        });



    }
}


openBtnMenu();
//catalogControlMob
let aLinkCat = [...document.querySelectorAll('.bot-menu > ul > li.has-item > a')];

function openLinkCat() {
    if (aLinkCat.length) {
        aLinkCat.forEach((btn) => {
            if (window.innerWidth < 992) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (document.querySelector('.has-item.open')) {
                        if (btn.closest('.has-item').classList.contains('open')) {
                            btn.closest('.has-item').classList.remove('open');
                        } else {
                            document.querySelector('.has-item.open').classList.remove('open');
                            btn.closest('.has-item').classList.add('open');

                        }
                    }
                    else {
                        btn.closest('.has-item').classList.add('open');

                    }
                })
            }

        })
    }
}
openLinkCat();

//sliders


let homeSld = [...document.querySelectorAll('.js-slider.cat-hero')];

function homeSlider() {
    if (!homeSld.length) {

    } else {
        homeSld.forEach((sld) => {
            let sldCont = sld.querySelector('.home-slider');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                // autoplay: {
                //     delay: 4000,
                //     pauseOnMouseEnter: true,
                // },


            });
        })
    }
}

homeSlider();

//mini cat slider
let miniCatlSld = [...document.querySelectorAll('.mini-cat__slider.js-slider')];

function miniCatSlider() {
    if (!miniCatlSld.length) {

    } else {
        miniCatlSld.forEach((sld) => {
            let sldCont = sld.querySelector('.mini-cat__slider-container');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');
            let pagin = sld.querySelector('.slider-pagin');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 20,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'fraction',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    450: {
                        slidesPerView: 2,
                    },

                    600: {
                        slidesPerView: 3,
                    },
                    769: {
                        slidesPerView: 2,
                    },

                    1025: {
                        slidesPerView: 3,
                    }
                }



            });
        })
    }
}

miniCatSlider();

//mini cat slider

//insta gallery
let instaGallery = [...document.querySelectorAll('.insta-gallery.js-slider')];

function instaSlider() {
    if (!instaGallery.length) {

    } else {
        instaGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.insta-gallery__content');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 20,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    450: {
                        slidesPerView: 2,
                    },

                    600: {
                        slidesPerView: 3,
                    },
                    769: {
                        slidesPerView:4,
                    },

                    1280: {
                        slidesPerView:5,
                    }
                }



            });
        })
    }
}

instaSlider();

//insta gallery

//four seasons
let fourSesons = [...document.querySelectorAll('.seasons.js-slider')];

function seasonsSlider() {
    if (!fourSesons.length) {

    } else {
        fourSesons.forEach((sld) => {
            let sldCont = sld.querySelector('.seasons-container');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 4,
                allowTouchMove: true,
                draggable: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    450: {
                        slidesPerView: 2,
                    },

                    600: {
                        slidesPerView: 3,
                    },
                    769: {
                        slidesPerView: 4,
                        allowTouchMove: false,
                        draggable: false,
                    },

                }



            });
        })
    }
}

seasonsSlider();

//four seasons










//sliders

//faq open

let faqHead = [...document.querySelectorAll('.faq-head')];

function openFaq() {
    if (faqHead.length) {
        faqHead.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-faq').classList.toggle('active');
            })
        })
    }
}

openFaq();

//faq open

$('.rating-stars').raty(
    {
        readOnly: true,
        starHalf: './img/star-clear.svg',
        starOn: './img/star.svg',
        starOff: './img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);




$('input.phone-number').each(function () {

    $(this).addClass('mask-phone-ua');

});
$(".mask-phone-ua").mask('+38(999)999-99-99');

//show seo
let hiddenCarr = [...document.querySelectorAll('.show-seo')];

function openHideText() {
    if (hiddenCarr.length) {
        hiddenCarr.forEach((btn) => {
            let hidden = btn.dataset.hidden;
            let show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.seo-section').classList.contains('visible')) {
                    btn.closest('.seo-section').classList.remove('visible');
                    btn.innerHTML = hidden;
                } else {
                    btn.closest('.seo-section').classList.add('visible');
                    btn.innerHTML = show;
                }
            })
        })
    }
}
openHideText();

//change catalog view
let controlBtn = [...document.querySelectorAll('.control-btn')];
function changeViewCatalog() {
    if (controlBtn.length) {
        controlBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {

                    document.querySelector('.control-btn.active').classList.remove('active');


                    btn.classList.add('active');
                    if (k === 0) {
                        document.querySelector('.cards-list').classList.add('horizontal');
                    } else {
                        document.querySelector('.cards-list').classList.remove('horizontal');

                    }
                }

            })
        })
    }
}
changeViewCatalog();

//product slider

let cardPhotosBlock1 = [...document.querySelectorAll('.product-preview')];

function startPhotosSlider2() {
    if (!cardPhotosBlock1.length) {

    } else {
        cardPhotosBlock1.forEach((blc) => {
            let mainSlides = blc.querySelector('.product-slider__main');
            let thumbsSlides = blc.querySelector('.product-slider__thumbs');
            var swiperThumb = new Swiper(thumbsSlides, {
                spaceBetween: 7,
                slidesPerView: 3,
                freeMode: false,
                watchSlidesProgress: true,
                direction: 'vertical',
                centeredSlides: false,
                loop: false,
                draggable: true,
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px

                    993: {
                        spaceBetween: 7,
                        slidesPerView: 4,
                    }
                }
            });
            var swiper2 = new Swiper(mainSlides, {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                thumbs: {
                    swiper: swiperThumb,
                }

            });
        })
    }
}

startPhotosSlider2();

$('.btn-open-more').on('click', function() {
    $('.product-slider__main .img').trigger('click');
});


//product slider

//deliv text, payment

let devHead = [...document.querySelectorAll('.dev-head')];

function openCloseDevHead() {
    if (devHead.length) {
        devHead.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
}
openCloseDevHead();


//deliv text, payment


//modals
let carrMod = [...document.querySelectorAll('.mod--carr')];

function openCarrMod() {
    if (carrMod.length) {
        carrMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--carr').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCarrMod();

//modals
let writeMod = [...document.querySelectorAll('.mod--write')];

function openWriteMod() {
    if (writeMod.length) {
        writeMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--write').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openWriteMod();


let coopMod = [...document.querySelectorAll('.mod--coop')];

function openCoopMod() {
    if (coopMod.length) {
        coopMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--coop').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCoopMod();


let questMod = [...document.querySelectorAll('.mod--quest')];

function openQuestMod() {
    if (questMod.length) {
        questMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--quest').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openQuestMod();

let cartWin = [...document.querySelectorAll('.header-cart a')];

function openCart() {
    if (cartWin.length) {
        cartWin.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--cart').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openCart();

let clickMod = [...document.querySelectorAll('.one-click')];

function openClickMod() {
    if (clickMod.length) {
        clickMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--click').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openClickMod();

let revMod = [...document.querySelectorAll('.mod-comm')];

function openRevMod() {
    if (revMod.length) {
        revMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--comment').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}
openRevMod();

let modalWindow = [...document.querySelectorAll('.modal-window')];

function controlModal() {
    if (modalWindow.length) {
        modalWindow.forEach((mdl) => {
            let back = mdl.querySelector('.modal-backplate');
            let close = mdl.querySelector('.close-modal');

            back.addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
            close.addEventListener('click', () => {
                mdl.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        })
    }
}
controlModal();


let hiddenAbout = [...document.querySelectorAll('.unhide-text')];

function openHideTextAbout() {
    if (hiddenAbout.length) {
        hiddenAbout.forEach((btn) => {
            let hidden = btn.dataset.hidden;
            let show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.product-info__about').classList.contains('visible')) {
                    btn.closest('.product-info__about').classList.remove('visible');
                    btn.innerHTML = show;
                } else {
                    btn.closest('.product-info__about').classList.add('visible');
                    btn.innerHTML = hidden;
                }
            })
        })
    }
}
openHideTextAbout();

$(document).on('click', '.js-minus', function (e) {
    var t=$(this).next().find('input').val();t>1&&$(this).next().find('input').val(+t-1);
    return false;
});
$(document).on('click', '.js-plus', function (e) {

    var t=$(this).prev().find('input').val();
    $(this).prev().find('input').val(+t+1);
    return false;
});


let prodCart = [...document.querySelectorAll('.product-info__footer')];

function prodCartAdd() {
    if (prodCart.length) {
        prodCart.forEach((btn) => {
            let cart = btn.querySelector('.add-cart');

            cart.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                cart.classList.toggle('active');
            })
        })
    }
}

prodCartAdd();


let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

let passInput = [...document.querySelectorAll('.input-cont.password')];

function openPassword() {
    if (passInput.length) {
        passInput.forEach((inp) => {
            let icon = inp.querySelector('.icon');
            icon.addEventListener('click', () => {
                if (inp.classList.contains('visible')) {
                    inp.classList.remove('visible');
                    inp.querySelector('input').type = 'password';

                } else {
                    inp.classList.add('visible');
                    inp.querySelector('input').type = 'text';
                }

            })
        })
    }
}
openPassword();


let redactInput = [...document.querySelectorAll('.input-cont .redact')];

function openRedact() {
    if (redactInput.length) {
        redactInput.forEach((icon) => {
            icon.addEventListener('click', () => {
                icon.closest('.input-cont').querySelector('input').disabled = false;

            })
        })
    }
}
openRedact();

let cabinetBtn = [...document.querySelectorAll('.cabinet-open')];

function openCabinet() {
        if (cabinetBtn.length) {
            cabinetBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.closest('.cabinet-nav').classList.toggle('visible');
                })
            })
        }
}
openCabinet();


let orderDetail = [...document.querySelectorAll('.orders-item__line .item-show')];

function openOrderDet() {
    if (orderDetail.length) {
        orderDetail.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.orders-item').classList.toggle('open');
            })
        })
    }
}
openOrderDet();

let revDetail = [...document.querySelectorAll('.review-line__head .item-show')];

function openRevDet() {
    if (revDetail.length) {
        revDetail.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.review-line').classList.toggle('open');
            })
        })
    }
}
openRevDet();



let startsRateModal = [...document.querySelectorAll('.rating-item .images .img')];

function hoverStarsRate() {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            });
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            });
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                });
                st.classList.add('clicked');
                st.closest('.rating-item').querySelector('span strong').innerHTML = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}

hoverStarsRate();


let showRev = [...document.querySelectorAll('.show-rev')];

function showRevAll() {
    if (showRev.length) {
        showRev.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.prod-reviews__content').querySelector('.prod-reviews__list').classList.toggle('showed')
            })
        })
    }
}

showRevAll();

let btnGoRevs = [...document.querySelectorAll('.product-info__tags .rate p')];
function goToRevs() {
    if (btnGoRevs.length) {
        btnGoRevs.forEach((btn) => {
            $(btn).click(function() {
                $('.tab-btn--revs').click();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".tab-btn--revs").offset().top
                }, 500);
            });
        })
    }
}
goToRevs();


//scroll item page
let btnGoItems = [...document.querySelectorAll('.item-link')];
function goToItemsSides() {
    if (btnGoItems.length) {
        btnGoItems.forEach((btn) => {
            $(btn).click(function(e) {
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $($(btn).attr('href')).offset().top - 120
                }, 500);
            });
        })
    }
}
goToItemsSides();

$(".go-price").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".prices-js").offset().top - 150
    }, 500);
});
//tabs control

// let tabBtn = [...document.querySelectorAll('.tab-btn')];
let tabs = [...document.querySelectorAll('.tab')];

function controlTabs() {

}

//tabs control