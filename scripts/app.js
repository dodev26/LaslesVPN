$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  prevArrow: `<button type="button" class="slick-prev slick-arrow pull-left">
      <img src="./images/icon/arrow-left-icon.svg" alt="arrow icon"/>
    </button>`,
  nextArrow: `<button type="button" class="slick-next slick-arrow pull-right">
      <img src="./images/icon/arrow-right-icon.svg" alt="arrow icon"/>
    </button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      },
    },
  ],
});

const btnToggle = document.getElementById("toggle-menu");
btnToggle.addEventListener("click", function () {
  const menu = document.getElementById("menu-mobile");
  menu.classList.toggle("is-show");
  if (menu.classList.contains("is-show")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

window.document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu-mobile");
  if (!menu.contains(e.target) && !btnToggle.contains(e.target)) {
    menu.classList.remove("is-show");
    document.body.style.overflowY = "auto";
  }
});
