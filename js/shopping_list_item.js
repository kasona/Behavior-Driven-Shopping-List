// ================= ShoppingListItem =====================

function ShoppingListItem(name, description, is_done) {
  this.name = name;
  this.description = description;
  this.is_done = is_done;

} // end of ShoppingListItem

ShoppingListItem.prototype.check = function(is_done) {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function(is_done) {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(index) {

  var listItem = document.createElement('li');
  listItem.id = 'item_' + index;
  listItem.dataset.listId = index;
  listItem.className = 'completed_';

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox' + index;
  if (this.is_done === true) {
    checkbox.setAttribute('checked', 'true');
  }
  checkbox.dataset.listId = index;
  checkbox.setAttribute('onclick', 'changeCheckedStatus(' + index + ', ' + checkbox.id + ')');
  listItem.appendChild(checkbox);

  var spanName = document.createElement('span');
  spanName.innerHTML = this.name;
  listItem.appendChild(spanName);

  var spanDescription = document.createElement('span');
  spanDescription.innerHTML = this.description;
  listItem.appendChild(spanDescription);

  var deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'adding';
  deleteButton.setAttribute('onclick', 'removeItemButtonClicked(' + index + ')');
  deleteButton.innerHTML = 'x';
  listItem.appendChild(deleteButton);

  return listItem.outerHTML;

  // render =
  // '<li class="completed_' +  this.is_done + '">\
  // <input type= "checkbox" onChange="changedCheckedStatus()" id="checkbox" value="checkbox">\
  // <span>' + this.name + '</span>\
  // <span>' + this.description + '</span>\
  // <button id="removeThis' + index + '" onclick="removeItemButtonClicked(' + index + ')">x</button>\
  // </li>';
  // return render;
};