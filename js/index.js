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
var openmenu = false;
var canzero = false;
var canvolume = JSON.parse(localStorage.getItem("canvolume"));
if (canvolume == null || canvolume == "") {
  canvolume = true;
  localStorage.setItem("canvolume", JSON.stringify(canvolume));
}
var cansound = JSON.parse(localStorage.getItem("cansound"));
if (cansound == null || cansound == "") {
  cansound = true;
  localStorage.setItem("cansound", JSON.stringify(cansound));
}
var candarkmode = JSON.parse(localStorage.getItem("candarkmode"));
if (candarkmode == null || candarkmode == "") {
  candarkmode = false;
  localStorage.setItem("candarkmode", JSON.stringify(candarkmode));
}
var admobid = {
  interstitial: "ca-app-pub-9736910515799107/7731653691",
};
document.addEventListener("deviceready", function () {
  onDeviceReady();
});

function onDeviceReady() {
  document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
  document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
}
window.onload = function () {
  canvolume = JSON.parse(localStorage.getItem("canvolume"));
  cansound = JSON.parse(localStorage.getItem("cansound"));
  candarkmode = JSON.parse(localStorage.getItem("candarkmode"));
  getClass("number")[0].innerText = count;
  getId("li2").style.backgroundColor = 'rgb(255, 0, 0)';
  if (candarkmode == false) {
    getClass("contentapp")[0].classList.remove("dark");
    getClass("list-group")[0].classList.remove("dark");
  } else {
    getClass("contentapp")[0].classList.add("dark");
    getClass("list-group")[0].classList.add("dark");
  }
  if (count >= 9999999999 && window.innerWidth <= 600) {
    getClass("number")[0].style.fontSize = '50px';
  }
  else {
    getClass("number")[0].style.fontSize = '90px';
  }
  setTimeout(function () {
    getQueryAll("body")[0].classList.add("show");
  }, 100);
}
getClass("love")[0].onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.tapcounter");
}
getClass("bar")[0].onclick = function () {
  openmenu = true;
  if (openmenu) {
    getClass("list-group")[0].classList.toggle("show");
  } else {
    getClass("list-group")[0].classList.remove("show");
  }
  if (canzero == false) {
    getClass("checkbox1")[0].checked = false;
  } else {
    getClass("checkbox1")[0].checked = true;
  }
  if (canvolume == false) {
    getClass("checkbox3")[0].checked = false;
  } else {
    getClass("checkbox3")[0].checked = true;
  }
  if (cansound == false) {
    getClass("checkbox4")[0].checked = false;
  } else {
    getClass("checkbox4")[0].checked = true;
  }
  if (candarkmode == false) {
    getClass("checkbox5")[0].checked = false;
  } else {
    getClass("checkbox5")[0].checked = true;
  }
}
getClass("contentapp")[0].onclick = function () {
  if (!openmenu) {
    countup();
  }
  openmenu = false;
  checkOpenMenu();
}

function countup() {
  if (lock == false && openmenu == false) {
    count++;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
    if (cansound == true) {
      var soundp = new Audio('./audio/drop.ogg');
      soundp.play();
    }
  }
}
getId("li1").onclick = function () {
  if (!openmenu) {
    countdown();
  }
  openmenu = false;
  checkOpenMenu();
}

