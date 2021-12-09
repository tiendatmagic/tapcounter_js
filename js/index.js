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

window.onload = function () {
  getClass("number")[0].innerText = count;
}

getClass("contentapp")[0].onclick = function () {
  if (lock == false) {

    count++;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
  }

}
getId("li1").onclick = function () {
  if (lock == false) {
    count--;

    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
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
    getId("li2").style.backgroundColor = '#f09';
  }
}
getId("li3").onclick = function () {
  if (lock == false) {
    count = 0;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
  }
}