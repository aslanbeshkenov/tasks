const blocks = document.querySelectorAll(".block"),
  prevSlide = document.querySelector(".prevSlide"),
  nextSlide = document.querySelector(".nextSlide");

function pos(el, pattern) {
  let position;
  if (el.style.transform == "") {
    position = 0;
  } else {
    position = Number(el.style.transform.match(pattern));
  }
  return position;
}

function showNextSlide() {
  blocks.forEach((block) => {
    let pattern = /[0-9]+/gm;

    let posX = pos(block, pattern);

    if (posX == 500) {
      return;
    }

    block.style.transition = "transform 0.5s";
    block.style.transform = `translateX(-${posX + 100}px)`;
  });
}

function showPrevSlide() {
  blocks.forEach((block) => {
    let pattern = /-[0-9]+/gm;

    let posX = pos(block, pattern);

    if (posX == 0) {
      return;
    }

    block.style.transition = "transform 0.5s";
    block.style.transform = `translateX(${posX + 100}px)`;
  });
}

prevSlide.addEventListener("click", showPrevSlide);
nextSlide.addEventListener("click", showNextSlide);
