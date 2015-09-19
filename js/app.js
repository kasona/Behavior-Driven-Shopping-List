var newList = new ShoppingList(); //new instance
var showItems = newList.render(); // invoke render
document.querySelector('#adding').addEventListener('click', add_to_shopping_list);

var adding = document.querySelector('#adding');
adding.addEventListener('click', function() {
  add_to_shopping_list();
});

// ===================== add_to_shopping_list =========================

function add_to_shopping_list () {

  var title = document.querySelector('#title').value;
  var description = document.querySelector('#description').value;

  var new_shopping_list_item = new ShoppingListItem(title, description);

  newList.addItem(new_shopping_list_item);

  // console.log(showItems);
  document.getElementById('content').innerHTML = newList.render();
}

//========================== changCheckedStatus =====================
function changeCheckedStatus(idx, checkbox) { // idx is position of ShoppingListItem, checkbox is actual checkbox element, !!!! how to use EventListener and checked together
  var currentItem = newList.item[idx];
  var checked = document.getElementById(idx); console.log(checked);

  if (checkbox.checked === true) {
    currentItem.check();
  } else {
    currentItem.uncheck();
  }
  document.getElementById('content').innerHTML = newList.render();
}

// =========================== uncheck ==============================
function removeItemButtonClicked(idx) {
  var toRemove = document.getElementById('remove' + idx);
  var removing = newList.item[idx];
  document.getElementById('content').innerHTML = newList.render();
  newList.removeItem(removing);
}