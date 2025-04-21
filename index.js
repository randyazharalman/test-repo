
const navbar = document.getElementById('navbar');
const homeContainer = document.getElementById("container-home")
var scroll = false
// onscroll = () => {
  //   console.log("a");
  //   navbar.style.position = "fixed"
  //   navbar.style.display = "flex"
  //   navbar.style.width = "fit-content"
  //   navbar.style.margin = "auto"
  //   navbar.style.backgroundColor = "blue  "
  // }
  const handleScroll = (e) => {
    var scr = window.scrollY;
    if(scr > 100 ){
      homeContainer.style.backgroundColor ="red"
    }
  }
  window.addEventListener("scroll", handleScroll)
  
  window.onload(()=> {
    alert('a')
  })