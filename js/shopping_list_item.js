/*
ShoppingListItem:
  - Should be a class
  - Properties named: name, description, is_done
  - Constructor with 2 arguments (name, description)
  - Methods:
      check - will set is_done to true
      uncheck - will set is_done to false
      render - will construct and return an html formatted string (see README for tags and example)
 */
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