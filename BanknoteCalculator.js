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
			
			if (availableCounts.hasOwnProperty('5000r') && availableCounts['5000r'] != null && counts['5000r'] > availableCounts['5000r']){
				counts['1000r'] += 5*(counts['5000r'] - availableCounts['5000r']);
				counts['5000r'] = availableCounts['5000r'];
			}
			
			if (availableCounts.hasOwnProperty('1000r') && availableCounts['1000r'] != null && counts['1000r'] > availableCounts['1000r']){
				counts['500r'] += 2*(counts['1000r'] - availableCounts['1000r']);
				counts['1000r'] = availableCounts['1000r'];
			}
			
			if (availableCounts.hasOwnProperty('500r') && availableCounts['500r'] != null && counts['500r'] > availableCounts['500r']){
				counts['100r'] += 5*(counts['500r'] - availableCounts['500r']);
				counts['500r'] = availableCounts['500r'];
			}
			
			if (availableCounts.hasOwnProperty('100r') && availableCounts['100r'] != null && counts['100r'] > availableCounts['100r']){
				counts['50r'] += 2*(counts['100r'] - availableCounts['100r']);
				counts['100r'] = availableCounts['100r'];
			}
			
			if (availableCounts.hasOwnProperty('50r') && availableCounts['50r'] != null && counts['50r'] > availableCounts['50r']){
				counts['10r'] += 5*(counts['50r'] - availableCounts['50r']);
				counts['50r'] = availableCounts['50r'];
			}
			
			if (availableCounts.hasOwnProperty('10r') && availableCounts['10r'] != null && counts['10r'] > availableCounts['10r']){
				counts['5r'] += 2*(counts['10r'] - availableCounts['10r']);
				counts['10r'] = availableCounts['10r'];
			}
			
			if (availableCounts.hasOwnProperty('5r') && availableCounts['5r'] != null && counts['5r'] > availableCounts['5r']){
				counts['2r'] += 2*(counts['5r'] - availableCounts['5r']);
				counts['1r'] += counts['5r'] - availableCounts['5r'];
				counts['5r'] = availableCounts['5r'];
			}
			
			if (availableCounts.hasOwnProperty('2r') && availableCounts['2r'] != null && counts['2r'] > availableCounts['2r']){
				counts['1r'] += 2*(counts['2r'] - availableCounts['2r']);
				counts['2r'] = availableCounts['2r'];
			}
			
			if (availableCounts.hasOwnProperty('1r') && availableCounts['1r'] != null && counts['1r'] > availableCounts['1r']){
				counts['50k'] += 2*(counts['1r'] - availableCounts['1r']);
				counts['1r'] = availableCounts['1r'];
			}
			
			if (availableCounts.hasOwnProperty('50k') && availableCounts['50k'] != null && counts['50k'] > availableCounts['50k']){
				counts['10k'] += 5*(counts['50k'] - availableCounts['50k']);
				counts['50k'] = availableCounts['50k'];
			}		
			
			if (availableCounts.hasOwnProperty('10k') && availableCounts['10k'] != null && counts['10k'] > availableCounts['10k']){
				counts['5k'] += 2*(counts['10k'] - availableCounts['10k']);
				counts['10k'] = availableCounts['10k'];
			}
			
			if (availableCounts.hasOwnProperty('5k') && availableCounts['5k'] != null && counts['5k'] > availableCounts['5k']){
				counts['1k'] += 5*(counts['5k'] - availableCounts['5k']);
				counts['5k'] = availableCounts['5k'];
			}
			
			if (availableCounts.hasOwnProperty('1k') && availableCounts['1k'] != null && counts['1k'] > availableCounts['1k']){
				counts['1k'] = availableCounts['1k'];
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
	
	currentCount['5000r'] = Math.floor(amount / 5000);	
	amount -= 5000*currentCount['5000r'];
	
	currentCount['1000r'] = Math.floor(amount / 1000);
	amount -= 1000*currentCount['1000r'];
	
	currentCount['500r'] = Math.floor(amount / 500);
	amount -= 500*currentCount['500r'];
	
	currentCount['100r'] = Math.floor(amount / 100);
	amount -= 100*currentCount['100r'];
	
	currentCount['50r'] = Math.floor(amount / 50);
	amount -= 50*currentCount['50r'];
	
	currentCount['10r'] = Math.floor(amount / 10);
	amount -= 10*currentCount['10r'];
	
	currentCount['5r'] = Math.floor(amount / 5);
	amount -= 5*currentCount['5r'];
	
	currentCount['2r'] = Math.floor(amount / 2);
	amount -= 2*currentCount['2r'];
	
	currentCount['1r'] = Math.floor(amount / 1);
	amount -= 1*currentCount['1r'];
	
	currentCount['50k'] = Math.floor(amount.toFixed(2) / 0.5);
	amount -= 0.5*currentCount['50k'];
	
	currentCount['10k'] = Math.floor(amount.toFixed(2) / 0.1);
	amount -= 0.1*currentCount['10k'];
	
	currentCount['5k'] = Math.floor(amount.toFixed(2) / 0.05);
	amount -= 0.05*currentCount['5k'];
					
	currentCount['1k'] = Math.floor(amount.toFixed(2) / 0.01);
	
	return currentCount;
}

function BanknoteCount() {
    this['5000r'] = 0;
    this['1000r'] = 0;
    this['500r'] = 0;
    this['100r'] = 0;
    this['50r'] = 0;
    this['10r'] = 0;
    this['5r'] = 0;
    this['2r'] = 0;
    this['1r'] = 0;
    this['50k'] = 0;
    this['10k'] = 0;
    this['5k'] = 0;
    this['1k'] = 0;
}

BanknoteCount.prototype.add = function(count){
	this['5000r'] += count['5000r'];
	this['1000r'] += count['1000r'];
	this['500r'] += count['500r'];
	this['100r'] += count['100r'];
	this['50r'] += count['50r'];
	this['10r'] += count['10r'];
	this['5r'] += count['5r'];
	this['2r'] += count['2r'];
	this['1r'] += count['1r'];
	this['50k'] += count['50k'];
	this['10k'] += count['10k'];
	this['5k'] += count['5k'];
	this['1k'] += count['1k'];
};