window.addEventListener("load", function () {
  let sidebar = document.querySelector(".sidebar-container");
  let tri = document.querySelector(".triangle");
  let isClicked = false;

  tri.onclick = function () {
    if (!isClicked) {
      sidebar.classList.remove("sidebar-no-show");
      isClicked = !isClicked;
    } else {
      sidebar.classList.add("sidebar-no-show");
      isClicked = !isClicked;
    }
  };
});
