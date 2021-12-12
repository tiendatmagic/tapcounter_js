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
var canvolume = JSON.parse(localStorage.getItem("canvolume"));
if (canvolume == null || canvolume == "") {
  canvolume = true;
}

window.onload = function () {
  getClass("number")[0].innerText = count;
  setTimeout(function () {

    getQueryAll("body")[0].classList.add("show");

  }, 200);
}
getClass("love")[0].onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.tapcounter");

}

getClass("bar")[0].onclick = function () {
  getClass("list-group")[0].classList.toggle("show");
  if (canzero == false) {
    getClass("checkbox-input")[0].checked = false;
  } else {
    getClass("checkbox-input")[0].checked = true;
  }

  if (canvolume == false) {
    getClass("checkbox3")[0].checked = false;
  }
  else {
    getClass("checkbox3")[0].checked = true;
  }

}

getClass("contentapp")[0].onclick = function () {
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
  countup();

}


function countup() {
  if (lock == false) {
    count++;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));

  }
}

getId("li1").onclick = function () {
  countdown();
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
}
function countdown() {
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
}
getId("li2").onclick = function () {
  if (lock == false) {
    lock = true;
    getQueryAll("#li2 .unlock")[0].style.display = 'block';
    getQueryAll("#li2 .lock")[0].style.display = 'none';

    getId("li2").style.backgroundColor = 'green';
    getId("li2").style.boxShadow = '0 2px 2px 0 rgba(132, 255, 0, 0.34),0 3px 1px -2px rgba(132, 255, 0, 0.34), 0 1px 5px 0 rgba(132, 255, 0, 0.34)';
  }
  else {
    lock = false;

    getQueryAll("#li2 .lock")[0].style.display = 'block';
    getQueryAll("#li2 .unlock")[0].style.display = 'none';

    getId("li2").style.backgroundColor = '#f00';
    getId("li2").style.boxShadow = '0 2px 2px 0 rgba(255, 0, 0, 0.34),0 3px 1px -2px rgba(255, 0, 0, 0.34), 0 1px 5px 0 rgba(255, 0, 0, 0.34)';
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
getId("list1").onclick = function () {

  if (canzero == false) {
    canzero = true;
    getClass("checkbox-input")[0].checked = true;

  }
  else {
    canzero = false;
    getClass("checkbox-input")[0].checked = false;
  }

}
getId("list3").onclick = function () {

  if (canvolume == false) {
    canvolume = true;
    getClass("checkbox3")[0].checked = true;
    localStorage.setItem("canvolume", JSON.stringify(canvolume));
  }
  else {
    canvolume = false;
    getClass("checkbox3")[0].checked = false;
    localStorage.setItem("canvolume", JSON.stringify(canvolume));
  }

}
getId("list2").onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.tapcounter");
}

document.addEventListener("deviceready", function () {
  onDeviceReady();
});
function onDeviceReady() {
  document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
  document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
}

function onVolumeUpKeyDown() {
  countup();
}
function onVolumeDownKeyDown() {
  countdown();
}
