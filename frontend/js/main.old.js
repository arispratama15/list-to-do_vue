const unorderList = document.querySelector('ul');
let items = '';

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('http://localhost:3000/lists')
  .then(response => response.json())
  .then(data => generateList(data))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateList(data) {
  let lists = data.lists;
  for (let i = 0; i < lists.length; i++) {
    let listToDo = lists[i];
    // console.log(listToDo.lists)
    items += 
      `
      <div id="${listToDo.id}">
        <li class="list-group-item list-group-item-secondary">${listToDo.lists}<span class="close" onclick="delItem(${listToDo.id})">×</span>
        </li>
      </div>
      `;
  }
  // console.log(lists);
  // console.log(lists[0].lists);
  // console.log(items);
  unorderList.innerHTML = items;

}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newItem() {
  let inputValue = document.getElementById("myInput").value;
  let someData = {
    lists: `${inputValue}`
  }
  const postMethod = {
    method: 'POST', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    body: JSON.stringify(someData) // We send data in JSON format
  }

  // make the HTTP put request using fetch api
  fetch(`http://localhost:3000/lists`, postMethod)
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error 
    .then(reloadPage())
}

function reloadPage(){
  reload = location.reload();
}

function delItem(i) {
  const deleteMethod = {
    method: 'DELETE', // Method itself
    headers: {
     'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    // No need to have body, because we don't send nothing to the server.
   } 
   fetch(`http://localhost:3000/lists/${i}`, deleteMethod)
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error 
    .then(reloadPage())
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------


/*
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

*/