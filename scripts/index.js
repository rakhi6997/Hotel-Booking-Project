function view() {
    var toggle = document.getElementById("vm");
    if (toggle.textContent === "View More") {
      document.getElementById("moreimages").style.display = "flex";
      toggle.innerText = "View Less";
    } else {
      document.getElementById("moreimages").style.display = "none";
      toggle.innerText = "View More";
    }
  }