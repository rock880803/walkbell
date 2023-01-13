const $nav = $('nav');
const $navItem = $('.nav-item');
const $immersionBlock = $('.immersion-block');

const $windowHeight = $(window).height();
const $windowWidth = $(window).width();
const $scrollContainer = $('.scroll-container');
const NumIntroduction = $('.introduction').length;
const NumLiterature = $('.literature').length;
const NumExperiment = $('.experiment').length;
const NumResults = $('.results').length;
const NumDiscussion = $('.discussion').length;

const anchorIntroduction = $windowHeight * (2);
const anchorLiterature = anchorIntroduction + $windowHeight * NumLiterature;
const anchorExperiment = anchorLiterature + $windowHeight * NumExperiment;
const anchorResults = anchorExperiment + $windowHeight * NumResults;
const anchorDiscussion = anchorResults + $windowHeight * NumDiscussion;

$scrollContainer.scroll(function () {
    var position = $(this).scrollTop();
    // console.log(position);
    if (position < $windowHeight * 2) {
        $navItem.removeClass('js-click');

    } else if (position > $windowHeight * 2 - 200 && position <= anchorIntroduction) {
        $('#introduction').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorIntroduction && position <= anchorLiterature) {
        $('#literature').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorLiterature && position <= anchorExperiment) {
        $('#experiment').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorExperiment && position <= anchorResults) {
        $('#results').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorResults && position <= anchorDiscussion) {
        $('#discussion').addClass('js-click').siblings().removeClass('js-click');

    } else if (position > anchorDiscussion) {
        $('#reference').addClass('js-click').siblings().removeClass('js-click');

    }
});

// mouse position
// $("html").mousemove(function (e) {
//     console.log(e.pageX + ", " + e.pageY)
// })

//   to up-down
const $to = $('#to');
var num = -1;
setInterval(function () {
    num < 0 ? num++ : num = -1
    $to.css({ 'margin-top': num * 2 + '%', })
}, 800);

// workpiece

const $workpiece = $('.workpiece');

$('html').mousemove(function (e) {
    var h = e.pageX - $windowWidth / 2;
    var v = e.pageY - $windowHeight / 2;
    $workpiece.css({
        "transform":
            "rotateY(" + -h / 80 + "deg)" +
            "rotateX(" + v / 100 + "deg)",
        "width": $windowWidth / 2,
    })
})

// bgAudio

document.getElementById("bgAudio").volume = 0.2;

// mobile Mode
const $mobileMode = $('.mobile-only');
$windowWidth < 1000 ? $scrollContainer.hide() : $mobileMode.hide();