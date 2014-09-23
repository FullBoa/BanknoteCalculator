//Автор: Георгий Поликарпов

function fillBanknoteCount(counts) {
    if (counts['5000r'] > 0) {
        $("input#5000r").val(counts['5000r']);
        $("input#5000r").parent().removeClass("hidden");
    } else {
        $("input#5000r").parent().addClass("hidden");
    }

    if (counts['1000r'] > 0) {
        $("input#1000r").val(counts['1000r']);
        $("input#1000r").parent().removeClass("hidden");
    } else {
        $("input#1000r").parent().addClass("hidden");
    }

    if (counts['500r'] > 0) {
        $("input#500r").val(counts['500r']);
        $("input#500r").parent().removeClass("hidden");
    } else {
        $("input#500r").parent().addClass("hidden");
    }

    if (counts['100r'] > 0) {
        $("input#100r").val(counts['100r']);
        $("input#100r").parent().removeClass("hidden");
    } else {
        $("input#100r").parent().addClass("hidden");
    }

    if (counts['50r'] > 0) {
        $("input#50r").val(counts['50r']);
        $("input#50r").parent().removeClass("hidden");
    } else {
        $("input#50r").parent().addClass("hidden");
    }

    if (counts['10r'] > 0) {
        $("input#10r").val(counts['10r']);
        $("input#10r").parent().removeClass("hidden");
    } else {
        $("input#10r").parent().addClass("hidden");
    }

    if (counts['5r'] > 0) {

        $("input#5r").val(counts['5r']);
        $("input#5r").parent().removeClass("hidden");
    } else {
        $("input#5r").parent().addClass("hidden");
    }

    if (counts['2r'] > 0) {
        $("input#2r").val(counts['2r']);
        $("input#2r").parent().removeClass("hidden");
    } else {
        $("input#2r").parent().addClass("hidden");
    }

    if (counts['1r'] > 0) {
        $("input#1r").val(counts['1r']);
        $("input#1r").parent().removeClass("hidden");
    } else {
        $("input#1r").parent().addClass("hidden");
    }

    if (counts['50k'] > 0) {
        $("input#50k").val(counts['50k']);
        $("input#50k").parent().removeClass("hidden");
    } else {
        $("input#50k").parent().addClass("hidden");
    }

    if (counts['10k'] > 0) {
        $("input#10k").val(counts['10k']);
        $("input#10k").parent().removeClass("hidden");
    } else {
        $("input#10k").parent().addClass("hidden");
    }

    if (counts['5k'] > 0) {
        $("input#5k").val(counts['5k']);
        $("input#5k").parent().removeClass("hidden");
    } else {
        $("input#5k").parent().addClass("hidden");
    }

    if (counts['1k'] > 0) {
        $("input#1k").val(counts['1k']);
        $("input#1k").parent().removeClass("hidden");
    } else {
        $("input#1k").parent().addClass("hidden");
    }
}

function calculateOnClick() {

    var total = 0;
    var validCount = 0;
	var amounts = [];

    $("div.amounts").find("input.value").each(function (index, element) {
        element.value = element.value.replace(",", ".").trim();

        var patternFloat = /^[0-9]+(\.|\,){1}[0-9]*$/;
        var patternInt = /^[0-9]+$/;
        var patternNegative = /^-.*/;
        if (!(patternFloat.test(element.value) || patternInt.test(element.value))
            || patternNegative.test(element.value)) {
            $(element).addClass("invalid");
            element.name = "";
        } else {
            $(element).removeClass("invalid");
            element.name = "Amounts[" + validCount + "]";
			amounts.push(parseFloat(element.value));
			total +=parseFloat(element.value);
            validCount++;
        }

    });
	
	var counts = {};
	
	$("div.availableCount").find("input.available").each(function (index, element) {
		element.value = element.value.trim();
		if (element.value != ""){
			var patternInt = /^[0-9]+$/;
			if (!patternInt.test(element.value)){
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

    $("b.total").text("Итого: " + total.toFixed(2).toString());
	var counts = BanknoteCalculator(money);
	fillBanknoteCount(counts);

    return false;
}

$("input.calculate[type=button]").on("click", calculateOnClick);
$("input.value").on("change", calculateOnClick);