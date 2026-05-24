describe("Gilded Rose", function() {

  it("normal item decreases quality by 1", function() {
    const items = [new Item("Dexterity Vest", 10, 20)];
    const shop = new Shop(items);

    shop.updateQuality();

    expect(items[0].quality).toBe(19);
  });

});