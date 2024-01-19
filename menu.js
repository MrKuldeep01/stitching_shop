function menuitemfun() {
  let menuItemArray = [
    { itemName: " Luca Faloni Portofino Linen Shirt", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg" },
    { itemName: "Blugiallo Jeans Raw Denim 14oz Selvedge", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg" },
    { itemName: "Blugiallo Trouser Cotton & Linen Olive Green", itemimg: "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg" },
    { itemName: "Long sleeve shirts", itemimg: "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg" },
  ];
  menuItemArray.forEach((item,index,error) => {
    let menuitembox = document.querySelector(".menuitembox");
    let menuitems = document.createElement("div");
    menuitems.classList.add("menuitems");
    menuitems.innerHTML = `
<div class="productimg menuitemimg">
  <img src="${item.itemimg}" />
</div>
<h4 class="menuitemname productname">${item.itemName}</h4>
<div class="btns">
  <button class="menuitemdetails productdetails">Details</button>
  <button class="addbtn">Add</button>
</div>`;
    menuitembox.appendChild(menuitems);
  });

  function menuclick(){
    let item =document.querySelector('.menuitems')
    item.addEventListener('click',(e)=>{
      console.log(e,index,error);
    })
  }
  menuclick();
}
menuitemfun();
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
<div class="btns">
  <button class="productdetails">Details</button>
  <button class="addbtn">Add</button>
</div>`;
    productitembox.appendChild(productitems);
  });
}
productitemfun();