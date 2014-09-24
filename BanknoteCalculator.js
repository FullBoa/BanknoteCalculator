//Автор: Георгий Поликарпов

function BanknoteCalculator() {
	var countOnAmount = function countOnAmount(amount)
	{
		var amount = parseFloat(Math.floor(amount*100)/100);
		var currentCount = new BanknoteCount;
		
		var countSame = function(name, denominator){
			currentCount[name] = Math.floor(amount / denominator);	
			amount = (amount - denominator * currentCount[name]).toFixed(2);	
		}
		
		countSame('5000r',5000);
		countSame('1000r',1000);
		countSame('500r',500);
		countSame('100r',100);
		countSame('50r',50);
		countSame('10r',10);
		countSame('5r',5);
		countSame('2r',2);
		countSame('1r',1);
		countSame('50k',0.5);
		countSame('10k',0.1);
		countSame('5k',0.05);
		countSame('1k',0.01);
		
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
