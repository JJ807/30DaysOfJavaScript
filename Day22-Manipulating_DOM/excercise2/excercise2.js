function generatePlatform(countries) {

  let tab = document.querySelector(".tab");
  let tempTr = document.createElement("tr");

  for (let i = 0; i <countries.length; ++i) {
    let td = document.createElement("td");
    let element = document.createElement("p");
    element.className = "element";
    element.textContent = countries[i].name;
    td.appendChild(element); //adding <p> to <td>
    tempTr.appendChild(td); //adding <td> to <tr>
    tab.appendChild(tempTr); //adding <tr> to table
    if ((i + 1) % 6 == 0) {
      let tr = document.createElement("tr");
      tempTr = tr;
    }
  }
}

generatePlatform(countries_data);
