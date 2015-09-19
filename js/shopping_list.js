// ================= ShoppingList =========================

function ShoppingList() {
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
  // render = '<ul><li class="completed_' + this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li></ul>';
  var str = '';
  for (var i = 0; i < this.item.length; i++) {
    str += (this.item[i].render(i));
  }
  return '<ul>' + str + '</ul>';

};