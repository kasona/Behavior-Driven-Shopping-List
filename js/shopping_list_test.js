var expect = chai.expect;
var should = chai.should();


// ======================== ShoppingListItem ==========================
describe('ShoppingListItem', function() {

  var Bagel = new ShoppingListItem('Bagel', 'Blueberry', true);

  it('should be a class', function() {
    ShoppingListItem.should.be.a('function');
    ShoppingListItem.should.be.an('object');
  });
  it('should have a property, name', function() {
    Bagel.name.should.equal('Bagel');
    Bagel.should.have.property('name');
  });
  it('should have property, description', function() {
    Bagel.should.have.property('description');
    Bagel.description.should.equal('Blueberry');
  });
  it('should have property, is_done', function() {
    Bagel.is_done.should.equal.true;
  });
  it('should have method named check', function() {
    Bagel.is_done.should.equal.true;
  });
  it('should have method named uncheck', function() {
    Bagel.is_done.should.equal.false;
  });
  it('should have method named render method and return an html string', function() {
    var result = Bagel.render();
    Bagel.render().should.equal('<li class="completed_true"><span>Bagel</span><span>Blueberry</span></li>');
  });
}); // end of ShoppingListItem

// ======================== ShoppingList ==========================

describe('ShoppingList', function() {

  var Grape = new ShoppingList();

  it('should be a class', function() {
    ShoppingList.should.be.a('function');
  });
  it('should have a property named item', function() {
    Grape.should.have.property('item');
  });
  it('should be an empty array', function() {
    var Banana = new ShoppingList();
    Banana.item.should.be.empty;
  });
  it('should add item to ShoppingList', function() {
    Grape.addItem().to.throw(Error);
  });
  it.skip('should remove item from ShoppingList', function() {
    Grape.removeItem().to.throw(Error);
  });




//Testing removal of last item inputed into an array



});