let header1 = document.querySelector("h1");
header1.innerHTML = header1.innerHTML.replace(
  "2020",
  `<span class='span2020'>2020</span>`
);

// a function which generate random hexa colors
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// a function which shows date and time
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};

const addH3 = () => {
  let div = document.querySelector(".wrapper .time"); //we use "." for classes, "#" for ids, "" AKA nothing for tags
  let h3 = document.createElement("p");
  h3.style.fontSize = "20px";
  h3.textContent = `${showDateTime()}`;
  div.appendChild(h3);
};

const changeColor = (whichEl) => {
  let year = document.querySelector(whichEl);
  year.style.color = hexaColor();
};

const changeBGColor = (whichEl) => {
  let year = document.querySelector(whichEl);
  year.style.background = hexaColor();
};

//adding h3 element
addH3();

setInterval(function () {
  changeColor("span");
}, 1000);
setInterval(function () {
  changeBGColor("p");
}, 2000);

function changeTabColors() {
  let tab = document.querySelector("tab");
  let td = document.querySelectorAll("td");
  for (let el of td) {
    console.log(el.textContent);
    if (el.textContent.includes("Done")) {
      el.style.background = "#3fdd5a";
    } else if (el.textContent.includes("Ongoing")) {
      el.style.background = "#ddd33f";
    } else {
      el.style.background = "#dd443f";
    }
  }
}

changeTabColors();

function addDetails() {
  let td = document.querySelectorAll("td");
  
  let tabOfSummaries = [
    "Python",
    "JavaScript",
    "React",
    "FullStack",
    "Data Analysis",
    "React Native",
    "Machine Learning",
  ];
  for(let i=0; i<tabOfSummaries.length; ++i){
    let detail = document.createElement("details");
    detail.style.display = 'inline';
    detail.style.paddingLeft = '20px';
    detail.style.color = 'black';
    let summary = document.createElement('summary');
    summary.textContent = tabOfSummaries[i];
    let list = document.createElement('ol');
    for(let j=0; j<5; ++j){
      let li = document.createElement('li');
      li.textContent = 'STH STH';
      list.appendChild(li);
    }
    detail.appendChild(summary);
    detail.appendChild(list);
    td[i].style.verticalAlign = 'middle';
    td[i].appendChild(detail);
  }
}

addDetails();