function countdown() {

  if (lock == false && openmenu == false) {
    if (cansound == true) {
      var soundp = new Audio('./audio/drop.ogg');
      soundp.play();
    }
    if (canzero == false) {
      if (count > 0) {
        count--;
        getClass("number")[0].innerText = count;
        localStorage.setItem("count", JSON.stringify(count));
      }
    } else {
      count--;
      getClass("number")[0].innerText = count;
      localStorage.setItem("count", JSON.stringify(count));
    }
  }
}
getId("li2").onclick = function () {
  if (!openmenu) {
    checkLock();
    if (getClass("list-group")[0].classList.value == "list-group show") {
      getClass("list-group")[0].classList.remove("show");
    }
  }
  openmenu = false;
  checkOpenMenu();
}
getId("li3").onclick = function () {
  if (!openmenu) {
    count = 0;
    getClass("number")[0].innerText = count;
    localStorage.setItem("count", JSON.stringify(count));
  }
  openmenu = false;
  checkOpenMenu();
  if (getClass("list-group")[0].classList.value == "list-group show") {
    getClass("list-group")[0].classList.remove("show");
  }
}
getId("list1").onclick = function () {
  if (canzero == false) {
    canzero = true;
    getClass("checkbox1")[0].checked = true;
  } else {
    canzero = false;
    getClass("checkbox1")[0].checked = false;
  }
}
getId("list3").onclick = function () {
  if (canvolume == false) {
    canvolume = true;
    getClass("checkbox3")[0].checked = true;
    localStorage.setItem("canvolume", JSON.stringify(canvolume));
  } else {
    canvolume = false;
    getClass("checkbox3")[0].checked = false;
    localStorage.setItem("canvolume", JSON.stringify(canvolume));
  }
}
getId("list4").onclick = function () {
  if (cansound == false) {
    cansound = true;
    getClass("checkbox4")[0].checked = true;
    localStorage.setItem("cansound", JSON.stringify(cansound));
  } else {
    cansound = false;
    getClass("checkbox4")[0].checked = false;
    localStorage.setItem("cansound", JSON.stringify(cansound));
  }
}
getId("list5").onclick = function () {
  if (candarkmode == false) {
    candarkmode = true;
    getClass("checkbox5")[0].checked = true;
    localStorage.setItem("candarkmode", JSON.stringify(candarkmode));
    getClass("contentapp")[0].classList.add("dark");
    getClass("list-group")[0].classList.add("dark");
  } else {
    candarkmode = false;
    getClass("checkbox5")[0].checked = false;
    localStorage.setItem("candarkmode", JSON.stringify(candarkmode));
    getClass("contentapp")[0].classList.remove("dark");
    getClass("list-group")[0].classList.remove("dark");
  }
}
getId("list2").onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.tapcounter");
}
getId("list6").onclick = function () {
  cordova.plugins.codeplay_shareapk.openShare("Tap Counter");
}
getId("list8").onclick = function () {
  cordova.InAppBrowser.open("mailto: tiendatmagic8@gmail.com", "_system");
}
getId("list7").onclick = function () {
  openmenu = true;
  checkOpenMenu();
  openmenu = true;
  getClass("contentapp")[0].innerHTML += `
  <div class="box-start show">
    <p>Change number</p>
    <div class="">
    <label class="label">Enter your number</label>
      <input autofocus="" type="number" name="" id="inputnum" class="inputnumber" placeholder="Number">
    </div>
    <div class="box-btn-group">
      <button id="closebox" class="btn waves-effect">Close</button>
      <button id="playbox" class="btn waves-effect">Save</button>
    </div>
  </div>
  `;
  getClass("box-start")[0].onclick = function () {
    openmenu = true;
  }
  getId("blur").classList.add("show");
  getId("playbox").onclick = function () {
    count = Number(getId("inputnum").value);
    if (count <= 999999999999999) {
      getClass("number")[0].innerText = count;
      localStorage.setItem("count", JSON.stringify(count));
      lock = false;
      getClass("box-start")[0].remove();
      getId("blur").classList.remove("show");
      if (count >= 9999999999 && window.innerWidth <= 600) {
        getClass("number")[0].style.fontSize = '50px';
      }
      else {
        getClass("number")[0].style.fontSize = '90px';
      }
      if (getId("li2").style.backgroundColor == 'green') {
        lock = true;
      }
    }
    watchAdMob();
  }
  getId("closebox").onclick = function () {
    lock = false;
    getClass("box-start")[0].remove();
    getId("blur").classList.remove("show");
    if (getId("li2").style.backgroundColor == 'green') {
      lock = true;
    }
  }

}
getId("blur").onclick = function () {
  lock = false;
  getClass("box-start")[0].remove();
  this.classList.remove("show");
  openmenu = false;
  if (getId("li2").style.backgroundColor == 'green') {
    lock = true;
  }
}
function onVolumeUpKeyDown() {
  if (canvolume == true) {
    countup();
  }
}

function onVolumeDownKeyDown() {
  if (canvolume == true) {
    countdown();
  }
}

function checkOpenMenu() {
  if (openmenu) {
    getClass("list-group")[0].classList.toggle("show");
  } else {
    getClass("list-group")[0].classList.remove("show");
  }
}
function checkLock() {
  if (lock == false) {
    lock = true;
    getQueryAll("#li2 .unlock")[0].style.display = 'block';
    getQueryAll("#li2 .lock")[0].style.display = 'none';
    getId("li2").style.backgroundColor = 'green';
    getId("li2").style.boxShadow = '0 2px 2px 0 rgba(132, 255, 0, 0.34),0 3px 1px -2px rgba(132, 255, 0, 0.34), 0 1px 5px 0 rgba(132, 255, 0, 0.34)';
  } else {
    lock = false;
    getQueryAll("#li2 .lock")[0].style.display = 'block';
    getQueryAll("#li2 .unlock")[0].style.display = 'none';
    getId("li2").style.backgroundColor = '#f00';
    getId("li2").style.boxShadow = '0 2px 2px 0 rgba(255, 0, 0, 0.34),0 3px 1px -2px rgba(255, 0, 0, 0.34), 0 1px 5px 0 rgba(255, 0, 0, 0.34)';
  }
}

function watchAdMob() {
  admob.interstitial.config({
    id: admobid.interstitial
  })

  admob.interstitial.prepare()
  admob.interstitial.show()
}