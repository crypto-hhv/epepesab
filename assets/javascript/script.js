let header = document.querySelector(".navbar")
window.onscroll = (e)=> {
   if (window.pageYOffset > 300) {
      header.style.padding= "1vw 5vw";
      header.style.backgroundColor= "#047a04";
    } else{
      header.style.backgroundColor = "transparent";
      header.style.padding= "2vw 4vw";
    }
 }



const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});


const drop = document.querySelector(".drop");
const dropdown = document.querySelector(".dropdown-content");

drop.addEventListener("click", () => {
  drop.classList.toggle("active");
  dropdown.classList.toggle("active");
});

// navbarToggle1.addEventListener("mouseleave", () => {
//   navbarToggle1.classList.remove("active");
//   navbarLinks1.classList.remove("active");
// });



// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }