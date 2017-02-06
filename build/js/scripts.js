//Popup
var link = document.querySelector(".entry-form__ref-link");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content__btn-close");
var cancel = popup.querySelector(".modal-content__btn-cancel");
var overlay = document.querySelector(".modal-overlay");

//Popup logic
link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-content-show");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();

  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();

  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-content-show");
});

//Closing logic
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-content-show");
    }
  }
});

overlay.addEventListener("click", function(event) {
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
  }
});
