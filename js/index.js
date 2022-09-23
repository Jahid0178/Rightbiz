const titles = document.querySelectorAll(".title");
const detailsDesc = document.querySelector(".details-desc");
console.log(detailsDesc);
titles.forEach((title) => {
  title.addEventListener("click", () => {
    detailsDesc.classList.toggle("show");
  });
});
