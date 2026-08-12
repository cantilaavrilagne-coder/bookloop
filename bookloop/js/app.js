
let cartCount=Number(localStorage.getItem("bookLoopCart")||0);
function sync(){document.querySelectorAll("[data-cart]").forEach(e=>e.textContent=cartCount)}
function addToCart(n){cartCount++;localStorage.setItem("bookLoopCart",cartCount);sync();alert(n+" added to your cart.")}
function filterProducts(q){document.querySelectorAll(".product").forEach(p=>p.style.display=p.innerText.toLowerCase().includes(q.toLowerCase())?"block":"none")}
function loginDemo(e){e.preventDefault();localStorage.setItem("bookLoopUser","1");alert("Demo login successful.");location.href="dashboard.html")}
function registerDemo(e){e.preventDefault();localStorage.setItem("bookLoopUser","1");alert("Account created successfully.");location.href="dashboard.html"}
function logout(){localStorage.removeItem("bookLoopUser");location.href="index.html"}
document.addEventListener("DOMContentLoaded",sync);
