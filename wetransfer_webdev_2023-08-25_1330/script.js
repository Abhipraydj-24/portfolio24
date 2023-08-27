const scrollbtn = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
});
scrollbtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});