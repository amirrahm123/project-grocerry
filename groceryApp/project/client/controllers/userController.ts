const handleGetUsers = async () => {
  //Request to get users from DB
  try {
    const res = await fetch(`http://localhost:5500/user/get-user`, {
      method: "GET",
    });
    console.log(res);
    const resJson = await res.json();
    console.log(resJson);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

async function handleAddUser() {
  const nameInput = document.querySelector("#name__Input") as HTMLInputElement;
  const passwordInput = document.getElementById(
    "password__Input"
  ) as HTMLInputElement;

  const newUser = {
    name: nameInput.value,
    password: passwordInput.value,
  };

  try {
    const res = await fetch(`http://localhost:5500/user/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      console.log("User added successfully!");
      const resJson = await res.json();
      console.log(resJson);
      localStorage.setItem("id", resJson.id);
      localStorage.setItem("displayName", resJson.name);
      localStorage.setItem("isAdmin", resJson.isAdmin);
      navInit();
    } else {
      console.log("Failed to add User.");
    }
  } catch (error) {
    console.error("Error adding User:", error);
    const errorMessage = await error.json();
    console.log(errorMessage);
  }
}

function handleLogin(ev: Event | undefined) {
  try {
    const nameInput = document.querySelector(
      "#loginName__Input"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "loginPassword__Input"
    ) as HTMLInputElement;
    if (!nameInput) throw new Error("No name");
    if (!passwordInput) throw new Error("No Password");
    const name = nameInput.value;
    const password = passwordInput.value;
    const newUser: any = { name, password };

    //send to server:
    fetch("http://localhost:5500/user/login-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("id", data.id);
        localStorage.setItem("displayName", data.name);
        localStorage.setItem("isAdmin", data.isAdmin);
        navInit();
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

async function logOut() {
  localStorage.removeItem("id");
  localStorage.removeItem("name");
  localStorage.removeItem("isAdmin");
  location.reload();
}

function adminNavbar() {
  try {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin === "true") {
      const adminNav = document.getElementById("navAdmin") as HTMLAnchorElement;
      adminNav.style.display = "block";
    }
  } catch (error) {
    console.error("Error checking admin status:", error);
  }
}
