class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {

      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      this.updateSellIn(item);
      this.updateItemQuality(item);
      this.applyExpiredRules(item);
      this.enforceBounds(item);
    }

    return this.items;
  }

  updateSellIn(item) {
    item.sellIn--;
  }

  updateItemQuality(item) {
    if (item.name === 'Aged Brie') {
      this.increaseQuality(item, 1);
    } 
    else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality(item, 1);

      if (item.sellIn < 10) this.increaseQuality(item, 1);
      if (item.sellIn < 5) this.increaseQuality(item, 1);
    } 
    else if (item.name.startsWith('Conjured')) {
      this.decreaseQuality(item, item.sellIn < 0 ? 4 : 2);
    } 
    else {
      this.decreaseQuality(item, item.sellIn < 0 ? 2 : 1);
    }
  }

  applyExpiredRules(item) {
    if (item.sellIn >= 0) return;

    if (item.name === 'Aged Brie') {
      this.increaseQuality(item, 1);
    }

    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0;
    }
  }

  increaseQuality(item, amount) {
    item.quality += amount;
  }

  decreaseQuality(item, amount) {
    item.quality -= amount;
  }

  enforceBounds(item) {
    if (item.quality < 0) {
      item.quality = 0;
    }

    if (item.quality > 50 && item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.quality = 50;
    }
  }
}

module.exports = {
  Item,
  Shop
};