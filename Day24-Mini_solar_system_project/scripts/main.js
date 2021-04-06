let sel = document.querySelector("select");

// loading starting text
//getting value of a mass and calculating it
document.querySelector("#btn").addEventListener("click", function () {
  let inp = document.querySelector("#mass");
  let cont = document.querySelector(".flex-item");
  if (inp.value === "") {
    cont.innerHTML = "";
    cont.style.fontSize = "25px";
    cont.textContent = "Giving a mass is mandatory!";
  } else if (sel.value === "none") {
    cont.innerHTML = "";
    cont.style.fontSize = "25px";
    cont.textContent = "You have to choose a planet!";
  } else {
    let descr = document.querySelector(".flex-item-descr");
    //   let p = document.createElement('p');
    //   p.className = 'flex-item-descr';
    descr.textContent = "Calculated mass for " + sel.value + "= ...";
    descr.style.fontSize = "25px";
    descr.style.display = 'flex';
  }
});

// displaying image of a planet

sel.addEventListener("change", (e) => {
  let cont = document.querySelector(".flex-item");
  cont.innerHTML = "";
  if (e.target.value !== "none") {
    let img = document.createElement("img");
    img.src = "./images/" + e.target.value + ".png";
    cont.appendChild(img);
  } else {
    let img = document.createElement("img");
    img.src = "./images/earth.png";
    cont.appendChild(img);
  }
});


