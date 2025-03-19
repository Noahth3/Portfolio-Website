let darkmode = localStorage.getItem('darkmode');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-content");
const themeSwitch = document.getElementById('theme-switch');



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll("section");
hiddenElements.forEach((el) => observer.observe(el));