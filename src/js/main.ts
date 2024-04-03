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