if ($('#owl-wrapper').length) {
    var owl = $('.owl-one');
    owl.owlCarousel({ 
        items: 5,
        dots: false,  
        nav:false,  
        loop: false,
        autoplay: false,
        autoplayTimeout: 10000,
        responsiveClass: true,
        lazyLoad:true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
            items: 1
        },
            600: {
                items: 1
            },
            900: {
            items: 1
            },
            1440:{
                items: 1
            } 
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('prev.owl', [2000]);
        } else { 
            owl.trigger('next.owl', [2000]);
        }
        e.preventDefault();
    });     
    $('.owl-one').on('change.owl.carousel', function(e) { 
        if (e.namespace && e.property.name === 'position' 
        && e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1) {
        // put your stuff here ...
        //$( "#next" ).trigger( "click" );
                var cls = $(this).closest(".section").next().offset().top;
                $("html, body").animate({scrollTop: cls}, "slow");
        }
    });
} 

if ($('#owl-wrap').length) {
    var owl = $('.owl-two');
    owl.owlCarousel({ 
        items: 5,
        dots: false,  
        nav:false,  
        loop: false,
        autoplay: false,
        autoplayTimeout: 10000,
        responsiveClass: true,
        lazyLoad:true,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1.9
            },
            450: {
            items: 1.9
        },
            600: {
                items: 1.9
            },
            900: {
            items: 1.9
            },
            1440:{
                items: 1.9
            } 
        }
    });
}

function mobileCheck () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

$('#carouselThumbnail1, #carouselLink1, #carouselThumbnail2, #carouselLink2, #carouselThumbnail3, #carouselLink3, #carouselThumbnail4, #carouselLink4, #carouselThumbnail5, #carouselLink5').click(function () {
    $('#carouselVideo, #carouselOverlay').fadeIn('slow');
    document.getElementById("carouselVideo").style.display = "flex";
    $('#carouselVideo').html('<iframe style="margin-top:15%;" width=1280 height=720 src=https://www.youtube.com/embed/'+ $(this).attr("data-target") +' frameborder=0 allowfullscreen></iframe>');
});

$('#carouselMobThumbnail1, #carouselMobThumbnail2, #carouselMobThumbnail3, #carouselMobThumbnail4, #carouselMobThumbnail5 ').click(function () {
    $('#carouselVideoMob, #carouselOverlayMob').fadeIn('slow');
    document.getElementById("carouselVideoMob").style.display = "flex";
    $('#carouselVideoMob').html('<iframe src=https://www.youtube.com/embed/' + $(this).attr("data-target") + ' frameborder=0 allowfullscreen></iframe>');
});

$('#slide1Next, #slide2Next, #slide3Next, #slide4Next, #slide5Next').click(function () {
    if ($(this).parent().parent().hasClass("active")) {
        var index = parseInt($(this).attr('id').substring(5, 6));
        $('#slideMob' + index.toString()).removeClass('active');
        if (index < 5) {
            $('#slideMob' + (index + 1).toString()).addClass('active');
        }
        else {
            $('#slideMob1').addClass('active');
        }
    }
})

$('#slide1Prev, #slide2Prev, #slide3Prev, #slide4Prev, #slide5Prev').click(function () {
    if ($(this).parent().parent().hasClass("active")) {
        var index = parseInt($(this).attr('id').substring(5, 6));
        $('#slideMob' + index.toString()).removeClass('active');
        if (index > 1) {
            $('#slideMob' + (index - 1).toString()).addClass('active');
        }
        else {
            $('#slideMob5').addClass('active');
        }
    }
})

$(document).mouseup(function (e) {

    if ($('#carouselVideoMob').css("display") === "flex" && !$('#carouselVideoMob').is(e.target)) {
        $('#carouselVideoMob, #carouselOverlayMob').fadeOut('slow');
        document.getElementById("carouselVideoMob").style.display = "none";
        $('#carouselVideoMob').html('');
    }
    if (!$('#carouselVideo').is(e.target)) {
        $('#carouselVideo, #carouselOverlay').fadeOut('slow');
        document.getElementById("carouselVideo").style.display = "none";
        $('#carouselVideo').html('');
    }
});


