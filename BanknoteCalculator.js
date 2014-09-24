//Автор: Георгий Поликарпов

function BanknoteCalculator() {
	var countOnAmount = function countOnAmount(amount)
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

	this.calculate = function(money) {
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
			
			if(money.hasOwnProperty('availableCounts') && money.availableCounts !=null){
				var availableCounts = money.availableCounts;
				
				var correctCount = function(srcPropertyName, dstPropertyNames, multipliers){
					dstPropertyNames = $.makeArray(dstPropertyNames);
					multipliers = $.makeArray(multipliers);
					if (availableCounts.hasOwnProperty(srcPropertyName) && availableCounts[srcPropertyName] != null && counts[srcPropertyName] > availableCounts[srcPropertyName]){
						for (var i=0; i<dstPropertyNames.length; i++) {
							counts[dstPropertyNames[i]] += multipliers[i] * (counts[srcPropertyName] - availableCounts[srcPropertyName]);
						}
						counts[srcPropertyName] = availableCounts[srcPropertyName];
						if (srcPropertyName == "1k"){
							counts.shortage = true;
						}
					}	
				}
				
				correctCount('5000r','1000r',5);
				correctCount('1000r','500r',2);
				correctCount('500r','100r',5);
				correctCount('100r','50r',2);
				correctCount('50r','10r',5);
				correctCount('10r','5r',2);
				correctCount('5r',['2r','1r'],[2,1]);
				correctCount('2r','1r',2);
				correctCount('1r','50k',2);
				correctCount('50k','10k',5);
				correctCount('10k','5k',2);
				correctCount('5k','1k',5);
				correctCount('1k',[],[]);
			}
			
			return counts;
		}	
			
			return new BanknoteCount;
	}
	
	
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
	
	this.add = function(count){
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
	}
}