const burgerMenu = document.getElementById("burger-menu");
const closeMenu = document.getElementById("close-menu");
const mobileNavModal = document.querySelector(".mobile-nav-modal");

let navModalOpen = false;


const toggleNavModal = () => {
  navModalOpen = !navModalOpen;
  if(navModalOpen) {
    console.log("open")
    mobileNavModal.style.display = "block";
  } else {
    console.log("close")
    mobileNavModal.style.display = "none";
  }
}

// Event listeners
burgerMenu.addEventListener("click", toggleNavModal)
closeMenu.addEventListener("click", toggleNavModal);
