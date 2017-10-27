$(document).ready(function () {

    var blackWrapper = $(".blackWrapper"),
        body = $("body");


//// Controls Menu

    var buttonControlsInformation = $(".bl_controls__button"),
        controlsField = $(".bl_controls"),
        animateMobileControls = "bl_controls__hidden",
        iconControlsOpen = "icon-controls__open",
        iconControlsClose = "icon-controls__close";

    buttonControlsInformation.on("click", function(){

        $(this).toggleClass("icon-controls__open icon-controls__close");
        controlsField.toggleClass(animateMobileControls);
    });

    var buttonCategories = $(".bl_nav__button"),
        buttonSubCategories = $(".bl_nav__button_subCategory"),
        fullCategoriesFild = $(".bl_nav__fullItems"),
        discountBlock = $(".bl_nav__discount");

    sliderEffectForButtons(buttonCategories, fullCategoriesFild, 300);
    sliderEffectForButtons(buttonCategories, discountBlock, 500);

//// Fixed TopMenu plus Ancor

    var mainHeaderBlock = $(".main_header"),
        mainNavigation = $(".bl_nav");
        // sumTopBlocks = $(".main_heade, .bl_nav");



    var topMainHeaderBlock = mainHeaderBlock.offset().top,
        // topMainNavigation = mainNavigation.offset().top,
        mainHeaderFixed = "main_header__fixed",
        mainNavigationFixed = "bl_nav__fixed";


    console.log( topMainHeaderBlock + " =topMainHeaderBlock");

    var screenWidth = screen.width;
    // Showed ancor only when scrolling > scrineSize

    $(window).scroll(function () {



        var ancor = $(".bl_ancor"),
            windowHeight = $(window).height() / 2;

        if ($(this).scrollTop() > windowHeight) {

            ancor.removeClass("hidden");

        } else {
            ancor.addClass("hidden");
        }


        if ( ($(this).scrollTop() >= topMainHeaderBlock) && (screenWidth >= 1027)) {
            mainHeaderBlock.addClass(mainHeaderFixed);
            mainNavigation.addClass(mainNavigationFixed);
        } else {
            mainHeaderBlock.removeClass(mainHeaderFixed);
            mainNavigation.removeClass(mainNavigationFixed);
        }


    });




///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }

/// slideEffect for SubcategoriesMenu
    function sliderEffectForSubcategoriesMenu() {
        buttonSubCategories.on("click", function () {
            $(this).toggleClass("icon_arrowSubmenu__active");
            $(this).siblings(".bl_nav__subCategory").slideToggle();
        });
    }




//  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }


    var buttonLanguage = $(".bl_language__active"),
        fieldWithOtherLanguage = $(".bl_language__variables"),
        buttonChooseRigthLanguage = $(".bl_language__variables_item");

    hideShowEffect(buttonLanguage, fieldWithOtherLanguage);
    hideShowEffect(buttonChooseRigthLanguage, fieldWithOtherLanguage);


/// buttons must work only  $(window).width() <=991px


    function liveScopeOfButtons() {

        if ($(window).width() <= 991) {
            sliderEffectForSubcategoriesMenu();


            // sliderEffectForButtons(buttonRubrics, fieldRubrics, 600);
            // sliderEffectForButtons(buttonCategories, fieldCategories, 600);
            // sliderEffectForButtons(buttonInformation, fieldInformation, 600);
            // sliderEffectForButtons(buttonContacts, fieldContacts, 600);
            // sliderEffectForButtons(buttonAdress, fieldAdress, 600);
            // sliderEffectForButtons(buttonFilterCategories, fieldFilterCategories, 600);
            // sliderEffectForButtons(buttonAllFilters, fieldAllFilters , 600);

        } else {
            return false;
        }

    }

    liveScopeOfButtons();


    //// Main-slider

    $(".bl_mainSlider__full").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        navText: true,
        dots: true,
        autoplay: true,
        stopOnHover: true,
        margin: 4,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: true,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });


////// slider_bestseller

    $(".slider_bestseller").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 20,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5
            },
            991: {
                items: 3
            },
            550: {
                items: 2,
                margin: 5
            },
            450: {
                margin: 0,
                items: 1,
                center: true
            },

            320: {
                items: 1,
                center: true
            }

        }
    });