$(window).scroll(function () {
    var commitment = document.getElementById('commitment-text'),
        commitment1 = document.getElementById('commitment-paragraph-first'),
        commitment2 = document.getElementById('commitment-paragraph-second'),
        commitmentT = $('#commitment').offset().top,
        commitmentH = $('#commitment').outerHeight(),
        circles = document.getElementById('circles-container'),
        circlesT = $('#circles-container').offset().top,
        circlesH = $('#circles-container').outerHeight(),
        percent = document.getElementById('percent-container'),
        percentT = $('#percent-container').offset().top,
        percentH = $('#percent-container').outerHeight(),
        cards = document.getElementById('cards-wrapper'),
        cardsT = $('#cards-wrapper').offset().top,
        cardsH = $('#cards-wrapper').outerHeight(),
        circlesPerc = document.getElementById('circlesPerc-container'),
        circlesPercT = $('#circlesPerc-container').offset().top,
        circlesPercH = $('#circlesPerc-container').outerHeight(),
        america = document.getElementById('america'),
        americaT = $('#america').offset().top,
        americaH = $('#america').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop(),
        mobile = mobileCheck();

    //commitment text
    if (wS > (commitmentT + commitmentH - wH - 900) && !commitment.classList.contains("show") && !mobile) {
        commitment.classList.add("show");
        commitment1.classList.add('animateText');
        commitment1.classList.add('show');
        commitmentTextAnimate();
    }
    //circles
    if (wS > (circlesT + circlesH - wH) && !circles.classList.contains("show") && !mobile) {
        circles.classList.add("show");
        resetCircles();
        animateCircles();
    }
    //percent bars
    if (wS > (percentT + percentH - wH - 400) && !percent.classList.contains("show") && !mobile) {
        percent.classList.add("show");
        resetBars();
        animateBars(3);
    }
    //cards
    if (wS > (cardsT + cardsH - wH - 100) && !cards.classList.contains("show") && !mobile) {
        cards.classList.add("show");
        resetCards();
        flipCards();
    }
    //circlesPerc
    if (wS > (circlesPercT + circlesPercH - wH) && !circlesPerc.classList.contains("show") && !mobile) {
        circlesPerc.classList.add("show");
        animateCirclesPerc();
    }
    //america
    if (wS > (americaT + americaH - wH - 100) && !america.classList.contains("show") && !mobile) {
        america.classList.add("show");
        animateStats();
    }
});

function animateBars(duration) {
 
    $('.barra').each(function (index) {
        animateBar($(this).find('.barra-nivel'), parseInt($(this).find('.barra-nivel').attr("data-nivel")), parseInt(duration));
    });
}

function animateBar(bar, max, duration) {

    var tmp = 10;
    if (bar.hasClass("long"))
        tmp = 5;
    bar.css('transition',(duration-1)+'s');
    bar.width(max + "%");
    var text = bar.find('.barra-text');
    for (let i = 0; i <= max; i++) {
        setTimeout(function () {
            var progress = i.toString() + "%";
            text.html(progress);
            
        }, (i * ((tmp * duration))-1));
    }
}

function resetBars() {

    $('.barra').each(function (index) {
        resetBar($(this).find('.barra-nivel'), $(this).find('.barra-text'));
    });
}

function resetBar(bar) {
    bar.css('transition', '0s');
    bar.width("0%");
    bar.find('.barra-text').html("");
}

function animateCircles() {
    animateCircle1();
    setTimeout(animateCircle2, 500);
    setTimeout(animateCircle3, 1000);
    setTimeout(animateCircle4, 1500);
    setTimeout(animateCircle5, 2000);
}

