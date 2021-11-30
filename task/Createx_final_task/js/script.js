$('.nc-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        dots: false,
      }
    }
  ]
});
$('.na-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 300,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
   {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        dots: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        dots: false,
        slidesToShow: 1,
      }
    }
  ]
});
$('.trending-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        dots: false,
        slidesToShow: 1,
      }
    }
  ]
});
$('.sale-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        dots: false,
        slidesToShow: 1,
      }
    }
  ]
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);