var Shoppinglist = require('./Shoppinglist');

var bananaPeel = new Shoppinglist(); //new instance
var render = bananaPeel.render(); // invoke render
document.getElementById('content').innerHTML = rendering;

function add_to_shopping_list() {
  var title = document.getElementById(title).value; //to link with html
  var description = document.getElementById(description).value; //to link with html

  bananaPeel.addItem(new_shopping_list_item); //invoke addItem

  document.getElementById('content').innerHTML = bananaPeel.render();
}

function check(idx, checkbox) { // idx is position of ShoppingListItem, checkbox is actual checkbox element, !!!! how to use EventListener and checked together
  document.getElementById('checkbox').checked = true || false;
  document.getElementById('checkbox').addEventListener('click');

  if (checkbox.checked === false) {
    currentItem.check();
  } else {
    currentItem.uncheck();
  }
  bananaPeel.render();
}

function uncheck() {
  document.getElementById('myCheck').checked = false;
}