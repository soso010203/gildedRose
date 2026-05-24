describe("Gilded Rose", function() {

  it("normal item decreases quality by 1", function() {
    const items = [new Item("Dexterity Vest", 10, 20)];
    const shop = new Shop(items);

    shop.updateQuality();

    expect(items[0].quality).toBe(19);
  });

  it("2. normal item decreases sellIn by 1", function() {
    const shop = new Shop([new Item("Dexterity Vest", 10, 20)]);
    shop.updateQuality();
    expect(shop.items[0].sellIn).toBe(9);
  });

});