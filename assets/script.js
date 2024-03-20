const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0;
const SlidesAmount = slides.length;
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

carousel(position);
addDots();
selectedDot();

arrow_left.addEventListener("click", function () {
  if (position === 0) {
    position = SlidesAmount - 1;
  } else {
    position--;
  }
  carousel(position);
});

arrow_right.addEventListener("click", function () {
  if (position === SlidesAmount - 1) {
    position = 0;
  } else {
    position++;
  }
  carousel(position);
});

function addDots() {
  const dots = document.querySelector(".dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");

    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}

function selectedDot() {
  const bulletPoints = document.querySelectorAll(".dot");
  for (let i = 0; i < bulletPoints.length; i++) {
    const dot = bulletPoints[i];
    if (i === position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

function carousel(position) {
  const imgSlides = slides[position];
  const img = document.querySelector(".banner-img");
  img.setAttribute("src", "./assets/images/slideshow/" + imgSlides.image);

  const p = document.querySelector("#banner p");
  p.innerHTML = imgSlides.tagLine;
  selectedDot();
}
