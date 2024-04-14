let menuItemArray = [
  {
    itemName: "Luca Faloni Portofino Linen Shirt",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear3.jpg",
      price:1000,
      category: "Male"
  },
  {
    itemName: "Blugiallo Jeans Raw Denim 14oz Selvedge",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear10.jpg",
      price:1000,
      category: "Male"
  },
  {
    itemName: "Blugiallo Trouser Cotton & Linen Olive Green",
    itemimg:
      "https://www.apetogentleman.com/wp-content/uploads/2023/06/ArtisanalMenswear12.jpg",
      price:1000,
      category: "Male"
  },
  {
    itemName: "Long sleeve shirts",
    itemimg:
      "https://www.othingstodo.com/wp-content/uploads/2022/07/Long-sleeve-shirts-traditonal-dress-of-haryana.jpg",
      price:1000,
      category: "Male"
  },
];

let menuitembox = document.querySelector(".menuitembox");

function setMenuItems() {
  menuItemArray.forEach((item, index) => {
    let menuitems = ` <div class="menuitems">
      <div data-index="${index}" class="productimg menuitemimg">
        <img src="${item.itemimg}" data-index="${index}" />
      </div>
      <h4 data-index="${index}" class="menuitemname productname">${item.itemName}</h4>
      <div class="btnsMenus">
        <button data-index="${index}" class="menuitemdetails productdetails">Details</button>
        <!--<button data-index="${index}" class="savebtn">Save item</button> -->
      </div>
    </div>`;
    menuitembox.innerHTML += menuitems;
  });
}

setMenuItems();

let savedItems = [];
function showDetails(obj){
  let cardbox = document.querySelector('.cardContainer');
  console.log(obj,cardbox)
  console.log("clickeed");
  let card = `
  <div id="card">
  <img src="${obj.itemimg}">
  <h1> Category :  ${obj.category}</h1>
  <p>Item Name : ${obj.itemName}</p>
  <h5>Price : ${obj.price}<i class="ri-money-rupee-circle-line"></i></h5>
  <button id="contect"><a href="https://wa.me/9728541543" target="_blank">Contect now &nbsp<i style="color:white;" class="ri-whatsapp-line"></i></a></button>
  <a href="../../index.html#menuSec" class='backbtn'> Back &nbsp; <i class="ri-home-smile-fill"></i></a>
  </div>
  `;
  cardbox.innerHTML = card;
  cardbox.style.left = "0%";
  cardbox.style.zIndex =99 ;
  let backbtn = cardbox.querySelector(".backbtn");
  backbtn.addEventListener("click",()=>{
    cardbox.innerHTML = null;
  cardbox.style.left = "-100%";
  // cardbox.style.zIndex =-99 ;
  })
}


function saveItemFun(evt) {
  let dataIndex = evt.target.getAttribute("data-index");
  if (evt.target.classList.contains("savebtn")) {
    savedItems.push(menuItemArray[dataIndex]);
  }
  else {
    showDetails(menuItemArray[dataIndex])
  }
}

menuitembox.addEventListener("click", saveItemFun);
