let hamcontent = document.querySelector(".hamcontent");
let hambtn = document.querySelector(".ham");
let closehambtn = document.querySelector(".closehambtn");

function showhamcontent() {
  hambtn.style.display = "none";
  hamcontent.style.display = "flex";
}
closehambtn.addEventListener("click", closeham);
function closeham() {
  hambtn.style.display = "inline";
  hamcontent.style.display = "none";
}
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
    (message =
      "Explore our collections and discover the art of tailoring that goes beyond the ordinary. Elevate your style with Naresh Tailor Shop's craft something extraordinary together."),
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
function reviewsFun() {
  let reviewerNames = [
    { reviewerName: "Kuldeep" },
    { reviewerName: "Aarav" },
    { reviewerName: "Arjun" },
    { reviewerName: "Vihaan" },
    { reviewerName: "Aryan" },
    { reviewerName: "Advait" },
    { reviewerName: "Shaan" },
    { reviewerName: "Vivaan" },
    { reviewerName: "Kabir" },
    { reviewerName: "Reyansh" },
    { reviewerName: "Vir" },
    { reviewerName: "Aarush" },
    { reviewerName: "Ved" },
    { reviewerName: "Viha" },
    { reviewerName: "Yash" },
    { reviewerName: "Ishaan" },
    { reviewerName: "Rehan" },
    { reviewerName: "Hrithik" },
    { reviewerName: "Pranav" },
    { reviewerName: "Vihan" },
    { reviewerName: "Tanay" },
    { reviewerName: "Advik" },
    { reviewerName: "Ahaan" },
    { reviewerName: "Arnav" },
    { reviewerName: "Abeer" },
    { reviewerName: "Viraj" },
  ];
  let reviewcontents = [
    "Absolutely thrilled with the bespoke suit I received from Naresh Tailor Shop craftsmanship is unparalleled, and the fit is impeccable. They truly understand how to bring out the best in every stitch.",
    "I've never had a better-fitting pair of trousers! Naresh Tailor Shop combines classic style with a modern touch. The result? Clothes that not only look great but feel fantastic too. Highly recommend!",
    "As someone who values sustainability, I appreciate that Naresh Tailor Shop is committed to eco-friendly practices. The fabrics used are not only luxurious but also ethically sourced. Fashion with a conscience!",
    "The team at Naresh Tailor Shop made the entire process of tailoring my suit seamless. They listened to my preferences, offered valuable suggestions, and the end result exceeded my expectations. Will be back for more!",
    "Kudos to Naresh Tailor Shop for creating pieces that stand the test of time. I've been wearing their shirts for years, and they still look as good as the day I bought them. Quality that lasts!",
    "If you're looking for a tailor who truly understands your style, look no further. Naresh Tailor Shop goes above and beyond to capture your personality in every garment. A delightful experience from start to finish.",
    "Naresh Tailor Shop is my go-to for custom-made traditional wear. Their ability to blend classic designs with a modern twist is exceptional. I always receive compliments whenever I wear their creations.",
    "From the moment I walked in, I felt like a valued customer. The team at Naresh Tailor Shop is not just skilled but also incredibly friendly. They make the entire process enjoyable, and the results speak for themselves.",
    "I've never been disappointed with the outfits I've purchased from Naresh Tailor Shop tailoring is precise, and the fabrics are of the highest quality. It's a one-stop-shop for anyone who appreciates fine craftsmanship.",
    "Couldn't be happier with the suit I got from Naresh Tailor Shop. The fit is spot-on, and the attention to detail is impressive. It's evident that they take pride in their craft.",
    "The team at Naresh Tailor Shop turned my vision into reality. They were patient, understanding, and the result was a suit that not only looked sharp but felt uniquely mine. Highly recommended!",
    "I've been a customer for years, and Naresh Tailor Shop consistently delivers exceptional quality. Their commitment to using premium fabrics and maintaining a high standard of craftsmanship is truly commendable.",
    "From casual wear to formal attire, Naresh Tailor Shop is my trusted choice. The versatility in their designs and the comfort of their clothes make them stand out. I appreciate the effort they put into every piece.",
    "Found my perfect fit at Naresh Tailor Shop. The team understands body types and preferences, making the entire process smooth. The suit I got was not just clothing; it was a confidence booster.",
    "Impressed with the quick turnaround time at Naresh Tailor Shop. Despite the speed, there was no compromise on quality. I got a well-fitted suit that exceeded my expectations. Will definitely be a returning customer!",
    "The elegance in simplicity – that's what I love about Naresh Tailor Shop. Their designs are timeless, and the simplicity in their approach makes them a standout choice for those who appreciate classic style.",
    "Naresh Tailor Shop is my secret to always looking sharp. The details in their clothing make all the difference. The compliments I receive when wearing their outfits are a testament to their skill and style.",
    "As a frequent traveler, I appreciate the durability of the clothes from Naresh Tailor Shop. Even after multiple trips, the fabrics hold up exceptionally well, proving that quality and style can coexist.",
    "The team at Naresh Tailor Shop understands that a well-fitted suit is a statement. They listen, advise, and deliver a final product that speaks volumes. Proud to have them as my go-to tailor.",
    "Walking into Naresh Tailor Shop is like stepping into a style haven. The ambiance, the personalized service, and the end result – an outfit that not only fits perfectly but elevates my confidence. Pure brilliance!",
    "What sets Naresh Tailor Shop apart is their ability to blend tradition with contemporary style seamlessly. I got a kurta that perfectly captures this fusion, and I couldn't be happier with the result.",
    "In a world of fast fashion, Naresh Tailor Shop stands as a beacon of quality. The shirt I purchased is a testament to their commitment to creating garments that last and look good doing it.",
    "At Naresh Tailor Shop, it's not just about buying clothes; it's about investing in your wardrobe. The suit I got is a timeless piece, and I can see it being a staple for years to come.",
    "Every interaction with Naresh Tailor Shop feels like consulting with fashion experts. Their insights and suggestions are invaluable. I appreciate the effort they put into understanding my style preferences.",
  ];
  let reviewerimgs = [
    (path = "img/reviewer/a(1)"),
    (path = "img/reviewer/a(2)"),
    (path = "img/reviewer/a(3)"),
    (path = "img/reviewer/a(4)"),
    (path = "img/reviewer/a(5)"),
    (path = "img/reviewer/a(6)"),
    (path = "img/reviewer/a(7)"),
    (path = "img/reviewer/a(8)"),
    (path = "img/reviewer/a(9)"),
    (path = "img/reviewer/a(10)"),
    (path = "img/reviewer/a(11)"),
    (path = "img/reviewer/a(12)"),
    (path = "img/reviewer/a(13)"),
    (path = "img/reviewer/a(14)"),
    (path = "img/reviewer/a(15)"),
    (path = "img/reviewer/a(16)"),
    (path = "img/reviewer/a(17)"),
    (path = "img/reviewer/a(18)"),
    (path = "img/reviewer/a(19)"),
    (path = "img/reviewer/a(20)"),
    (path = "img/reviewer/a(21)"),
  ];

  let i = 0;
  for (names of reviewerNames) {
    // reviewerNames
    names.imagesrc = reviewerimgs[i];
    names.message = reviewcontents[i];
    // console.log(names.imagesrc);
    i++;
  }
  console.log(reviewerNames);

  for (i of reviewerNames) {
    // console.log(i.imagesrc);
    if (
      i.imagesrc === undefined ||
      i.message === undefined ||
      i.reviewerName === undefined
    ) {
      i.imagesrc = `reviewer/defaultimg.png`;

      i.message = `There are no words to convey my thoughts about the quality of work & gradients that are used . `;
      i.reviewerName = "Unknown";
    } else {
      i.imagesrc = i.imagesrc;
      i.message = i.message;
      i.reviewerName = i.reviewerName;
    }
  }
  let selector = Math.floor(Math.random() * reviewerNames.length);

  let reviewerimage = document.querySelector("#reviewerimg");
  let reviewdetails = document.querySelector(".reviewdetails");
  let reviewername = document.querySelector(".customername");
  reviewerimage.src='img/reviewer/defaultimg.png'; 
                                // TODO: set this image path to reviewerimage element-------------

  reviewername.innerText = reviewerNames[selector].reviewerName;
  reviewdetails.innerText = reviewerNames[selector].message;
  
}
mainHeadFun();
mainDescFun();
thoughtFun();
reviewsFun();
