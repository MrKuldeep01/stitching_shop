let hamcontent = document.querySelector(".hamcontent");
let hambtn = document.querySelector(".ham");
let closehambtn = document.querySelector(".closehambtn");
window.onloadedmetadata((e)=>{
  let isLogIn = localStorage.getItem("isLogIn");
if(!isLogIn){
  localStorage.setItem("isLogIn",false);
}
else if(isLogIn==true){
  document.querySelectorAll("login").forEach((elm)=>{
    elm.style.display="none";
  })
}
})

function showhamcontent() {
  hambtn.style.display = "none";
  hamcontent.style.display = "flex";
}
function closeham() {
  hambtn.style.display = "inline";
  hamcontent.style.display = "none";
}
closehambtn.addEventListener("click", closeham);
function mainHeadFun() {
  let mainHeading = document.querySelector(".homehead");
  let mainHeadings = [
    "Sartorial Artistry, Your Signature Style",
    "Stitching Dreams, Crafting Wardrobe Wonders",
    "Threaded Elegance, Tailored Expressions Unveiled",
    "Fashion Tailored to Perfection",
    "Chic Threads, Timeless Elegance Unleashed",
    "Bespoke Creations, Your Style Sanctuary",
    "Sculpting Style, Stitch by Stitch",
    "Unique Threads, Your Fashion Story",
    "Crafting Fashion, Creating Memories",
    "Elevate Your Wardrobe, Elevate You",
    "Crafting Elegance, Tailoring Excellence",
    "Style Redefined, Threads of Precision",
    "Your Style, Our Expertise",
    "Timeless Fashion, Personalized Just For You",
    "Precision in Every Stitch",
    "Precision and Timeless Elegance",
  ];
  let selectHeading = Math.floor(Math.random() * mainHeadings.length);
  mainHeading.innerText = mainHeadings[selectHeading];
}
function mainDescFun() {
  let description = document.querySelector(".description");
  let descriptions = [
    "Experience the meticulous craftsmanship that sets our tailoring apart. Each garment is a testament to our commitment to the art of precision.",
    "Tailored just for you, our creations go beyond fashion. We weave your personality into every thread, ensuring a garment that resonates with your unique style.",
    "Indulge in the luxury of fine fabrics sourced from around the globe. Our commitment to quality ensures a tactile experience that speaks volumes in comfort and longevity.",
    "Step into a world where fashion transcends trends. Our timeless designs are crafted to endure, becoming cherished pieces in your wardrobe.",
    "Your style journey begins with us. We believe in collaboration, working closely with you to bring your sartorial dreams to life. Your satisfaction is our ultimate goal.",
    "Beyond beauty, we care for the world we live in. Our sustainable practices ensure that your fashion choices contribute to a better, more responsible future.",
    "Explore our collections and discover the art of tailoring that goes beyond the ordinary. Elevate your style with Naresh Tailor Shop's craft something extraordinary together.",
  ];
  let selectdescription = Math.floor(Math.random() * descriptions.length);
  description.innerText = descriptions[selectdescription];
}
function thoughtFun() {
  let thought = document.querySelector(".aboutdetails");
  let thoughts = [
    "We believe in the power of personalization. Your preferences guide our hands as we create a piece that's exclusively yours.",
    "Tailoring is not just about measurements; it's about capturing your essence in fabric. Each piece is tailored to reflect your unique style and personality.",
    "Our clothes are not just garments; they are handcrafted masterpieces, each thread carefully woven to perfection.",
    "Our commitment to quality starts with the materials we choose. Only the finest fabrics grace our atelier, ensuring both comfort and longevity.",
    "We don't follow fashion; we create it. Our designs are not bound by seasons but rather inspired by the everlasting beauty of classic style.",
    "Your vision, our expertise. We believe in a collaborative process, working closely with you to bring your sartorial dreams to life.",
    "Our clients are not just customers; they are collaborators. Your input shapes the final creation, making each piece a joint venture in style.",
    "Beyond looks, we care for the environment. Our eco-friendly practices make fashion that's responsible and remarkable.",
    "Looking good shouldn't come at the expense of the planet. We're committed to sustainable practices for a better tomorrow.",
    "We work closely with you to bring your style vision to life, making every piece a joint creation.",
    "Your input matters. Our collaborative process ensures your satisfaction and a garment you'll love.",
    "Our clothes are carefully crafted by skilled hands, ensuring attention to detail and a touch of artistry.",
    "Tailored just for you, our clothes reflect your unique style and personality.",
    "Your preferences guide our hands, creating a personalized garment that speaks volumes about you.",
    "We believe in using only the best materials for lasting comfort and style.",
    "Luxurious fabrics from around the world ensure a tactile experience of true quality.",
    "Our designs are timeless, enduring beyond trends to become wardrobe staples.",
    "Fashion that lasts, our pieces are created to stand the test of time with classic style.",
    "We put heart and skill into every stitch, making each piece a testament to our dedication to quality.",
  ];
  let selectthought = Math.floor(Math.random() * thoughts.length);
  thought.innerText = thoughts[selectthought];
  // console.log();
}

mainHeadFun();
mainDescFun();
thoughtFun();
// reviewsFun();
