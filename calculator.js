//Автор: Георгий Поликарпов

function BanknoteCalculator() {
	var countOnAmount = function countOnAmount(amount)
	{		
		amount = amount.toString();
		if (amount.indexOf(".") > -1) {
		amount = parseFloat(amount.substring(0,amount.indexOf(".")+3));
		} else {
			amount = parseInt(amount);
		}
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
					throw new Error ("Сумма не может быть отрицательным числом");
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
	
	this.total = function(amounts) {
		if (amounts == null) {
			throw new Error("Значение не может быть null");
		}
		
		if (!Array.isArray(amounts)){
			amounts = [amounts];
		}
		
		var total = 0;
		amounts.forEach(function(value) {	
			if (!isFinite(value)){
				throw new Error("Некорректное значение");
			}
			
			value = value.toString();
			if (value.indexOf(".") > -1) {
				value = parseFloat(value.substring(0,value.indexOf(".")+3));
			} else {
				value = parseInt(value);
			}
			
			if (isNaN(value)){
				throw new Error ("Некорректное значение");
			}	
			
			if (value < 0) {
				throw new Error ("Сумма не может быть отрицательным числом");
			}
			
			total += value;
		});
		
		return total;
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

function addValueOnClick() {
    var $pElement = $('<p/>', {
        class: "amountValue"
    });
    var $inputElement = $("<input/>", {
        class: "value",
        type: "text"
    });
    var $aElement = $("<a/>", {
        class: "delete",
        href: "",
        click: deleteValueOnClick
    });
    var $bElement = $("<b/>", {
        text: '\u00D7'
    });

    $("div.amounts").append($pElement);
    $pElement.append($inputElement);
    $pElement.append($aElement);
    $aElement.append($bElement);
    
    $inputElement.on("paste", onAmountPaste);	
	$inputElement.on("cut", cutValue);
    $inputElement.on("keyup", inputKeyUp);
	
	//для IE
	$inputElement.on("oncut", onAmountPaste);
	$inputElement.on("onpaste", onAmountPaste);

    return false;
}

function fillBanknoteCount(counts) {
	var fillCountInput = function(propertyName, inputId){
		if (counts[propertyName] > 0) {
			$("input#"+inputId).val(counts[propertyName]);
			$("input#"+inputId).parent().removeClass("hidden");
		} else {
			$("input#"+inputId).parent().addClass("hidden");
		} 
	}
	
	fillCountInput('5000r','#5000r');
	fillCountInput('1000r','#1000r');
	fillCountInput('500r','#500r');
	fillCountInput('100r','#100r');
	fillCountInput('50r','#50r');
	fillCountInput('10r','#10r');
	fillCountInput('5r','#5r');
	fillCountInput('2r','#2r');
	fillCountInput('1r','#1r');
	fillCountInput('50k','#50k');
	fillCountInput('10k','#10k');
	fillCountInput('5k','#5k');
	fillCountInput('1k','#1k');

    if (counts.hasOwnProperty('shortage') && counts.shortage == true){
		$("div.banknoteCount").find("p.shortage").removeClass("hidden");
	}else {		
		$("div.banknoteCount").find("p.shortage").addClass("hidden");
	}
}

function calculateCount() {
	var maxValue = 1000000000000000; // 1 квадриллион

    var validCount = 0;
	var amounts = [];

    $("div.amounts").find("input.value").each(function (index, element) {
        element.value = element.value.replace(",", ".");
		while(/\s+/.test(element.value)){
			element.value = element.value.replace(/\s+/, "");
		}

        var patternFloat = /(^[1-9][0-9]*|^0{1})((\.|\,){1}[0-9]*[1-9])?$/;
		if (!patternFloat.test(element.value) || (parseFloat(element.value) > maxValue)) {
            $(element).addClass("invalid");
            element.name = "";
        } else {
            $(element).removeClass("invalid");
            element.name = "Amounts[" + validCount + "]";
			amounts.push(parseFloat(element.value));
            validCount++;
        }

    });
	
	var counts = {};
	
	$("div.availableCount").find("input.available").each(function (index, element) {
		while(/\s+/.test(element.value)){
			element.value = element.value.replace(/\s+/, "");
		}
		if (element.value != ""){
			var patternInt = /^0$|^[1-9][0-9]*$/;
			if (!patternInt.test(element.value)  || (parseInt(element.value) > maxValue)){
				$(element).addClass("invalid");
			}
			else{
				$(element).removeClass("invalid");
				counts[element.name] = parseInt(element.value);
			}
		}
		else {			
			$(element).removeClass("invalid");
		}
	});
	
	var money = {
		'amounts':amounts,
		'availableCounts':counts
	};

	
	var calculator = new BanknoteCalculator();
    $("b.total").text("Итого: " + calculator.total(amounts).toFixed(2));
	var counts = calculator.calculate(money);
	fillBanknoteCount(counts);

    return false;
}

function clearAvailables() {
	$("div.availableCount").find("input.available").each(function (index, element) {
		element.value = "";
	});	
	
	calculateCount();

    return false;
}

function cutValue(event){
	
	if(event.originalEvent.clipboardData) {
        event.originalEvent.clipboardData.setData('text/plain',this.value.substring(this.selectionStart, this.selectionEnd));
    } else if (window.clipboardData) {
         window.clipboardData.setData('Text',this.value.substring(this.selectionStart, this.selectionEnd));
    }  
    
	this.value = this.value.substring(0, this.selectionStart)
		+ this.value.substring(this.selectionEnd, this.value.length);
	this.selectionEnd = this.selectionStart;

    calculateCount();

    return false;
}

function deleteValueOnClick() {
    $(this).parent().remove();
	calculateCount();

    return false;
}

function inputKeyUp(e) {
	var $key = e.which;
    if ($key < 16 || ($key > 18 && $key < 37) || $key > 40) {
		var selectionEnd = this.selectionEnd;
		var selectionStart = this.selectionStart;
        
        calculateCount();

        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
	}	
}

function onAmountPaste(event) {
    var pastedText;

	if(event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
        pastedText = event.originalEvent.clipboardData.getData('text/plain');
    }else if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
    }  

    var $target = $(this).parent();

    var amounts = [];
    pastedText.split('\n').forEach(function (element) {
        element.split("\t").forEach(function (element) {			
			while(/\s+/.test(element)){
				element = element.replace(/\s+/, "");
			}
            if (element != "") {
                amounts.push(element);
            }
        });
    });

    if (amounts.length > 0) {
        this.value = this.value.substring(0, this.selectionStart)
            + amounts[0]
            + this.value.substring(this.selectionEnd, this.value.length);		
		this.selectionStart = this.selectionEnd;

        for (var i = amounts.length - 1; i > 0; i--) {
			var $pElement = $('<p/>', {
				class: "amountValue"
			});

			var $inputElement = $("<input/>", {
				class: "value",
				type: "text",
				value: amounts[i]
			});

			var $aElement = $("<a/>", {
				class: "delete",
				href: "",
				click: deleteValueOnClick
			});

			var $bElement = $("<b/>", {
				text: '\u00D7'
			});

			$pElement.append($inputElement);
			$pElement.append($aElement);
			$aElement.append($bElement);
			$target.after($pElement);

			$inputElement.on("paste", onAmountPaste);
			$inputElement.on("cut", cutValue);
			$inputElement.on("keyup", inputKeyUp);
			
			//для IE
			$inputElement.on("oncut", onAmountPaste);
			$inputElement.on("onpaste", onAmountPaste);
        }
    }

    calculateCount();

    return false;
}

function onAvailablePaste(event) {
	var pastedText;

	if(event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
        pastedText = event.originalEvent.clipboardData.getData('text/plain');
    } else if (window.clipboardData && window.clipboardData.getData) {
         pastedText = window.clipboardData.getData('Text');
    }  

    var $target = $(this).parent();

    var availables = [];
    pastedText.split('\n').forEach(function (element) {
        element.split("\t").forEach(function (element) {
			while(/\s+/.test(element)){
				element = element.replace(/\s+/, "");
			}
            if (element != "") {
                availables.push(element);
            }
        });
    });
	
	if (availables.length > 0) {
        this.value = this.value.substring(0, this.selectionStart)
            + availables[0]
            + this.value.substring(this.selectionEnd, this.value.length);
		this.selectionStart = this.selectionEnd;	
			
		var $target = $target.next();
			
		for (var i = 1; i < availables.length && $target[0] != null; i++, $target = $target.next()){
			$target.find("input.available")[0].value = availables[i];
		}
	}

    calculateCount();

    return false;
}

$(document).ready(function(){
	$("div.amounts").find("input.value").each(function (index, element) {
		element.value = "";
	});
	
	$("div.availableCount").find("input.available").each(function (index, element) {
		element.value = "";
	});
});

$("a.add").on("click", addValueOnClick);

$("input.calculate[type=button]").on("click", calculateCount);
$("input.value").on("change", calculateCount);
$("a.delete").on("click", deleteValueOnClick);
$("a.clearAvailable").on("click",clearAvailables);
$("p.amountValue").find("input.value").on("cut", cutValue);
$("p.availableCount").find("input.available").on("cut", cutValue);
$("input.value").on("keyup", inputKeyUp);
$("input.available").on("keyup", inputKeyUp);
$("p.amountValue").find("input.value").on("paste", onAmountPaste);
$("p.availableCount").find("input.available").on("paste", onAvailablePaste);

//для IE
$("p.amountValue").find("input.value").on("onpaste", onAmountPaste);
$("p.availableCount").find("input.available").on("onpaste", onAvailablePaste);
$("p.amountValue").find("input.value").on("oncut", onAmountPaste);
$("p.availableCount").find("input.available").on("oncut", onAvailablePaste);
