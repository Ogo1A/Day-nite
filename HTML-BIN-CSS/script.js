document.getElementById("theme-toggle").addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
