const card = document.querySelector(".card");
const theDeleteButton = document.querySelector(".delete_button");

const MOVE_THRESHOLD = 100;

let initialX = 0;
let moveX = 0;
let isDeleteButtonOpen = false;

card.addEventListener("touchstart", e => {
  initialX = e.touches[0].pageX;
});

card.addEventListener("touchmove", e => {
  let currentX = e.touches[0].pageX;
  moveX = currentX - initialX;
});

card.addEventListener("touchend", e => {
  if (moveX < MOVE_THRESHOLD && !isDeleteButtonOpen) {
    theDeleteButton.style.transform = "scaleX(1)";
    isDeleteButtonOpen = !isDeleteButtonOpen;
  } else if (moveX > MOVE_THRESHOLD && isDeleteButtonOpen) {
    theDeleteButton.style.transform = "scaleX(0)";
    isDeleteButtonOpen = !isDeleteButtonOpen;
  }
});
