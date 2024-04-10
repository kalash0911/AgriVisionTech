/* header */

const burger = document.querySelector('.burger');
const linkClose = document.querySelectorAll('.link-close');
const overflow = document.querySelector('.overflow');

burger?.addEventListener('click', function () {
  document.body.classList.toggle('body_lock');
  document.body.classList.toggle('active');
});

overflow?.addEventListener('click', function () {
  document.body.classList.toggle('body_lock');
  document.body.classList.toggle('active');
});

for (let i = 0; i < linkClose.length; ++i) {
  linkClose[i].addEventListener('click', function () {
  document.body.classList.remove('body_lock');
  document.body.classList.remove('active');
  });
}

/* search */

const searchBtn = document.querySelector('.search-btn');
const searchFile = document.querySelector('.search-file');
const overflowBlur = document.querySelector('.overflow-blur');

searchBtn?.addEventListener('click', function () {
  searchFile?.classList.add('active');
  overflowBlur?.classList.add('active');
  document.body.classList.add('body_lock');
});

overflowBlur?.addEventListener('click', function () {
  searchFile?.classList.remove('active');
  overflowBlur.classList.remove('active');
  document.body.classList.remove('body_lock');
});

/* Swiper: */

function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);
  // @ts-ignore
  let swiper = new Swiper(selector, init);

  const toggleInit = () => {
    const neededWidth = moreThan
      ? win.innerWidth >= width
      : win.innerWidth <= width;
    if (neededWidth) {
      if (!sliderSelector?.classList.contains("swiper-initialized")) {
        // @ts-ignore
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach((evt) =>
    win.addEventListener(evt, toggleInit, false)
  );

}

// @ts-ignore
destroySlidersOnResize(".missionSlider", 99999, {
  spaceBetween: 20,
  autoHeight: true,

  pagination: {
    el: '.pag',
    clickable: true,
  },
});

// @ts-ignore
destroySlidersOnResize(".challengesSlider", 1199, {
  spaceBetween: 20,
  slidesPerView: 3.8,
  slidesPerGroup: 1,
  initialSlide: 2,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1.9,
      initialSlide: 1,
    },
    680: {
      slidesPerView: 2.2,
      initialSlide: 1,
    },
    900: {
      slidesPerView: 3.8,
      initialSlide: 2,
    },
  },

});

// @ts-ignore
destroySlidersOnResize(".meetSlider", 99999, {
  spaceBetween: 50,
  slidesPerView: 5,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      spaceBetween: 40,
      slidesPerView: 1.3,
      centeredSlides: true,
    },
    480: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    680: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    1600: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".marqueeSlider", 99999, {
  slidesPerView: 6.6,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
  speed: 20000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3.6,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 6.6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6.6,
      spaceBetween: 60,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".marqueeSmSlider", 99999, {
  slidesPerView: 7.6,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  speed: 7000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5.6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7.6,
      spaceBetween: 40,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".marqueeSmRevSlider", 99999, {
  slidesPerView: 7.6,
  spaceBetween: 40,
  loop: true,
  speed: 7000,
  centeredSlides: true,
  
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5.6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7.6,
      spaceBetween: 40,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".marqueeSmSpSlider", 99999, {
  slidesPerView: 7.6,
  spaceBetween: 40,
  loop: true,
  speed: 4000,
  centeredSlides: true,
  
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5.6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7.6,
      spaceBetween: 40,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".revSlider", 99999, {
  spaceBetween: 40,
  slidesPerView: 3,
  autoHeight: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: '.pag',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// @ts-ignore
destroySlidersOnResize(".blogSlider", 99999, {
  spaceBetween: 90,
  slidesPerView: 2,
  initialSlide: 1,

  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1.2,
      centeredSlides: true,
    },
    480: {
      spaceBetween: 60,
      slidesPerView: 1.5,
      centeredSlides: true,
    },
    769: {
      spaceBetween: 60,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 90,
      slidesPerView: 2,
    },
  },

});