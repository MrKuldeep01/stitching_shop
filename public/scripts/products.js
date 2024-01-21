function productitemfun() {
    let productItemArray = [
      { itemName: "Blugiallo Trouser Cotton", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg" },
      { itemName: " Luca Faloni Portofino ", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg" },
      { itemName: "Blugiallo Jeans  Selvedge", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg" },
      { itemName: "Blugiallo Trouser Cotton", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg" },
      { itemName: "Long sleeve best shirts", itemimg: "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg" },
      { itemName: " Luca Faloni Portofino ", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg" },
      { itemName: "Blugiallo Jeans  Selvedge", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg" },
      { itemName: "Long sleeve best shirts", itemimg: "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg" },
    ];
    productItemArray.forEach((item) => {
      let productitembox = document.querySelector(".productitembox");
      let productitems = document.createElement("div");
      productitems.classList.add("productitems");
      productitems.innerHTML = `
  <div class="productimg">
    <img src="${item.itemimg}" />
  </div>
  <h4 class="productname">${item.itemName}</h4>
  <div class="btnsMenu">
    <button class="productdetails">Details</button>
    <button class="addbtn">Add</button>
  </div>`;
      productitembox.appendChild(productitems);
    });
  }
  productitemfun();