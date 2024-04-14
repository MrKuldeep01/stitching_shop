let registerCard = document.querySelector(".registercard");
let loginCard = document.querySelector(".logincard");
let registeredUser = [];
function registerFun() {
    console.log("haha");
  loginCard.style.display = "none";
  registerCard.style.display = "block";
}
let registerbtn = document.querySelector("#registerbtn");
registerbtn.addEventListener("click", registerFun);

let registerForm = document.querySelector("#registerform");
registerForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  // Alternatively, access specific fields by their names
  const name = formData.get("name");
  const phone = formData.get("phone");
  const pass = formData.get("password");
  console.log(`phon: ${phone}, pass: ${pass}`);
  let userdata = { phone: phone, name: name, pass: pass };
  registeredUser.push(userdata);
  localStorage.setItem("user",{name:name,phone:phone,pass:pass})
  await localStorage.setItem(phone, pass);
  let registerCard = document.querySelector(".registercard");
  let loginCard = document.querySelector(".logincard");
  loginCard.style.display = "block";
  registerCard.style.display = "none";
});

let loginForm = document.querySelector("#loginform");
loginForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  // Alternatively, access specific fields by their names
  const phone = formData.get("phone");
  const pass = formData.get("password");
  console.log(`Name: ${phone}, Email: ${pass}`);
  if (!phone && !pass) {
    alert("enter required data");
  } else {
    let userpass = localStorage.getItem(phone);
    console.log(phone);
    console.log(userpass);
    if (userpass == pass) {
      window.location.href = "https://stitchingshop.netlify.app";
      localStorage.setItem("isLogIn", "true");
    }
    else{
        alert("wrong Password or Phone")
    }
  }
});
