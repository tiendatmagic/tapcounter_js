console.log("%cTiendatmagic", "color: deeppink; font-size: x-large");

function getId(id) {
  return document.getElementById(id);
}

function getClass(clss) {
  return document.getElementsByClassName(clss);
}

function getQuery(query) {
  return document.querySelector(query);
}

function getQueryAll(query) {
  return document.querySelectorAll(query);
}

var count = JSON.parse(localStorage.getItem("count"));
if (count == null || count == "") {
  count = 0;
}
var lock = false;
var canzero = false;
window.onload = function () {
  getClass("number")[0].innerText = count;
}
getClass("love")[0].onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.tapcounter");

}
getClass("bar")[0].onclick = function () {
  getClass("list-group")[0].classList.toggle("show");
}

getClass("contentapp")[0].onclick = function () {
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
  if (lock == false) {

    count++;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));

  }

}
getId("li1").onclick = function () {
  if (lock == false) {

    if (canzero == false) {

      if (count > 0) {
        count--;
        getClass("number")[0].innerText = count;
        localStorage.setItem("count", JSON.stringify(count));
      }

    }
    else {
      count--;
      getClass("number")[0].innerText = count;
      localStorage.setItem("count", JSON.stringify(count));
    }

  }
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
}
getId("li2").onclick = function () {
  if (lock == false) {
    lock = true;
    getId("li2").innerText = "UNLOCK";
    getId("li2").style.backgroundColor = 'green';
  }
  else {
    lock = false;
    getId("li2").innerText = "LOCK";
    getId("li2").style.backgroundColor = '#f00';
  }
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
}
getId("li3").onclick = function () {
  if (lock == false) {
    count = 0;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
  }
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
}