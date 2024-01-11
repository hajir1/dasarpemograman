const light = document.getElementById("light")
const dark = document.getElementById("dark")

light.addEventListener("click", function() {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  });

  dark.addEventListener("click", function() {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  })