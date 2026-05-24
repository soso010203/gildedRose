class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      const item = this.items[i];

      if (item.name != 'Aged Brie' &&
          item.name != 'Backstage passes to a TAFKAL80ETC concert') {

        if (item.name != 'Sulfuras, Hand of Ragnaros') {

          if (item.quality > 0) {

            // 🔥 CONJURED LOGIC (13 + 14)
            if (item.name.startsWith('Conjured')) {

              let degrade = 2;

              // nach Ablauf doppelt so schnell
              if (item.sellIn <= 0) {
                degrade = 4;
              }

              item.quality = item.quality - degrade;

              if (item.quality < 0) {
                item.quality = 0;
              }

            } else {
              item.quality = item.quality - 1;
            }
          }
        }

      } else {

        if (item.quality < 50) {
          item.quality = item.quality + 1;

          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {

            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {

        if (item.name != 'Aged Brie') {

          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {

            if (item.quality > 0 && !item.name.startsWith('Conjured')) {
              item.quality = item.quality - 1;
            }

          } else {
            item.quality = 0;
          }

        } else {

          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }

        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};