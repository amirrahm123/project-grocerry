document.addEventListener("DOMContentLoaded", () => {
  getAndRenderItems();

  const modalWrapper = document.querySelector(
    ".modal__wrapper"
  ) as HTMLDivElement;

  modalWrapper.addEventListener("click", (event) => {
    if (event.target === modalWrapper) {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  handleGetUsers();
});

async function handleLoginAndCloseModal(ev: Event) {
  try {
    await handleLogin(ev); // Pass the event parameter
    await closeModal();
  } catch (error) {
    console.error(error);
  }
}

async function showModal() {
  const modalWrapper = document.querySelector(
    ".modal__wrapper"
  ) as HTMLDivElement;
  modalWrapper.style.display = "flex";
}
async function closeModal() {
  const modalWrapper = document.querySelector(
    ".modal__wrapper"
  ) as HTMLDivElement;
  modalWrapper.style.display = "none";
}
