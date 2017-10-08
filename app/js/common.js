$(document).ready(function () {


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
        asNavFor: '.bl_product__verticalSlider'
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
                    vertical: false,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1
                }
            }

        ]



    });


// Zoom Effect

    $(".elevatezoom-gallery").ezPlus({
        zoomType: "inner",
        debug: true,
        cursor: "crosshair"
    });






//// hover sliders arrows navigations

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

    function sliderShowForAllCategories() {

//////Categories Filter

        var sliderName = $(".code_sliderName");

        sliderName.on("click", function () {
            $(".bl_filters__caterogyName_active").removeClass("bl_filters__caterogyName_active");
            sliderName.removeClass("bl_filters__caterogyName_active");
            $(this).addClass("bl_filters__caterogyName_active");

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_triangle__active");

        });

        var filterItem = $(".bl_filters__item");

        filterItem.on("click", function () {
            filterItem.removeClass("decor_circle");
            $(this).addClass("decor_circle");

            $(".bl_filters__subName_active").removeClass("bl_filters__subName_active");
            $(this).children().addClass("bl_filters__subName_active");
        });

//////// Characteristics filter

        var filterName = $(".code_filterName");

        filterName.on("click", function () {

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_leftTriangle__active");
        });



    }


    $(".bl_filter__label").on("click", function(event){

        $(this).find(".filter_text").toggleClass("filter_text__active");

            if ($(this).find(".bl_filter__checkbox").prop("checked") === true){
                $(this).find(".bl_filter__checkbox").prop("checked", false);
            }else{
                $(this).find(".bl_filter__checkbox").prop("checked", true);
            }


        event.preventDefault();

    });


    sliderShowForAllCategories();




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

    var quantityProduct = $(".block_quantity__input"),
        plusProduct = $(".block_quantity__plus"),
        minusProduct = $(".block_quantity__minus");

    plusProduct.on("click", function () {
        quantityProduct.val(Number(quantityProduct.val()) + 1);
    });

    minusProduct.on("click", function () {

        if (quantityProduct.val() > 1) {
            quantityProduct.val(Number(quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val(1);
        }
    });


});

// Showed ancor only when scrolling > scrineSize

$(window).scroll(function () {

    var ancorFish = $(".bl_ancor"),
        windowHeight = $(window).height() / 2;

    if ($(this).scrollTop() > windowHeight) {

        ancorFish.removeClass("hidden");

    } else {
        ancorFish.addClass("hidden");

    }

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



