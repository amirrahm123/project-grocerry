const handleGetItems = async () => {
  //Request for items from DB
  try {
    const res = await fetch(`http://localhost:5500/item/get-item`, {
      method: "GET",
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById(
    "searchButton"
  ) as HTMLButtonElement;
  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const filterType = document.getElementById("filterType") as HTMLSelectElement;

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    const selectedType = filterType.value;
    const itemContainer = document.getElementById(
      "item__Container"
    ) as HTMLDivElement;
    itemContainer.innerHTML = "";
    getAndRenderItems(searchTerm, selectedType);
  });

  getAndRenderItems("", "all");
});

async function getAndRenderItems(searchTerm, selectedType) {
  try {
    const items = await handleGetItems();

    const filteredItems = items.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const typeMatch = selectedType === "all" || item.type === selectedType;
      return nameMatch && typeMatch;
    });

    filteredItems.forEach((item) =>
      renderItem(item._id, item.name, item.src, item.type, item.price)
    );
  } catch (error) {
    console.error("Error fetching and rendering items:", error);
  }
}

async function handleAddItem() {
  //Request to add Item to DB
  const nameInput = document.querySelector("#name__Input") as HTMLInputElement;
  const srcInput = document.getElementById("src__Input") as HTMLInputElement;
  const typeSelect = document.getElementById(
    "type__Input"
  ) as HTMLSelectElement;
  const priceInput = document.getElementById(
    "price__Input"
  ) as HTMLInputElement;

  const newItem = {
    name: nameInput.value,
    src: srcInput.value,
    type: typeSelect.value,
    price: parseFloat(priceInput.value),
  };

  try {
    const res = await fetch(`http://localhost:5500/item/add-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    if (res.ok) {
      console.log("Item added successfully!");
      const resJson = await res.json();
      console.log(resJson);
      renderItem(
        resJson._id,
        newItem.name,
        newItem.src,
        newItem.type,
        newItem.price
      );
    } else {
      console.log("Failed to add Item.");
    }
  } catch (error) {
    console.error("Error adding Item:", error);
    const errorMessage = await error.json();
    console.log(errorMessage);
  }
}

async function renderItem(itemId, name, src, type, price) {
  //Render Item
  console.log({ itemId, name, src, type, price });
  const itemContainer = document.getElementById(
    "item__Container"
  ) as HTMLDivElement;
  const renderDiv = document.createElement("div");
  renderDiv.id = itemId;
  const cartImg = "./shopping-cart-empty-side-view.png";
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  renderDiv.innerHTML = `<img onclick="addToCart('${itemId}')" class="cart__Icon "src="${cartImg}" alt="Item Image">
  <img class="item__Image "src="${src}" alt="Item Image"  style="max-width: 100px; max-height: 100px;">  
  <h1>${name}</h1> 
        <h1>Type: ${type}</h1> 
        <h1>Price: ${price}$</h1> 
  
        ${
          isAdmin
            ? `<button onclick="handleDeleteItem('${itemId}')">Delete</button>`
            : ""
        }
    
      `;

  renderDiv.classList.add("renderDiv");
  itemContainer.appendChild(renderDiv);
}

const handleDeleteItem = async (itemId) => {
  try {
    const res = await fetch(
      `http://localhost:5500/item/delete-item/${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      console.log("Item deleted successfully!");
      location.reload();
    } else {
      console.log("Failed to delete item.");
    }
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

async function addToCart(itemId: string) {
  //get the user id
  const userId = localStorage.getItem("id");
  if (!userId) return alert("please login first.");

  //send the update request
  try {
    const res = await fetch("http://localhost:5500/item/addToCart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, userId }),
    });
    if (res.ok) {
      alert("Item added successfully to the cart!");
    }
  } catch (error) {
    const errorMessage = await error.json();
    console.log(errorMessage);
  }
}

const renderCart = async () => {
  //get the user
  try {
    const res = await fetch(`http://localhost:5500/user/get-user`, {
      method: "GET",
    });
    const users = await res.json();
    const user = users.filter((u) => u._id == localStorage.getItem("id"))[0];
    console.log("user: ", user);

    //get items
    const itemsRes = await fetch(`http://localhost:5500/item/get-item`, {
      method: "GET",
    });
    const items = await itemsRes.json();

    //filter items
    const filteredItems = items.filter((item) => user.cart?.includes(item._id));
    console.log("filteredItems", filteredItems);
    const itemContainer = document.querySelector(".cart") as HTMLDivElement;

    //render to screen
    filteredItems?.map((item) => {
      const renderDiv = document.createElement("div");
      renderDiv.id = item._id;
      renderDiv.innerHTML = `
            <h1>${item.name}</h1> 
            <h1>Type: ${item.type}</h1> 
            <h1>Price: ${item.price}</h1> 
            <img class="item__Image "src="${item.src}" alt="Item Image"  style="max-width: 100px; max-height: 100px;"> 
          `;

      renderDiv.classList.add("renderDiv");
      itemContainer.appendChild(renderDiv);
    });
  } catch (error) {
    console.error(error);
  }
};
