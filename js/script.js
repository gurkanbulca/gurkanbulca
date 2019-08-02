var rellax = new Rellax(".rellax");



$(document).ready(function () {
    var body = $("html, body");

    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

    selectHightlight();



    var bottomArray = document.querySelectorAll(".animate-bottom");
    var topArray = document.querySelectorAll(".animate-top");
    var leftArray = document.querySelectorAll(".animate-left");
    var rightArray = document.querySelectorAll(".animate-right");
    var progressBars = document.querySelectorAll(".progress-bar");
    var progressTextArray = document.querySelectorAll(".progress-text");
    var countFlag = 0;

    var progressAmounts = [];
    var progressTexts = [];

    progressBars.forEach(function (element) {
        progressAmounts.push($(element).css("width"));
        $(element).css("width", 0);
    });

    progressTextArray.forEach(function (element) {
        progressTexts.push($(element).text());
    });

    if (!(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $(".animate-bottom").css({
            "bottom": "200px",
            "opacity": "0"
        });

        $(".animate-top").css({
            "top": "200px",
            "opacity": "0"
        });

        $(".animate-left").css({
            "left": "200px",
            "opacity": "0"
        });

        $(".animate-right").css({
            "right": "200px",
            "opacity": "0"
        });
    }




    $("#home-btn").click(function () {


        body.stop().animate({
            scrollTop: $("#home").offset().top
        }, 1000, "swing")
    });

    $("#about-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#about").offset().top
        }, 1000, "swing")
    });

    $("#services-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#services").offset().top
        }, 1000, "swing")
    });

    $("#skills-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#parallax").offset().top
        }, 1000, "swing")
    });

    $("#experience-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#experience").offset().top
        }, 1000, "swing")
    });

    $("#blog-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#blog").offset().top
        }, 1000, "swing")
    });

    $("#contact-btn").click(function () {

        body.stop().animate({
            scrollTop: $("#contact").offset().top
        }, 1000, "swing")
    });


    // Scroll ile tetiklenen fonksiyonlar...
    $(window).scroll(function () {

        selectHightlight();



        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            animateBottom(bottomArray);
            animateTop(topArray);
            animateLeft(leftArray);
            animateRight(rightArray);
        }


        progressAnimate(progressBars, progressTexts);

        if (countFlag == 0) {
            $('.count').each(function () {
                var divTop = $(this).offset().top,
                    divHeight = $(this).outerHeight(),
                    wHeight = $(window).height(),
                    windowScrTp = $(window).scrollTop();
                if ((windowScrTp > (divTop + divHeight - wHeight + 100))) {
                    countAnimation(this);
                    countFlag = 1;


                }

            });
        }







    });

});





// Fonksiyon kütüphanesi...
function animateBottom(elements) {
    $(document).ready(function () {
        elements.forEach(function (element) {
            var divTop = $(element).offset().top,
                divHeight = $(element).outerHeight(),
                wHeight = $(window).height(),
                windowScrTp = $(this).scrollTop();
            if (windowScrTp > (divTop + divHeight - wHeight + 100)) {
                $(element).animate({
                    opacity: 1,
                    bottom: 0
                }, "slow");
            }
        })
    });
}

function animateTop(elements) {
    $(document).ready(function () {
        elements.forEach(function (element) {
            var divTop = $(element).offset().top,
                divHeight = $(element).outerHeight(),
                wHeight = $(window).height(),
                windowScrTp = $(this).scrollTop();
            if (windowScrTp > (divTop + divHeight - wHeight - 300)) {
                $(element).animate({
                    opacity: 1,
                    top: 0
                }, "slow");
            }
        })
    });
}

function animateLeft(elements) {
    $(document).ready(function () {
        elements.forEach(function (element) {
            var divTop = $(element).offset().top,
                divHeight = $(element).outerHeight(),
                wHeight = $(window).height(),
                windowScrTp = $(this).scrollTop();
            if (windowScrTp > (divTop + divHeight - wHeight - 100)) {
                $(element).animate({
                    opacity: 1,
                    left: 0
                }, "slow");
            }
        })
    });
}

function animateRight(elements) {
    $(document).ready(function () {
        elements.forEach(function (element) {
            var divTop = $(element).offset().top,
                divHeight = $(element).outerHeight(),
                wHeight = $(window).height(),
                windowScrTp = $(this).scrollTop();
            if (windowScrTp > (divTop + divHeight - wHeight - 100)) {
                $(element).animate({
                    opacity: 1,
                    right: 0
                }, "slow");
            }
        })
    });
}


function progressAnimate(elements, progressAmounts) {
    $(document).ready(function () {
        for (let i = 0; i < elements.length; i++) {
            var divTop = $(elements[i]).offset().top,
                divHeight = $(elements[i]).outerHeight(),
                wHeight = $(window).height(),
                windowScrTp = $(window).scrollTop();
            if (windowScrTp > (divTop + divHeight - wHeight - 100)) {
                $(elements[i]).css("width", progressAmounts[i]);
            }
        }
    });
}

function countAnimation(element) {
    $(element).prop('Counter', 0).animate({
        Counter: $(element).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(element).text(Math.ceil(now));
        }
    });
}

function selectHightlight() {
    if ($(window).scrollTop() < $("#about").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#home-btn").attr("class", "activated tab");
    } else if ($(window).scrollTop() < $("#services").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#about-btn").attr("class", "activated tab");
    } else if ($(window).scrollTop() < $("#parallax").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#services-btn").attr("class", "activated tab");
    } else if ($(window).scrollTop() < $("#experience").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#skills-btn").attr("class", "activated tab");
    } else if ($(window).scrollTop() < $("#blog").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#experience-btn").attr("class", "activated tab");
    } else if ($(window).scrollTop() < $("#contact").offset().top) {
        $(".activated").attr("class", "uline tab");
        $("#blog-btn").attr("class", "activated tab");
    } else {
        $(".activated").attr("class", "uline tab");
        $("#contact-btn").attr("class", "activated tab");
    }
}