function animateCircle1() {
    $('#circle1').removeClass("invisible");
    anime.timeline({ loop: false })
        .add({
            targets: '.circlePercent1 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.circlePercent1 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.circlePercent1 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.circlePercent1 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.circlePercent1 .bang',
            scale: [0, 1],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.circlePercent1 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
}

function animateCircle2() {
    $('#circle2').removeClass("invisible");
    anime.timeline({ loop: false })
        .add({
            targets: '.circlePercent2 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.circlePercent2 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.circlePercent2 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.circlePercent2 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.circlePercent2 .bang',
            scale: [0, 1],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.circlePercent2 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
}

function animateCircle3() {
    $('#circle3').removeClass("invisible");
    anime.timeline({ loop: false })
        .add({
            targets: '.circlePercent3 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.circlePercent3 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.circlePercent3 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.circlePercent3 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.circlePercent3 .bang',
            scale: [0, 1],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.circlePercent3 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
}

function animateCircle4() {
    $('#circle4').removeClass("invisible");
    anime.timeline({ loop: false })
        .add({
            targets: '.circlePercent4 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.circlePercent4 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.circlePercent4 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.circlePercent4 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.circlePercent4 .bang',
            scale: [0, 1],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.circlePercent4 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
}

function animateCircle5() {
    $('#circle5').removeClass("invisible");
    anime.timeline({ loop: false })
        .add({
            targets: '.circlePercent5 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.circlePercent5 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.circlePercent5 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.circlePercent5 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.circlePercent5 .bang',
            scale: [0, 1],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.circlePercent5 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
}

function resetCircles() {
    $('#circle1').addClass("invisible");
    $("#circle1").find('.bang').css("transform", "scale(0)");
    $('#circle2').addClass("invisible");
    $("#circle2").find('.bang').css("transform", "scale(0)");
    $('#circle3').addClass("invisible");
    $("#circle3").find('.bang').css("transform", "scale(0)");
    $('#circle4').addClass("invisible");
    $("#circle4").find('.bang').css("transform", "scale(0)");
    $('#circle5').addClass("invisible");
    $("#circle5").find('.bang').css("transform", "scale(0)");
}

function flipCards() {
    flipCard('.flip-card.first', 1, 58);

    setTimeout(function () {
        flipCard('.flip-card.second', 2, 46);
    }, 500);
    setTimeout(function () {
        flipCard('.flip-card.third', 3, 41);
    }, 1000);
    setTimeout(function () {
        flipCard('.flip-card.fourth', 4, 41);
    }, 1500);
    setTimeout(function () {
        flipCard('.flip-card.fifth', 5, 31);
    }, 2000);
}

function flipCard(target, textNo, percent) {
    $(target).addClass("fliped");
    for (let i = 0; i <= percent; i++) {
        setTimeout(function () {
            var progress = i.toString() + "%";
            $('#percent' + textNo).html(progress);

        }, (i * (10 - 1)));
    }
}

function resetCards() {
    $('.flip-card').removeClass("fliped");
    for (var i = 1; i <= 5; i++)
        $('#percent' + i.toString()).html('');
}

function animateEnvironmental() {

    $('.enivorment-title').addClass("show");

    anime.timeline({ loop: false })
        .add({
            targets: '.enivorment-title .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 650,
            delay: (el, i) => 100 * (i + 1)
        });

    for (let i = 1; i <= 40; i++) {
        setTimeout(function () {
            var n1 = (Math.floor(Math.random() * 10)).toString();
            var n2 = (Math.floor(Math.random() * 10)).toString();
            var n3 = (Math.floor(Math.random() * 10)).toString();
            var n4 = (Math.floor(Math.random() * 10)).toString();
            var n5 = (Math.floor(Math.random() * 10)).toString();
            var n6 = (Math.floor(Math.random() * 10)).toString();

            if (i >= 6)
                n6 = "0";
            if (i >= 14)
                n5 = "0";
            if (i >= 20)
                n4 = "0";
            if (i >= 28)
                n3 = "0";
            if (i >= 34)
                n2 = "0";
            if (i >= 40)
                n1 = "3";
                       

            var number = n1 + n2 + n3 + ',' + n4 + n5 + n6;
            $('#env-number').html(number);
        }, i * 50);
    }
}

function resetEnvironmental() {
    $('.enivorment-title').removeClass("show");
}

function animateCirclesPerc() {
    $('.loadingCircle').each(function (index) {
        $(this).addClass('animateCircle');

        $(this).find('.progress-value').each(function (index){
            var percent = parseInt($(this).attr("data-percent"));
            var text = $(this).find('.loadingCircleValue');
            for (let i = 0; i <= percent; i++) {
                setTimeout(function () {
                    var progress = i.toString() + "%";
                    text.html(progress);

                }, (i * (1800/percent)));
            }
        });
    });
}

function resetCirclesPerc() {

}

function loader() {
    // Show root
    setTimeout(function () {
        document.getElementById("root").style.display = "block";
        document.getElementById("hero-img").className = document.getElementById("hero-img").className + " animate";
        heroTextAnimate();


        // Preload images
        const preloadImages = () => {
            return new Promise((resolve, reject) => {
                imagesLoaded(document.querySelectorAll('.content__item-img'), { background: true }, resolve);
            });
        };

        // And then..
        preloadImages().then(() => {
            // Remove the loader
            document.body.classList.remove('loading');
            // Get the scroll position and update the lastScroll variable
            getPageYScroll();
            lastScroll = docScroll;
            // Initialize the Smooth Scrolling
            new SmoothScroll();
        });

    }, 8800);
    var t = 0;

    if (!$('#loader').hasClass('loaded')) {
        for (let i = 0; i <= 100; i++) {
            setTimeout(function () {
                var progress = i.toString() + "%";
                document.getElementById("progress-counter").innerHTML = progress;
                if (i === 100) {
                    $('#loader').addClass('loaded');
                }
            }, i * 89);
            
        }
    }
    
}

function heroTextAnimate() {
    anime.timeline({ loop: false })
        .add({
            targets: '.hero-title .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1250,
            delay: (el, i) => 150 * (i + 1)
        });
}

function commitmentTextAnimate() {
    anime.timeline({ loop: false })
        .add({
            targets: '.commitmentText .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 60 * (i + 1)
        });
}

function animateStats() {
    anime.timeline({ loop: false })
        .add({
            targets: '.number.number-1',
            scale: [0, 1],
            translateX: '-250%',
            translateY: '-150%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-2',
            scale: [0, 1],
            translateX: '-55%',
            translateY: '-115%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-3',
            scale: [0, 1],
            translateX: '240%',
            translateY: '-87%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-4',
            scale: [0, 1],
            translateX: '305%',
            translateY: '60%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-5',
            scale: [0, 1],
            translateX: '110%',
            translateY: '115%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-6',
            scale: [0, 1],
            translateX: '-120%',
            translateY: '140%',
            easing: "easeInOutQuad",
            duration: 400
        }).add({
            targets: '.number.number-7',
            scale: [0, 1],
            translateX: '-270%',
            translateY: '35%',
            easing: "easeInOutQuad",
            duration: 400
        });
}

function resetPage() {

    var commitment = document.getElementById('commitment-text'),
        commitment1 = document.getElementById('commitment-paragraph-first'),
        commitment2 = document.getElementById('commitment-paragraph-second'),
        circles = document.getElementById('circles-container'),
        percent = document.getElementById('percent-container'),
        cards = document.getElementById('cards-wrapper'),
        environmental = document.getElementById('environmental-container'),
        circlesPerc = document.getElementById('circlesPerc-container');
        
    commitment.classList.remove("show");
    commitment1.classList.remove("animateText");
    commitment2.classList.remove("animateText");
    circles.classList.remove("show");
    resetCircles();
    percent.classList.remove("show");
    resetBars();
    cards.classList.remove("show");
    resetCards();
    circlesPerc.classList.remove("show");
}

$(document).ready(function ($) {
    
    loader();

    resetPage();

    if (mobileCheck()) {
        var commitment = document.getElementById('commitment-text'),
            commitment1 = document.getElementById('commitment-paragraph-first'),
            circles = document.getElementById('circles-container'),
            percent = document.getElementById('percent-container'),
            cards = document.getElementById('cards-wrapper'),
            circlesPerc = document.getElementById('circlesPerc-container'),
            america = document.getElementById('america');

        commitment.classList.add("show");
        //commitment1.classList.add('animateText');
        commitment1.style.opacity = 1;
        commitment1.classList.add('show');
        commitmentTextAnimate();
        circles.classList.add("show");
        resetCircles();
        animateCircles();
        percent.classList.add("show");
        resetBars();
        animateBars(3);
        cards.classList.add("show");
        resetCards();
        flipCards();
        circlesPerc.classList.add("show");
        animateCirclesPerc();
        america.classList.add("show");
        animateStats();
    }

    /*
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 223,
                    thickness: 5,
                    emptyFill: "#617564",
                    fill: {
                        color: '#F4D16F'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(0) + "%");
                }).stop();
            }
        });
        $('.progressbar1').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 189,
                    thickness: 4,
                    emptyFill: "rgba(0,0,0,0)",
                    fill: {
                        color: '#3B5440'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(0) + "%");
                }).stop();
            }
        });
    }*/
    // Show animated elements
    //animateElements();
    //$(window).scroll(animateElements);
}); //end document ready function
