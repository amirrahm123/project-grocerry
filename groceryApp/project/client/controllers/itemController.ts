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

const getAndRenderItems = async () => {
  //After getting items call renderItem()
  const items = await handleGetItems();
  items.map((item) =>
    renderItem(item._id, item.name, item.src, item.type, item.price)
  );
};

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
  renderDiv.innerHTML = `<img class="cart__Icon "src="${cartImg}" alt="Item Image"> ;
  <h1>${name}</h1> 
        <h1>Type: ${type}</h1> 
        <h1>Price: ${price}</h1> 
        <img class="item__Image "src="${src}" alt="Item Image"  style="max-width: 100px; max-height: 100px;"> 
      `;

  renderDiv.classList.add("renderDiv");
  itemContainer.appendChild(renderDiv);
}
