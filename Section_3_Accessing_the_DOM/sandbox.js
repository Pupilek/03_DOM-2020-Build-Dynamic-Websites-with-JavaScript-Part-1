const color = 'rgb(132,173,254';
// <!-- Method 1 --> get element by Id

let header = document.getElementById('header');
//console.log(header);
header.style.backgroundColor = color;

// <!-- Method 2 --> Get elements by class name

let classElements = document.getElementsByClassName('header');
//console.log(classElements);

// HTML collection has no forEach method, we can use For

for(let i = 0; i < classElements.length; i++){
  classElements[i].style.backgroundColor = color;
}

// <!-- Method 3 --> Get elements by tag name

let tagElements = document.getElementsByTagName('p');
// HTML collection has no forEach method, we can use For

for(let i = 0; i < tagElements.length; i++){
  tagElements[i].style.backgroundColor = color;
}


// <!-- Method 4.1 --> Get elements by querySelector()
let queryElement = document.querySelector('div#query');
//console.log(queryElement);
queryElement.style.backgroundColor = color;

// <!-- Method 4.2 --> Get elements by querySelectorAll;
document.querySelectorAll('.query-all')
.forEach((i) => {
i.style.backgroundColor = color;
})

//queryElement.style.backgroundColor = color;