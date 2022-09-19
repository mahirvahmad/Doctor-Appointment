// Click events for Read More & Read Less button click in About Doctor

const btnMore = document.querySelector(".btn-more");
const readMore = document.querySelector(".read-more");
const btnLess = document.querySelector(".btn-less");
const body = document.querySelector("body");

// When Read More click
btnMore.addEventListener("click", function () {
  readMore.style.display = "inline-block";
  btnMore.style.display = "none";
  btnLess.style.display = "inline-block";
  body.style.overflowY = "none";
});

// When Less More click
btnLess.addEventListener("click", function () {
  readMore.style.display = "none";
  btnMore.style.display = "inline-block";
  btnLess.style.display = "none";
});
