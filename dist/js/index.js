$(document).ready(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function () {
    $(".modal").modal();
  });

  // -------------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
});

// -------------------------------===========-------------------------------

$(document).ready(function () {
  (function ($) {
    $(".numbers").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 9000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  })(jQuery);
});

// -------------------------------===========-------------------------------

const buttons_5 = document.querySelectorAll(".header__bottom__links");
buttons_5.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    this.parentNode.classList.toggle("header__link__none__active");

    buttons_5.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.parentNode.classList.remove("header__link__none__active");
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_6 = document.querySelectorAll(".vacancies__title__h3");
buttons_6.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    this.parentNode.classList.toggle("active");

    buttons_6.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.parentNode.classList.remove("active");
      }
    });
  });
});

// -------------------------------===========-------------------------------

const leadershipList = document.querySelector(".leadership__list");
if (leadershipList) {
  const leadershipItem = document.querySelectorAll(".leadership__item");

  leadershipItem.forEach((i) => {
    const open = i.querySelector(".leadership__button__open");
    const next = i.querySelector(".leadership__fixed");

    if (open) {
      open.onclick = () => {
        i.classList.add("active");
      };
    }

    if (next) {
      next.onclick = () => {
        i.classList.remove("active");
      };
    }
  });
}

// -------------------------------===========-------------------------------

const buttons_4 = document.querySelectorAll(".newsAll__filter__title");
buttons_4.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    this.parentNode.classList.toggle("active");

    buttons_4.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.parentNode.classList.remove("active");
      }
    });
  });
});

// -------------------------------===========-------------------------------

$(function () {
  let Catalog_max__pro__ul_link = document.querySelectorAll(
    ".newsAll__filter__link"
  );

  for (let i = 0; i < Catalog_max__pro__ul_link.length; i++) {
    Catalog_max__pro__ul_link[i].addEventListener("click", function () {
      for (let j = 0; j < Catalog_max__pro__ul_link.length; j++) {
        Catalog_max__pro__ul_link[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});

// -------------------------------===========-------------------------------

$(function () {
  let Catalog_max__pro__ul_link = document.querySelectorAll(
    ".library__link__menu"
  );

  for (let i = 0; i < Catalog_max__pro__ul_link.length; i++) {
    Catalog_max__pro__ul_link[i].addEventListener("click", function () {
      for (let j = 0; j < Catalog_max__pro__ul_link.length; j++) {
        Catalog_max__pro__ul_link[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});

// -------------------------------===========-------------------------------

$(function () {
  let Catalog_max__pro__ul_link = document.querySelectorAll(
    ".newsAll__pagination__link"
  );

  for (let i = 0; i < Catalog_max__pro__ul_link.length; i++) {
    Catalog_max__pro__ul_link[i].addEventListener("click", function () {
      for (let j = 0; j < Catalog_max__pro__ul_link.length; j++) {
        Catalog_max__pro__ul_link[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});

// -------------------------------===========-------------------------------

const e_reception = document.querySelector(".e_reception");
if (e_reception) {
  let fields = document.querySelectorAll(".field__file");
  Array.prototype.forEach.call(fields, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector(".e_reception__title__h4__file").innerText;

    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles)
        label.querySelector(".e_reception__title__h4__file").innerText =
          "Выбрано файлов:" + countFiles;
      else
        label.querySelector(".e_reception__title__h4__file").innerText =
          labelVal;
    });
  });
}

// -------------------------------===========-------------------------------

$(document).ready(function () {
  const header = document.querySelector("header");
  window.onscroll = () => {
    if (window.pageYOffset > 90) {
      header.classList.add("header__active");
      $(".header__active").fadeTo(1000, 1);
    } else {
      header.classList.remove("header__active");
      $(".header__active").fadeTo(1000, 1);
    }
  };
});

// -------------------------------===========-------------------------------
