//Автор: Георгий Поликарпов

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

    var total = 0;
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
			total += parseFloat(Math.floor(element.value * 100) / 100);
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

    $("b.total").text("Итого: " + total.toFixed(2));
	var calculator = new BanknoteCalculator();
	var counts = calculator.calculate(money);
	fillBanknoteCount(counts);

    return false;
}

$("input.calculate[type=button]").on("click", calculateCount);
$("input.value").on("change", calculateCount);