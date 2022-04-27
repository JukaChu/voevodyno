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
    if (window.innerWidth > 1050) {
        document.documentElement.scrollTop
        // console.log( + 'scrolled from top');
        if (document.body.querySelector('.header')) {

            if (oldValue >= newValue) {
                // console.log('scroll top?')
                document.querySelector('.header').classList.remove('is-fixed');
                if (window.pageYOffset >= 20) {
                    document.querySelector('.header').classList.add('is-fixed');
                }
            } else {
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
                    } else {
                        btn.closest('.has-item').classList.add('open');

                    }
                });
                if (window.innerWidth < 451) {
                    let aCol = [...btn.closest('.has-item').querySelectorAll('.menu-column > a')];

                    aCol.forEach((col) => {
                        col.addEventListener('click', (e) => {
                            e.preventDefault();
                            col.closest('.menu-column').classList.toggle('open');
                        })
                    })
                }
            }

        })
    }
}

openLinkCat();
//open mob lang

let langMob = [...document.querySelectorAll('.hidden-cont > *.lang > a')];

function openLangMenu() {
    if (langMob.length) {
        langMob.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.closest('.lang').classList.toggle('open');
            })
        })
    }
}

openLangMenu();
//open mob lang

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
                        slidesPerView: 4,
                    },

                    1280: {
                        slidesPerView: 5,
                    }
                }


            });
        })
    }
}

instaSlider();

//insta gallery

//blog gallery
let blogGallery = [...document.querySelectorAll('.blog-slider.js-slider')];

function blogSlider() {
    if (!blogGallery.length) {

    } else {
        blogGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.blog-slider__cont');
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


                    600: {
                        slidesPerView: 2,
                    },


                    1280: {
                        slidesPerView: 3,
                    }
                }


            });
        })
    }
}

blogSlider();

//blog gallery

//photo gallery
let photoGallery = [...document.querySelectorAll('.photo-slider.js-slider')];

function photoSlider() {
    if (!photoGallery.length) {

    } else {
        photoGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.photo-slider__cont');
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


                    600: {
                        slidesPerView: 2,
                    },

                }


            });
        })
    }
}

photoSlider();

//photo gallery

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

let eventGal = [...document.querySelectorAll('.catalog-event__content.js-slider')];

function eventGalSlider() {
    if (!eventGal.length) {

    } else {
        if (window.innerWidth > 705) {

        } else {
            eventGal.forEach((sld) => {
                let sldCont = sld.querySelector('.event-gallery');

                let pagin = sld.querySelector('.dots');
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    speed: 600,
                    spaceBetween: 10,
                    enabled: true,

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


                });
            })
        }

    }
}

eventGalSlider();
//gall photo

let photoGal = [...document.querySelectorAll('.gallery-page.js-slider')];

function photoGalSlider() {
    if (!photoGal.length) {

    } else {
        if (window.innerWidth > 705) {

        } else {
            photoGal.forEach((sld) => {
                let sldCont = sld.querySelector('.gallery-page__block');

                let pagin = sld.querySelector('.dots');
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    speed: 600,
                    spaceBetween: 10,
                    enabled: true,

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


                });
            })
        }

    }
}

photoGalSlider();
//gall photo
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

//fprice open

let spaHead = [...document.querySelectorAll('.spa-head')];

function openSpaPrice() {
    if (spaHead.length) {
        spaHead.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('opened');
            })
        })
    }
}

openSpaPrice();

//price open


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
let carrMod = [...document.querySelectorAll('.mod--order')];

function openCarrMod() {
    if (carrMod.length) {
        carrMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--order').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openCarrMod();

let certMod = [...document.querySelectorAll('.mod--cert')];

function openCertMod() {
    if (certMod.length) {
        certMod.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window--cert').classList.add('active');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openCertMod();

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


//scroll item page
let btnGoItems = [...document.querySelectorAll('.item-link')];

function goToItemsSides() {
    if (btnGoItems.length) {
        btnGoItems.forEach((btn) => {
            $(btn).click(function (e) {
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $($(btn).attr('href')).offset().top - 120
                }, 500);
            });
        })
    }
}

goToItemsSides();

$(".go-price").click(function () {
    if ( document.querySelector(".prices-js")) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".prices-js").offset().top - 150
        }, 500);
    }

});


