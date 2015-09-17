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

ShoppingListItem.prototype.render = function(render) {
  return '<li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li>';
};

// ================= ShoppingList =========================

function ShoppingList(item) {
  this.item = [];
}
console.log('testing');
ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingList) {
    console.log('hi testing');
    this.item.push(item);
  } else {
    throw new Error('item does not exist.');
  }
};

/*
1. remove objects from item array
2. if no parameters, remove last item in list, if no items, do nothing
3. if !ShoppingList, throw error
*/
ShoppingList.prototype.removeItem = function(item) {
  if (item instanceof !ShoppingList) {
    this.item.remove(item);
  } else if (lkdfj) {
    //Check length, remove, check length again and value of last item

  } else {
    throw new Error('item does not exist.');
  }
};
