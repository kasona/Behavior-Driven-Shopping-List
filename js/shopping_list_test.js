var expect = chai.expect;
var should = chai.should();


// ======================== ShoppingListItem ==========================
describe('ShoppingListItem', function() {

  var bagel = new ShoppingListItem('Bagel', 'Blueberry', true);

  it('should be a class', function() {
    ShoppingListItem.should.be.a('function');
  });

  it('should have a property, name', function() {
    bagel.name.should.equal('Bagel');
    bagel.should.have.property('name');
  });

  it('should have property, description', function() {
    bagel.should.have.property('description');
    bagel.description.should.equal('Blueberry');
  });

  it('should have property, is_done', function() {
    bagel.is_done.should.equal.true;
  });

  describe('Methods', function() {
    it('should have method named check', function() {
    bagel.is_done.should.equal.true;
  });

    it('should have method named uncheck', function() {
    bagel.is_done.should.equal.false;
  });
  });

  describe('Render', function() {
    it('should have method named render method and return an html string', function() {
      bagel.render().should.equal('<li class="completed_true"><span>Bagel</span><span>Blueberry</span></li>');
    });
  });
}); // end of ShoppingListItem

// ======================== ShoppingList ==========================

describe('ShoppingList', function() {

  var grape = new ShoppingList();
  var list = new ShoppingList();
  var item = new ShoppingListItem('item');

  it('should be a class', function() {
    ShoppingList.should.be.a('function');
  });

  it('should have a property named item', function() {
    grape.should.have.property('item');
  });

  it('should be an empty array', function() {
    var banana = new ShoppingList();
    banana.item.should.be.empty;
  });
  describe('addItem', function() {

    it('should have method named addItem', function() {
    ShoppingList.should.have.length(1);
  });

    it('should add ShoppingListItems into item Array', function() {
      list.addItem(item).should.be.equal.true;
      list.item.should.have.length(1);
    });

    it('addItem should throw error message', function() {
      list.addItem.should.throw(Error);
    });
  });

  //removeItem
  describe('removeItem', function() {
  it('should have method named removeItem', function() {
    ShoppingList.should.have.length(1);
  });

  it('should remove item from array', function() {
    ShoppingList.should.have.length(1);
  });

  it('removeItem should throw error message', function() {
    list.removeItem.should.throw(Error);
  });
});
  describe('render', function () {
  it('should have method named render method and return an html string', function() {
    list.render().should.equal('<li class="completed_undefined"><span>undefined</span><span>undefined</span></li>');
  });
});
}); //end of ShoppingList