//open cat blog

let btnCatBlog = [...document.querySelectorAll('.blog-cat-btn')];
let catBlogPopup = document.querySelector('.cat-blog-popup');

function openCatBlog() {
    if (btnCatBlog.length) {
        btnCatBlog.forEach((btn) => {
            btn.addEventListener('click', () => {
                catBlogPopup.classList.add('visible');
                document.body.classList.add('no-scroll');
            })
        });
        let closeBtn = catBlogPopup.querySelector('.close-cat');
        let catCont = catBlogPopup.querySelector('.cat-blog-cont');

        catBlogPopup.addEventListener('click', () => {
            catBlogPopup.classList.remove('visible');
            document.body.classList.remove('no-scroll');
        });

        catCont.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
        closeBtn.addEventListener('click', () => {
            catBlogPopup.classList.remove('visible');
            document.body.classList.remove('no-scroll');
        });


    }
}

openCatBlog();

//open cat blog
//open price catalog

let opener = [...document.querySelectorAll('.event-single-price > p')];

function openPriceCatalog() {
    if (opener.length) {
        opener.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.event-single-price').classList.toggle('open');
            })
        })
    }
}

openPriceCatalog();

//open price catalog
//open price service

let openerServicePrice = [...document.querySelectorAll('.additive-room .left')];

function openServicepPrice() {
    if (openerServicePrice.length) {
        openerServicePrice.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.additive-room').classList.toggle('open');
            })
        })
    }
}

openServicepPrice();

//open price service
//open services list


let openerList = [...document.querySelectorAll('.catalog-head__list.dropdwn')];

function openServiceList() {
    if (openerList.length) {
        openerList.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

openServiceList();

//open services list
//change tab book list

let ulBookList = [...document.querySelectorAll('.room-book__list ul li')];
let ulBookTabs = [...document.querySelectorAll('.room-book_single')];

function changeBookList() {
    if (ulBookList.length) {
        ulBookList.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    let dropBook = btn.closest('.room-book__list').querySelector('.catalog-head__list')

                    ulBookList.forEach((btn2, l) => {
                        if (btn2.classList.contains('active')) {
                            btn2.classList.remove('active');

                        }
                    });
                    ulBookTabs.forEach((tab, m) => {
                        if (tab.classList.contains('active')) {
                            tab.classList.remove('active');

                        }

                    });
                    ulBookTabs.forEach((tab2, n) => {
                        if (n === k) {
                            tab2.classList.add('active');
                        }
                    });
                    btn.classList.add('active');
                    dropBook.classList.remove('open');
                    let btnText = btn.innerHTML;
                    dropBook.querySelector('span').innerHTML = btnText;
                }
            })
        })
    }
}

changeBookList();
//change tab book list

$('.go-map').click(function (e) {
    e.preventDefault();

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#map-road").offset().top - 50
    }, 500);
});

//open calendar block mob

let openerCalendar = [...document.querySelectorAll('.calendar-month .calendar-day .close')];
let closerCalendar = document.querySelector('.calendar-month >.close');

function openCloseCalendar() {
    if (openerCalendar.length) {
        openerCalendar.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.calendar-day').classList.add('opened');
                btn.closest('.calendar-month').classList.add('opened');
            })
        });
        closerCalendar.addEventListener('click', () => {
            closerCalendar.closest('.calendar-month').classList.remove('opened');
            closerCalendar.closest('.calendar-month').querySelector('.calendar-day.opened').classList.remove('opened');
        })
    }
}
openCloseCalendar();

//open calendar block mob