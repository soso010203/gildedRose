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

  it("3. normal item degrades twice after sell date", function() {
    const shop = new Shop([new Item("Dexterity Vest", 0, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(18);
  });

  it("4. quality is never negative", function() {
    const shop = new Shop([new Item("Dexterity Vest", 5, 0)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(0);
  });

   it("5. Aged Brie increases in quality", function() {
    const shop = new Shop([new Item("Aged Brie", 5, 10)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(11);
  });

  it("6. Aged Brie increases twice after sell date", function() {
    const shop = new Shop([new Item("Aged Brie", 0, 10)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(12);
  });

  it("7. Aged Brie quality never exceeds 50", function() {
    const shop = new Shop([new Item("Aged Brie", 5, 50)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(50);
  });

  it("8. Sulfuras never changes quality", function() {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(80);
  });

});