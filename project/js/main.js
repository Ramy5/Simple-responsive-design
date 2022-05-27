// start button in navbar 
let btn = document.getElementById("bar")
let list = document.getElementsByClassName("listbar")[0]
btn.onclick = function () {
  if (list.style.getPropertyValue("display") == "" || list.style.getPropertyValue("display") == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
// end button in navbar 

// start button in about us 
let btnAbout = document.getElementById("btnAbout");
let special = document.getElementById("special")
btnAbout.onclick = function () {
  if (btnAbout.classList.contains("active")) {
    btnAbout.classList.remove("active")
    special.style.width = ""
  } else {
    btnAbout.classList.add("active");
    special.style.width = "100%"
  }

}
// end button in about us 
// start product information 
let listInfo = document.querySelectorAll(".list-info li");
let paraInfo = document.querySelectorAll(".product-info p")
listInfo.forEach((e) => {
  e.onclick = function (a) {
    for (let i = 0; i < listInfo.length; i++) {
      listInfo[i].classList.remove("active");
    }
    e.classList.add("active");
    if (a.target.innerHTML == "About") {
      for (let p = 0; p < paraInfo.length; p++) {
        paraInfo[p].style.display = "none";
      }
      paraInfo[0].style.display = "block"
    } else if (a.target.innerHTML == "History") {
      for (let p = 0; p < paraInfo.length; p++) {
        paraInfo[p].style.display = "none";
      }
      paraInfo[1].style.display = "block";
    } else if (a.target.innerHTML == "Specification") {
      for (let p = 0; p < paraInfo.length; p++) {
        paraInfo[p].style.display = "none";
      }
      paraInfo[2].style.display = "block";
    } else if (a.target.innerHTML == "Technical") {
      for (let p = 0; p < paraInfo.length; p++) {
        paraInfo[p].style.display = "none";
      }
      paraInfo[3].style.display = "block";
    } else if (a.target.innerHTML == "Review") {
      for (let p = 0; p < paraInfo.length; p++) {
        paraInfo[p].style.display = "none";
      }
      paraInfo[4].style.display = "block";
    }
  }
})
// end product information 
// start scroll to top 
let scroll = document.querySelector(".scroll")
window.onscroll = function () {
  if (scrollY > 600) {
    scroll.style.display = "flex";
  } else {
    scroll.style.display = "none";
  }
}
scroll.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
}
// end scroll to top 