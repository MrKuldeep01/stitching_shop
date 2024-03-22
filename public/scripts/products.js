let productItemArray = [
  {
    itemName: "Blugiallo Trouser Cotton",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: " Luca Faloni Portofino ",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: "Blugiallo Jeans  Selvedge",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: "Blugiallo Trouser Cotton",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: "Long sleeve best shirts",
    itemimg:
      "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: " Luca Faloni Portofino ",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: "Blugiallo Jeans  Selvedge",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg",
    price: 1000,
    category: "male",
  },
  {
    itemName: "Long sleeve best shirts",
    itemimg:
      "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg",
    price: 1000,
    category: "male",
  },
];
let savedProducts = [];

let productitembox = document.querySelector(".productitembox");
function setProductItem() {
  productItemArray.forEach((item, index) => {
    let productitems = `
      <div class="productitems"  data-index="${index}">
  <div class="productimg" data-index="${index}">
    <img src="${item.itemimg}"  data-index="${index}"/>
  </div>
  <h4 data-index="${index}" class="productname">${item.itemName}</h4>
  <div data-index="${index}" class="btnsMenu">
    <button data-index="${index}" class="productdetails">Details</button>
    <button data-index="${index}" class="savebtn">Save item</button>
  </div>
  </div>`;
    productitembox.innerHTML += productitems;
  });
}

function showDetails(obj) {
  let cardbox = document.querySelector(".cardContainer");
  console.log(obj, cardbox);
  console.log("clickeed");
  let card = `
    <div id="card">
    <img src="${obj.itemimg}">
    <h1> Category :  ${obj.category}</h1>
    <p>Item Name : ${obj.itemName}</p>
    <h5>Price : ${obj.price}<i class="ri-money-rupee-circle-line"></i></h5>
    <button id="contect"><a href="https://wa.me/9728541543" target="_blank">Contect now &nbsp<i style="color:white;" class="ri-whatsapp-line"></i></a></button>
    <a href="#productSec" class='backbtn'> Back &nbsp; <i class="ri-home-smile-fill"></i></a>
    </div>
    `;
  cardbox.innerHTML = card;
  cardbox.style.left = "0%";
  cardbox.style.zIndex = 99;
  let backbtn = cardbox.querySelector(".backbtn");
  backbtn.addEventListener("click", () => {
    cardbox.innerHTML = null;
    cardbox.style.left = "-100%";
    // cardbox.style.zIndex =-99 ;
  });
}

function handelSaveEvent(evt) {
  let dataIndex = evt.target.getAttribute("data-index");
  if (evt.target.classList.contains("savebtn")) {
    savedItems.push(productItemArray[dataIndex]);
    console.log(savedItems);
  } else {
    showDetails(productItemArray[dataIndex]);
  }
}
productitembox.addEventListener("click", handelSaveEvent);
setProductItem();
