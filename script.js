const popup = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".fa-circle-xmark");
const daftarBtn = document.querySelectorAll(".daftar");
const scrollBtn = document.querySelector(".scroll-top");
const bars = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");
const sendWA = document.querySelector("button.send")
const logo = document.querySelector(".logo")

if (document.body.offsetWidth == 600) {
  console.log('ok')
}
navbar.classList.add("right")

function checkWidth() {
  if ($(window).width() > 600) {
    navbar.classList.remove("right");
  }
}

setInterval(checkWidth, 100)

popup.classList.add("none");

window.addEventListener("scroll", (event) => {
  var scroll = this.scrollY;
  if (scroll > 400) {
    scrollBtn.classList.remove('none');
  } else {
    scrollBtn.classList.add('none');
  }
});

daftarBtn.forEach(e => {
  e.addEventListener("click", () => {
    popup.classList.toggle('none')
  })
})
closeBtn.addEventListener('click', () => {
  popup.classList.add('none')
})

scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

logo.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

bars.addEventListener("click", () => {
  navbar.classList.toggle("right");
  document.querySelector(".nav-content").childNodes.forEach(e => {
    e.addEventListener("click", () => {
      navbar.classList.add("right");
    })
  })
})

// send WA
sendWA.addEventListener("click", () => {
  var text = "Halo Little Cloud Mandarin Course, saya tertarik dengan kursus Little Cloud Mandarin"
  window.open(`https://api.whatsapp.com/send/?phone=62818347779&text=${text}`, '_blank')
})

// change text
var typed = new Typed(".auto-type", {
  strings: ["Online", "Offline"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})