//    Discount Products  - Скидки

    $(".slider_discountProducts").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 20,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5
            },
            991: {
                items: 3
            },
            550: {
                items: 2,
                margin: 5
            },
            450: {
                margin: 0,
                items: 1,
                center: true
            },

            320: {
                items: 1,
                center: true
            }

        }
    });


    ///// SLIDER Similar products

    $(".slider_similarProducts").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 20,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5
            },
            991: {
                items: 3
            },
            550: {
                items: 2,
                margin: 5
            },
            450: {
                margin: 0,
                items: 1,
                center: true
            },

            320: {
                items: 1,
                center: true
            }

        }
    });
//// slider_youViewed  - Вы смотрели:


    $(".slider_youViewed").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 20,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5
            },
            991: {
                items: 3
            },
            550: {
                items: 2,
                margin: 5
            },
            450: {
                margin: 0,
                items: 1,
                center: true
            },

            320: {
                items: 1,
                center: true
            }

        }
    });



/// slider_classicGenre - Слайдер Классика жанра:

    $(".slider_classicGenre").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true
    });





/////////////////////////////////////////////

/// SLIDER Product

        $(".bl_product__productSlider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.bl_product__verticalSlider',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                }
                ]
        });


    // Zoom Effect

    function zoomEffect() {

        if (body.width() >= 1200) {
            $(".bl_product__productSlider .slick-active .bl_product_image").elevateZoom({
                cursor: "pointer",
                borderSize: 2,
                borderColour: "#7f8000"
            });
        }else if ( (body.width() < 1200) && (body.width() > 768) ) {
            $(".bl_product__productSlider .slick-active .bl_product_image").elevateZoom({
                zoomType: "inner"
            });
        }else {
            return false;
        }


    }
    // zoomEffect();



    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',

        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });





/// SLIDER Product Vertical


    $('.bl_product__verticalSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.bl_product__productSlider',
        arrows: true,
        vertical: true,
        focusOnSelect: true,
        prevArrow: '<div class="slickArrow-prev"></div>',
        nextArrow: '<div class="slickArrow-next"></div>',
        infinite: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    prevArrow: '<div class="slickArrow-prev"></div>',
                    nextArrow: '<div class="slickArrow-next"></div>',
                    vertical: false,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    prevArrow: '<div class="slickArrow-prev"></div>',
                    nextArrow: '<div class="slickArrow-next"></div>',
                    vertical: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<div class="slickArrow-prev"></div>',
                    nextArrow: '<div class="slickArrow-next"></div>',
                    vertical: false
                }
            }

        ]

    });

    var miniSlide = $(".bl_product__verticalSlider .bl_product__verticalItem"),
        buttonNext = $(".bl_product__verticalSlider .slickArrow-next"),
        buttonPrev = $(".bl_product__verticalSlider .slickArrow-prev");

    function activationZoomEffect(button){
        button.on("click", function(){
            zoomEffect();
        })
    }
    activationZoomEffect(miniSlide);
    activationZoomEffect(buttonNext);
    activationZoomEffect(buttonPrev);

//// hover Part of Clotes

    function hoverPartOfClotes(partOftext, partOfBody) {

        partOftext.hover(function () {
                partOfBody.addClass("clothes_body__show");
            },
            function () {
                partOfBody.removeClass("clothes_body__show");
            });
    }

    hoverPartOfClotes( $("#code_neck"), $(".clothes_body__neck") );
    hoverPartOfClotes( $("#code_chest"), $(".clothes_body__chest") );
    hoverPartOfClotes( $("#code_sleeve"), $(".clothes_body__sleeve") );
    hoverPartOfClotes( $("#code_waist"), $(".clothes_body__waist") );
    hoverPartOfClotes( $("#code_hip"), $(".clothes_body__hip") );







    // SLIDER for categories show

