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

  //methods
  describe('check', function() {
    it('should have method named check', function() {
    bagel.check.should.be.a('function');
  });
    it('should be set to true', function() {
    bagel.is_done.should.equal.true;
  });
  });
  describe('uncheck', function() {
    it('should have method named uncheck', function() {
    bagel.uncheck.should.be.a('function');
  });
    it('should be set to false', function() {
    bagel.is_done.should.equal.false;
  });
  });

  //render
  describe('Render', function() {
    it('should be a method', function() {
      bagel.render.should.be.a('function');
    });
    it('should return a html string', function() {
      bagel.render().should.be.a('string');
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

  //addItem
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

  //render
  describe('render', function () {
  it('should be a method', function() {
    list.render.should.be.a('function');
  });
  it('should return a html string ', function () {
    var list = new ShoppingList();
    var psl = new ShoppingListItem('Pumpkin Spice Latte', 'uggs', 'Nolan');

    var fullList = list.render();
    var list1 = list.addItem(psl);

    list.render().should.equal('<ul>' +  list1.items  + '</ul>');
  });
});
}); //end of ShoppingList