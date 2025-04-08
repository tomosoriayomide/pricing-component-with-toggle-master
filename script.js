let monthly = document.getElementById("cont1");
let monthlya = document.getElementById("cont1a");
let monthlyb = document.getElementById("cont1b");
let annually = document.getElementById("cont2");
let annuallya = document.getElementById("cont2a");
let annuallyb = document.getElementById("cont2b");
let togglem = document.getElementById("bar");
let togglea = document.getElementById("bar2");

function toggleBar() {
  monthly.style.display = "none";
  monthlya.style.display = "none";
  monthlyb.style.display = "none";
  annually.style.display = "block";
  annuallya.style.display = "block";
  annuallyb.style.display = "block";
//   console.log("changed");
  togglem.style.display = "none";
  togglea.style.display = "block";
  //   toggle.style.position = "absolute";
  //   toggle.style.left = "5px";

  //   toggle.style.display = "none";
}
function original() {
  monthly.style.display = "block";
  monthlya.style.display = "block";
  monthlyb.style.display = "block";
  annually.style.display = "none";
  annuallya.style.display = "none";
  annuallyb.style.display = "none";
//   console.log("original");
  togglea.style.display = "none";
  //   togglea.style.float='r'
  togglem.style.display = "block";
  //   togglea.style.position = "absolute";
  //   togglea.style.right = "5px";

  //   toggle.style.display = "none";
}
