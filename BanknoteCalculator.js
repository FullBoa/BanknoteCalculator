//Автор: Георгий Поликарпов

function BanknoteCalculator(amounts) {
    if (amounts == null) {
        throw new Error("Значение не может быть null");
    }
    
    if (amounts.length > 0) {
        return new BanknoteCount;
    } else {
        return new BanknoteCount;
    }
}

function BanknoteCount() {
    this.fiveThousandRubleCount = 0;
    this.oneThousandRubleCount = 0;
    this.fiveHundredRubleCount = 0;
    this.oneHundredRubleCount = 0;
    this.fiftyRubleCount = 0;
    this.tenRubleCount = 0;
    this.fiveRubleCount = 0;
    this.twoRubleCount = 0;
    this.oneRubleCount = 0;
    this.fiftyCopeckCount = 0;
    this.tenCopeckCount = 0;
    this.fiveCopeckCount = 0;
    this.oneCopeckCount = 0;
}