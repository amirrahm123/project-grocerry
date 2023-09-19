document.addEventListener("DOMContentLoaded", () => {
  navInit();
  userMsg();
  adminNavbar();

  const modalWrapper = document.querySelector(
    "#login__Modal"
  ) as HTMLDivElement;

  modalWrapper.addEventListener("click", (event) => {
    if (event.target === modalWrapper) {
      closeModal();
    }
  });

  const registerModal = document.querySelector(
    "#register__Modal"
  ) as HTMLDivElement;

  registerModal.addEventListener("click", (event) => {
    if (event.target === registerModal) {
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
  const modalWrapper = document.getElementById(
    "login__Modal"
  ) as HTMLDivElement;
  modalWrapper.style.display = "flex";
}
async function closeModal() {
  const loginModalWrapper = document.querySelector(
    "#login__Modal"
  ) as HTMLDivElement;
  const registerModalWrapper = document.querySelector(
    "#register__Modal"
  ) as HTMLDivElement;
  registerModalWrapper.style.display = "none";
  loginModalWrapper.style.display = "none";
}

async function showRegisterModal() {
  const modalWrapper = document.querySelector(
    "#register__Modal"
  ) as HTMLDivElement;
  console.log("registerModal");
  modalWrapper.style.display = "flex";
}

async function navInit() {
  const id = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("isAdmin");
  if (!isAdmin) {
    const navAdmin = document.querySelector("#navAdmin") as HTMLAnchorElement;
    navAdmin.style.display = "none";
  }
  if (id) {
    const navLogin = document.querySelector("#navLogin") as HTMLAnchorElement;
    const navRegister = document.querySelector(
      "#navRegister"
    ) as HTMLAnchorElement;
    navLogin.style.display = "none";
    navRegister.style.display = "none";
  } else {
    const navLogout = document.querySelector("#navLogout") as HTMLAnchorElement;
    navLogout.style.display = "none";
  }
}

function userMsg() {
  const id = localStorage.getItem("id");
  if (id) {
    const name = localStorage.getItem("displayName");
    const renderDiv = document.createElement("div");
    renderDiv.classList.add("userMsg");
    renderDiv.innerHTML = `<h1>Welcome back, ${name}</h1>`;
    const containerElement = document.querySelector(
      ".userMsg__Conatiner"
    ) as HTMLDivElement;
    containerElement.appendChild(renderDiv);
  }
}
