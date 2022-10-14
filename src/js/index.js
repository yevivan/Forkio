"use strict";

const hamburgerMenuWrapper = document.querySelector(
  ".header__drop-menu-buttons-wrapper"
);
const habmurgerMenuButton = document.querySelector(
  ".header__drop-menu-button "
);
const habmurgerMenuCloseButton = document.querySelector(
  ".header__drop-menu-close-button"
);
const hamburgerMenu = document.querySelector(".header__mobile-drop-down-menu");
const hamburgerMenuItem = document.querySelectorAll(
  ".header__mobile-drop-down-menu-item"
);

hamburgerMenuWrapper.addEventListener("click", (event) => {
  if (
    !habmurgerMenuButton.classList.contains(
      "header__drop-menu-button-not-active"
    )
  ) {
    habmurgerMenuButton.classList.add("header__drop-menu-button-not-active");
    habmurgerMenuCloseButton.classList.remove(
      "header__drop-menu-button-not-active"
    );
    hamburgerMenu.classList.remove("header__mobile-drop-down-menu_not-active");
  } else {
    habmurgerMenuButton.classList.remove("header__drop-menu-button-not-active");
    habmurgerMenuCloseButton.classList.add(
      "header__drop-menu-button-not-active"
    );
    hamburgerMenu.classList.add("header__mobile-drop-down-menu_not-active");
  }
});

// document.addEventListener("click", (event) => {
//   // console.log(event.target);
//   if (
//     event.target != habmurgerMenuButton &&
//     event.target != habmurgerMenuCloseButton &&
//     event.currentTarget != hamburgerMenu &&
//     event.target != hamburgerMenuWrapper
//     //  && event.target != hamburgerMenuItem.closest(".header__mobile-drop-down-menu")
//     //  && event.target != hamburgerMenuItem.closest(".header__menu-item-link")
//     //  &&event.target != hamburgerMenuItem
//   ) {
//     // event.stopPropagation();
//     hamburgerMenu.classList.add("header__mobile-drop-down-menu_not-active");
//     habmurgerMenuCloseButton.classList.add(
//       "header__drop-menu-button-not-active"
//     );
//     habmurgerMenuButton.classList.remove("header__drop-menu-button-not-active");
//     console.log(event.target);
//   }
// });

document.addEventListener("click", (event) => {
  hamburgerMenu.classList.add("header__mobile-drop-down-menu_not-active");
  habmurgerMenuCloseButton.classList.add("header__drop-menu-button-not-active");
  habmurgerMenuButton.classList.remove("header__drop-menu-button-not-active");
  console.log(event.target);
});

hamburgerMenuWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

hamburgerMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});
