const carousel = document.querySelector(".carousel");
arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = document.querySelectorAll(".card-box")[0];
console.log(firstImg);

let isDragging = false,
  prevPageX,
  prevScrollLeft;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icons) => {
  icons.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icons.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 50);
  });
});

// function autoSlide() {
//   positionDiff = Math.abs(positionDiff);
//   let firstImgWidth = firstImg.clientWidth + 14;
//   let valDifferent = firstImgWidth - positionDiff;
//   console.log(valDifferent);
// }

function dragStart(e) {
  isDragging = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

function dragging(e) {
  if (!isDragging) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

function dragStop() {
  isDragging = false;
  carousel.classList.remove("dragging");
  // autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
