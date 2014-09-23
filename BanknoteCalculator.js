//Автор: Георгий Поликарпов

function BanknoteCalculator(money) {
    if (money == null) {
        throw new Error("Значение не может быть null");
    }
	
	if (!money.hasOwnProperty('amounts')){
		throw new Error("Некорректный аргумент");
	}
	
	var amounts = money.amounts;
    
	var counts = new BanknoteCount;
	
    if (amounts.length > 0) {
		amounts.forEach(function(value) {			
			if (!isFinite(value)){
				throw new Error("Некорректное значение");
			}					
			if (value < 0) {
				throw new Error ("Сумма не может быть отрицательным числом!");
			}	
		
			currentCount = countOnAmount(value);
			
			counts.add(currentCount);
		});
		
		if(money.hasOwnProperty('availableCounts')){
			var availableCounts = money.availableCounts;
			
			if (availableCounts.hasOwnProperty('fiveThousandRubleCount') && availableCounts.fiveThousandRubleCount != null && counts.fiveThousandRubleCount > availableCounts.fiveThousandRubleCount){
				counts.oneThousandRubleCount += 5*(counts.fiveThousandRubleCount - availableCounts.fiveThousandRubleCount);
				counts.fiveThousandRubleCount = availableCounts.fiveThousandRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('oneThousandRubleCount') && availableCounts.oneThousandRubleCount != null && counts.oneThousandRubleCount > availableCounts.oneThousandRubleCount){
				counts.fiveHundredRubleCount += 2*(counts.oneThousandRubleCount - availableCounts.oneThousandRubleCount);
				counts.oneThousandRubleCount = availableCounts.oneThousandRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('fiveHundredRubleCount') && availableCounts.fiveHundredRubleCount != null && counts.fiveHundredRubleCount > availableCounts.fiveHundredRubleCount){
				counts.oneHundredRubleCount += 5*(counts.fiveHundredRubleCount - availableCounts.fiveHundredRubleCount);
				counts.fiveHundredRubleCount = availableCounts.fiveHundredRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('oneHundredRubleCount') && availableCounts.oneHundredRubleCount != null && counts.oneHundredRubleCount > availableCounts.oneHundredRubleCount){
				counts.fiftyRubleCount += 2*(counts.oneHundredRubleCount - availableCounts.oneHundredRubleCount);
				counts.oneHundredRubleCount = availableCounts.oneHundredRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('fiftyRubleCount') && availableCounts.fiftyRubleCount != null && counts.fiftyRubleCount > availableCounts.fiftyRubleCount){
				counts.tenRubleCount += 5*(counts.fiftyRubleCount - availableCounts.fiftyRubleCount);
				counts.fiftyRubleCount = availableCounts.fiftyRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('tenRubleCount') && availableCounts.tenRubleCount != null && counts.tenRubleCount > availableCounts.tenRubleCount){
				counts.fiveRubleCount += 2*(counts.tenRubleCount - availableCounts.tenRubleCount);
				counts.tenRubleCount = availableCounts.tenRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('fiveRubleCount') && availableCounts.fiveRubleCount != null && counts.fiveRubleCount > availableCounts.fiveRubleCount){
				counts.twoRubleCount += 2*(counts.fiveRubleCount - availableCounts.fiveRubleCount);
				counts.oneRubleCount += counts.fiveRubleCount - availableCounts.fiveRubleCount;
				counts.fiveRubleCount = availableCounts.fiveRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('twoRubleCount') && availableCounts.twoRubleCount != null && counts.twoRubleCount > availableCounts.twoRubleCount){
				counts.oneRubleCount += 2*(counts.twoRubleCount - availableCounts.twoRubleCount);
				counts.twoRubleCount = availableCounts.twoRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('oneRubleCount') && availableCounts.oneRubleCount != null && counts.oneRubleCount > availableCounts.oneRubleCount){
				counts.fiftyCopeckCount += 2*(counts.oneRubleCount - availableCounts.oneRubleCount);
				counts.oneRubleCount = availableCounts.oneRubleCount;
			}
			
			if (availableCounts.hasOwnProperty('fiftyCopeckCount') && availableCounts.fiftyCopeckCount != null && counts.fiftyCopeckCount > availableCounts.fiftyCopeckCount){
				counts.tenCopeckCount += 5*(counts.fiftyCopeckCount - availableCounts.fiftyCopeckCount);
				counts.fiftyCopeckCount = availableCounts.fiftyCopeckCount;
			}		
			
			if (availableCounts.hasOwnProperty('tenCopeckCount') && availableCounts.tenCopeckCount != null && counts.tenCopeckCount > availableCounts.tenCopeckCount){
				counts.fiveCopeckCount += 2*(counts.tenCopeckCount - availableCounts.tenCopeckCount);
				counts.tenCopeckCount = availableCounts.tenCopeckCount;
			}
			
			if (availableCounts.hasOwnProperty('fiveCopeckCount') && availableCounts.fiveCopeckCount != null && counts.fiveCopeckCount > availableCounts.fiveCopeckCount){
				counts.oneCopeckCount += 5*(counts.fiveCopeckCount - availableCounts.fiveCopeckCount);
				counts.fiveCopeckCount = availableCounts.fiveCopeckCount;
			}
			
			if (availableCounts.hasOwnProperty('oneCopeckCount') && availableCounts.oneCopeckCount != null && counts.oneCopeckCount > availableCounts.oneCopeckCount){
				counts.oneCopeckCount = availableCounts.oneCopeckCount;
				counts.shortage = true;
			}
		}
		
		return counts;
	}	
		
        return new BanknoteCount;
}

function countOnAmount(amount)
{
	var amount = parseFloat(amount.toFixed(2));
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
	
	currentCount.fiftyCopeckCount = Math.floor(amount.toFixed(2) / 0.5);
	amount -= 0.5*currentCount.fiftyCopeckCount;
	
	currentCount.tenCopeckCount = Math.floor(amount.toFixed(2) / 0.1);
	amount -= 0.1*currentCount.tenCopeckCount;
	
	currentCount.fiveCopeckCount = Math.floor(amount.toFixed(2) / 0.05);
	amount -= 0.05*currentCount.fiveCopeckCount;
					
	currentCount.oneCopeckCount = Math.floor(amount.toFixed(2) / 0.01);
	
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