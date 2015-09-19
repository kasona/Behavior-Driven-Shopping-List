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

ShoppingListItem.prototype.render = function() {
  var render =
  '<li class="completed_' +  this.isDone + '">\
  <input type= "checkbox" onChange="changedCheckedStatus()" id="checkbox" value="checkbox">\
  <span>' + this.name + '</span>\
  <span>' + this.description + '</span>\
  <button onclick="removeItemButtonClicked()">  x</button>\
  </li>';

  // <input type="checkbox" onChange="changedCheckedStatus()" id="checkbox" value="checkbox">\
  // document.getElementById('check').value = true || false;

  return render;
};

// ================= ShoppingList =========================

function ShoppingList(item) {
  this.item = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.item.push(item);
    return true;
  } else {
    throw new Error('item is not on ShoppingList');
  }
};

ShoppingList.prototype.removeItem = function (ShoppingListItem) {
  if (this.item.indexOf(ShoppingListItem) !== -1) {
    this.item.pop(ShoppingListItem);
  } else if (this.item.indexOf(ShoppingListItem) === -1) {
    throw new Error('item is not on list');
  }
};

ShoppingList.prototype.render = function(render) {
  render = '<ul><li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li></ul>';
  var listAll = [];
  for (var i = 0; i < this.item.length; i++) {
    listAll.push(this.item[i].render());
  }

  listAll.toString();
  listAll.join(' ');

  return render;

};