//     function sliderShowForAllCategories() {
//
//         var sliderName = $(".code_sliderName");
//
//         sliderName.on("click", function () {
//             $(".bl_filters__caterogyName_active").removeClass("bl_filters__caterogyName_active");
//             sliderName.removeClass("bl_filters__caterogyName_active");
//             $(this).addClass("bl_filters__caterogyName_active");
//
//             $(this).next().toggleClass("hidden");
//             $(this).toggleClass("decor_triangle__active");
//
//         });
//
//         var filterItem = $(".bl_filters__item");
//
//         filterItem.on("click", function () {
//             filterItem.removeClass("decor_circle");
//             $(this).addClass("decor_circle");
//
//             $(".bl_filters__subName_active").removeClass("bl_filters__subName_active");
//             $(this).children().addClass("bl_filters__subName_active");
//         });
//
// //////// Characteristics filter
//
//         var filterName = $(".code_filterName");
//
//         filterName.on("click", function () {
//
//             $(this).next().toggleClass("hidden");
//             $(this).toggleClass("decor_leftTriangle__active");
//         });
//
//
//
//     }


    // $(".bl_filter__label").on("click", function(event){
    //
    //     $(this).find(".filter_text").toggleClass("filter_text__active");
    //
    //         if ($(this).find(".bl_filter__checkbox").prop("checked") === true){
    //             $(this).find(".bl_filter__checkbox").prop("checked", false);
    //         }else{
    //             $(this).find(".bl_filter__checkbox").prop("checked", true);
    //         }
    //
    //
    //     event.preventDefault();
    //
    // });


    // sliderShowForAllCategories();


    /// POPUP BIFORE ADD TO SHOPBAG

    function popupWindowBiforeAddToShopBag() {

        var TESTBUTTON = $(".TEST_BUTTON");

        var popupWindow = $(".popup_likeShopbag"),
            buttonClose = $(".popup_likeShopbag__close"),
            buttonContinueBuying = $(".popup_likeShopbag__continueBuying");


        TESTBUTTON.on("click", function () {

            popupWindow.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });

        function closePopupWindow(btn) {
            btn.on("click", function () {
                popupWindow.addClass("hidden");
                blackWrapper.addClass("hidden");
                blackWrapper.animate({opacity: 0}, 400);
            })
        }
        closePopupWindow(buttonClose);
        closePopupWindow(buttonContinueBuying);
        closePopupWindow(blackWrapper);



    } popupWindowBiforeAddToShopBag();

///// Popups Advantages

    function popupAdvantages() {

        var popupBlock = $(".popup_advantages"),
            buttonOriginal = $(".code_original"),
            buttonShowroom = $(".code_showroom"),
            buttonDelivery = $(".code_delivery"),
            contentBlock = $(".popup_advantages__fullContent"),
            closeButton = $(".popup_advantages__close");


        function showPopupAdvantage(btn) {
            btn.on("click", function () {
                contentBlock.html("");
                popupBlock.removeClass("hidden");

                contentBlock.insertAfter();  //// Тут вставляй свой контент

                blackWrapper.removeClass("hidden");
                blackWrapper.animate({opacity: 0.6}, 300);
            });
        }
        showPopupAdvantage(buttonOriginal);
        showPopupAdvantage(buttonShowroom);
        showPopupAdvantage(buttonDelivery);

        function hidePopupAdvantage(btn){
            btn.on("click", function () {
                popupBlock.addClass("hidden");
                blackWrapper.addClass("hidden");
                blackWrapper.animate({opacity: 0}, 400);
            })
        }

        hidePopupAdvantage(closeButton);
        hidePopupAdvantage(blackWrapper);




    }popupAdvantages();




////// GRID / LIST view - switch

    var buttonGridView = $(".code_grid"),
        buttonListView = $(".code_list"),

        classGrid = "view_grid__STYLE",
        classList = "view_list__STYLE",

        bl_fullProducts__item =$(".bl_fullProducts__item"),

        code_listView1 = $(".code_listView1"),
        code_listView2 = $(".code_listView2"),
        code_listView3 = $(".code_listView3"),
        code_listView4 = $(".code_listView4"),
        allProducts = $(".bl_products");



    buttonGridView.on("click", function(){
        allProducts.removeClass(classList);
        allProducts.addClass(classGrid);


        code_listView1.removeClass("col-md-3");
        code_listView2.removeClass("col-md-9");

    });

    buttonListView.on("click", function(){
        allProducts.removeClass(classGrid);
        allProducts.addClass(classList);

        code_listView1.addClass("col-md-3");
        code_listView2.addClass("col-md-9");


    });




//// Short description

    var sizeDescription = $(".product_sizeDescription"),
        labelSize = $('.product_size__label'),
        fullSizeRadioButtons = $(".product_size__input"),
        blockWoodBeHidden = $(".bl_minInformationAboutProduct");

    fullSizeRadioButtons.on("click", function () {

        blockWoodBeHidden.addClass("hidden");

        var index = 0;
        var count = 0;

        labelSize.each(function () {
            count++;
            if ($(this).children('input').prop('checked') == true) {
                index = count;
            }
        });

        sizeDescription.removeClass("product_sizeDescription__showed");
        sizeDescription.eq(index - 1).addClass("product_sizeDescription__showed");

    });


