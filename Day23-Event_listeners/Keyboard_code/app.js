document.body.addEventListener('keypress', e => {
    let div = document.querySelector(".container");
    div.innerHTML = '';
    let youPressed = document.createElement('p');
    youPressed.style.width = '200px';
    youPressed.style.height = '20px';
    youPressed.style.color = 'darkgreen';
    youPressed.style.border = '1px solid black';
    youPressed.style.verticalAlign = 'middle';
    youPressed.textContent = 'You pressed: ' + e.key;

    let value = document.createElement('p');
    value.textContent = e.keyCode;
    value.style.width = '100px';
    value.style.height = '20px';
    value.style.background = 'darkgreen';
    value.style.color = 'white';
    div.appendChild(youPressed);
    div.appendChild(value);
  })