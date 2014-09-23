//Автор: Георгий Поликарпов

function BanknoteCalculator(amounts) {
    if (amounts == null) {
        throw new Error("Значение не может быть null");
    }
    
	var counts = new BanknoteCount;
	
    if (amounts.length > 0) {
		amounts.forEach(function(value) {
			if (value < 0) {
				throw new Error ("Сумма не может быть отрицательным числом!");
			}			
		
			currentCount = countOnAmount(value);
			
			counts.add(currentCount);
		});
		
		return counts;
	}	
		
        return new BanknoteCount;
}

function countOnAmount(amount)
{
	var amount = 0.001 + parseFloat(amount.toFixed(2));
	var currentCount = new BanknoteCount;
	
	currentCount.fiveThousandRubleCount = Math.floor(amount / 5000);	
	amount -= 5000*currentCount.fiveThousandRubleCount;
	
	currentCount.oneThousandRubleCount = Math.floor(amount / 1000);
	amount -= 1000*currentCount.oneThousandRubleCount;
	
	currentCount.fiveHundredRubleCount = Math.floor(amount / 500);
	amount -= 500*currentCount.fiveHundredRubleCount;
	
	currentCount.oneHundredRubleCount = Math.floor(amount / 100);
	amount -= 100*currentCount.oneHundredRubleCount;
	
	currentCount.fiftyRubleCount = Math.floor(amount / 50);
	amount -= 50*currentCount.fiftyRubleCount;
	
	currentCount.tenRubleCount = Math.floor(amount / 10);
	amount -= 10*currentCount.tenRubleCount;
	
	currentCount.fiveRubleCount = Math.floor(amount / 5);
	amount -= 5*currentCount.fiveRubleCount;
	
	currentCount.twoRubleCount = Math.floor(amount / 2);
	amount -= 2*currentCount.twoRubleCount;
	
	currentCount.oneRubleCount = Math.floor(amount / 1);
	amount -= 1*currentCount.oneRubleCount;
	
	currentCount.fiftyCopeckCount = Math.floor(amount / 0.5);
	amount -= 0.5*currentCount.fiftyCopeckCount;
	
	currentCount.tenCopeckCount = Math.floor(amount / 0.1);
	amount -= 0.1*currentCount.tenCopeckCount;
	
	currentCount.fiveCopeckCount = Math.floor(amount / 0.05);
	amount -= 0.05*currentCount.fiveCopeckCount;
					
	currentCount.oneCopeckCount = Math.floor(amount / 0.01);
	
	return currentCount;
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

BanknoteCount.prototype.add = function(count){
	this.fiveThousandRubleCount += count.fiveThousandRubleCount;
	this.oneThousandRubleCount += count.oneThousandRubleCount;
	this.fiveHundredRubleCount += count.fiveHundredRubleCount;
	this.oneHundredRubleCount += count.oneHundredRubleCount;
	this.fiftyRubleCount += count.fiftyRubleCount;
	this.tenRubleCount += count.tenRubleCount;
	this.fiveRubleCount += count.fiveRubleCount;
	this.twoRubleCount += count.twoRubleCount;
	this.oneRubleCount += count.oneRubleCount;
	this.fiftyCopeckCount += count.fiftyCopeckCount;
	this.tenCopeckCount += count.tenCopeckCount;
	this.fiveCopeckCount += count.fiveCopeckCount;
	this.oneCopeckCount += count.oneCopeckCount;
};