/// Button Review

    var buttonAddReview = $(".button_review"),
        fieldAddReview = $(".review_product__form"),
        buttonAddReview2 = $(".bl_characteristics__addReview");

    sliderEffectForButtons( buttonAddReview, fieldAddReview, 400);

    buttonAddReview2.on("click", function(){

        $(".inf_product__tabs li").removeClass("active");
        $("#top-tab-review").addClass("active");
        $(".tab-content .tab-pane").removeClass("active");
        $("#tab-review").addClass("active");

        fieldAddReview.css({"display":"block"});
        var top = fieldAddReview.offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });





// Ancor to top

    $(".bl_ancor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask( "+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


/// Success Buying
//  Если пользователю удалось отправить номер своего мобильного продавцу должна отрабатывать эта функция


    function successfulPurchasePassed() {

        var blackWrapper = $(".blackWrapper"),
            blSuccsess = $(".bl_successBuying"),
            buttonClose = $(".bl_successBuying__close");


        setTimeout(showBlock, 200);

        buttonClose.on("click", hideBlock);
        blackWrapper.on("click", hideBlock);


        function showBlock() {

           blackWrapper.removeClass("hidden");
           blackWrapper.animate({opacity: 0.6}, 300);

            blSuccsess.removeClass("hidden");
            blSuccsess.removeClass("bounceOutUp");
            blSuccsess.addClass("animated bounceInDown");
        }

        function hideBlock() {
            blSuccsess.removeClass("bounceInDown");
            blSuccsess.addClass("bounceOutUp");
            blackWrapper.animate({opacity: 0}, 400);


            setTimeout(function(){
                blackWrapper.addClass("hidden");
                blSuccsess.addClass("hidden");
            },1000);
        }




    }



    $(".btn_buy__send").on("click", successfulPurchasePassed); //// Заменить нажатие на кнопку на обработку события



////// Product quantity


    $(".block_quantity__plus").on("click", function () {

     var  quantityProduct = $(this).siblings(".block_quantity__input");

        quantityProduct.val(Number( quantityProduct.val()) + 1);
    });

    $(".block_quantity__minus").on("click", function () {

        var  quantityProduct = $(this).siblings(".block_quantity__input");

        if (quantityProduct.val() > 1) {
            quantityProduct.val(Number( quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val(1);
        }
    });


});




// RESIZE WINDOW

var body = $("body");

var iconMenu = $(".open-menu-min"),
    iconMenu_close = "close-menu-min";

var fullNavigation = $(".bl_fullNavigation"),
    mobileNavigation = "bl_fullNavigation_mobile",

    blockNavigation = $(".bl_nav"),
    menuMobile = "bl_nav__mobile",
    closeMenu = "closeMenu";


$(window).resize(function () {

    var fieldRubrics = $(".bl_fullCategories__field"),
        fieldCategories = $(".bl_catalogProducts__full"),

        fieldInformation = $(".code_information__full"),
        fieldContacts = $(".code_contacts__full"),
        fieldAdress = $(".code_adress__full");


    // var buttonsWorkRight = liveScopeOfButtons();      ///////////// Эта хрень не работает =(


    if (body.width() >= 1200) {






        fullNavigation.removeClass(mobileNavigation);
        blockNavigation.removeClass(menuMobile);
        blockNavigation.removeClass(closeMenu);
    } else {
        fullNavigation.addClass(mobileNavigation);


        blockNavigation.addClass(menuMobile);
        blockNavigation.addClass(closeMenu);

        iconMenu.removeClass(iconMenu_close);


    }


    if (body.width() >= 992) {
        fieldRubrics.css({"display": "block"});
        fieldCategories.css({"display": "block"});
        fieldInformation.css({"display": "block"});
        fieldContacts.css({"display": "block"});
        fieldAdress.css({"display": "block"});

        $(".bl_filters").css({"display": "block"});
        $(".bl_filters__productsFilters").css({"display": "block"});


        return false;


    } else {
        fieldRubrics.css({"display": "none"});
        fieldCategories.css({"display": "none"});
        fieldInformation.css({"display": "none"});
        fieldContacts.css({"display": "none"});
        fieldAdress.css({"display": "none"});


        $(".bl_filters").css({"display": "none"});
        $(".bl_filters__productsFilters").css({"display": "none"});

    }


});
$(window).resize();



