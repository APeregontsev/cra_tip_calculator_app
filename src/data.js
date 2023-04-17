let data = {
  bill: 0,
  tip: [5, 10, 15, 25, 50],
  customTip: 0,
  selectedTip: 0,
  numberOfPeople: 0,

  getTipAmountPerPerson: function () {
    if (this.bill > 0 && this.numberOfPeople > 0) {
      if (this.selectedTip > 0) {
        return (this.bill * (this.selectedTip / 100)) / this.numberOfPeople;
      } else if (this.customTip > 0) {
        return (this.bill * (this.customTip / 100)) / this.numberOfPeople;
      } else {
        return 0;
      }
    }
    return 0;
  },

  getTotal: function () {
    if (this.bill > 0 && this.numberOfPeople > 0) {
      if (this.selectedTip > 0) {
        return this.bill + this.bill * (this.selectedTip / 100);
      } else if (this.customTip > 0) {
        return this.bill + this.bill * (this.customTip / 100);
      } else {
        return 0;
      }
    }
    return 0;
  },
};

export default data;
