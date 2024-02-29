import { certificatesList, newsList } from "./constants.js";

const cardsContainer = document.getElementById("certificates-card");

certificatesList.forEach((certificate) => {
  const cardElement = document.createElement("div");
  cardElement.className = "col";
  cardElement.innerHTML = `
  <div class='card border-0 text-center rounded-4' style="min-height: 100%;">
    <img src="./imgs/${certificate.id}.jpeg" class="card-img-top rounded-top-4 rounded-0" alt="photo">
    <div class="card-body mt-4">
    <h5 class="card-title fw-bold mb-3">${certificate.title}</h5>
    <p class="card-text text-body-tertiary fw-bold fs-6">${certificate.content}</p>
    </div>
    <button
    type="button"
    class="btn border-secondary border-2 fit-content mx-auto mb-3 border-opacity-10 fw-bold px-4 py-2 rounded-4"
    >
    تعرف علي المزيد
    </button>
  </div>
  `;

  cardsContainer.appendChild(cardElement);
});

const newsContainer = document.querySelector(".news-card");

newsList.forEach((news) => {
  const newsElement = document.createElement("div");
  newsElement.className = "col";
  newsElement.innerHTML = `
    <div class="card border-0 rounded-3 position-relative" style="min-height: 100%;">
      <div class="position-absolute news-badge bg-white rounded-4 px-2 fw-medium">
        ${news.badge}
      </div>
      <img src="./imgs/${news.id}.jpg" class="card-img-top rounded-0 rounded-top-3" alt="photo">
      <div class="card-body p-4">
        <p class="card-text"><small class="text-body-tertiary fw-bold">${news.date}</small></p>
        <h5 class="card-title fw-bold mb-3">${news.content}</h5>
        </div>
        <div class="more-info mt-4 fit-content mb-4 me-4" style="cursor: pointer;">
          <span class="fw-bold">عرض المزيد</span>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
    </div>
  `;
  newsContainer.appendChild(newsElement);
});

const myArray = ["2", "3", "4", "5", "6", "7"];

const partnersImg = document.querySelector(".partners-img");

myArray.forEach((el) => {
  const newsElement = document.createElement("div");
  newsElement.className =
    "col ";
  newsElement.innerHTML = `
  <div class='border-secondary border border-2 border-opacity-10 rounded-4'>
    <img src="./imgs/${el}.png" class="img-fluid rounded-4" alt="photo" />
  </div>
  `;
  partnersImg.appendChild(newsElement);
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}