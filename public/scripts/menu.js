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
<div class="btnsMenu">
  <button class="menuitemdetails productdetails">Details</button>
  <button class="addbtn">Add</button>
</div>`;
    menuitembox.prepend(menuitems);
  });

  function menuclick(){
    let item = document.querySelectorAll('.menuitems')
    item.forEach((elem,index)=>{
      elem.addEventListener("click",(evt)=>{
        console.log(evt.target);
        let clicked = evt.target;
    });
      })
    }
   
  
  menuclick();
}
menuitemfun();



