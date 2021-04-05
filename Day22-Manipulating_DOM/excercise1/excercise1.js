function isPrime(num) {
  if (num <= 3) return num > 1;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let count = 5;

  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;

    count += 6;
  }

  return true;
}

function generatePlatform(nrOfEl) {
  // let div = document.querySelector('container');
  let tab = document.querySelector(".tab");
  let tempTr = document.createElement("tr");
  for (let i = 0; i <= nrOfEl; ++i) {
    let td = document.createElement("td");
    let element = document.createElement("p");
    element.className = "element";
    // element.style.fontSize = "20px";
    // element.style.color = "white";
    if (i % 2 == 0) {
      element.style.background = "#44da3f";
    } else {
      element.style.background = "#cada3f";
    }
    if (isPrime(i)) {
      element.style.background = "#da3f3f";
    }
    element.textContent = i;
    td.appendChild(element); //adding <p> to <td>
    tempTr.appendChild(td); //adding <td> to <tr>
    tab.appendChild(tempTr); //adding <tr> to table
    if ((i + 1) % 6 == 0) {
      let tr = document.createElement("tr");
      tempTr = tr;
    }
  }
}

generatePlatform(101);
