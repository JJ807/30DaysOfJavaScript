//excercise lvl1
console.log(document.querySelector("p").textContent);

const list = document.querySelectorAll("p");
list.forEach((el) => {
  console.log(el.textContent);
});

//excercise lvl2
list[3].textContent = "Fourth Paragraph";
list.forEach((el) => el.setAttribute("class", "p-class"));
list[0].setAttribute('id', 'p1');
list[0].style.fontSize = '20px';
list[1].style.fontFamily = 'Roboto';
list[1].id = 'p2';
list[2].style.color = 'green';
list[2].style.fontWeight = 'bold';
list[3].style.background = 'red';

const changeColor = (list) => {
    for(let i=1; i<=list.length; ++i){
        if(i % 2 === 0){
            list[i-1].style.background = 'green';
        }
        else {
            list[i-1].style.background = 'red';
        }
    }
}

changeColor(list);


for(let i=0; i<list.length; ++i){
    list[i].id = `p${i+2}`;
    list[i].className = 'paragraph';
    list[i].textContent = i-2;
}

//excercise lvl3

