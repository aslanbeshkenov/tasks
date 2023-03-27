const container = document.querySelector(".container");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.innerHTML = `
        <div class="modal-container">
            <a class="close">X</a>
            <div class="modal">Hello World!</div>
        </div>
    `;

function showModal() {
  container.appendChild(overlay);

  const close = document.querySelector(".close");
  close.addEventListener("click", closeModal);
}

function closeModal() {
  container.removeChild(overlay);
}

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", showModal);
overlay.addEventListener("click", (e) => {
  if (e.target == overlay) {
    closeModal();
  }
});
