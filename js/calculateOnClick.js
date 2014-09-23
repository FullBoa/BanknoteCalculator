//Автор: Георгий Поликарпов

function fillBanknoteCount(counts) {
    if (counts.fiveThousandRubleCount > 0) {
        $("input#5000r").val(counts.fiveThousandRubleCount);
        $("input#5000r").parent().removeClass("hidden");
    } else {
        $("input#5000r").parent().addClass("hidden");
    }

    if (counts.oneThousandRubleCount > 0) {
        $("input#1000r").val(counts.oneThousandRubleCount);
        $("input#1000r").parent().removeClass("hidden");
    } else {
        $("input#1000r").parent().addClass("hidden");
    }

    if (counts.fiveHundredRubleCount > 0) {
        $("input#500r").val(counts.fiveHundredRubleCount);
        $("input#500r").parent().removeClass("hidden");
    } else {
        $("input#500r").parent().addClass("hidden");
    }

    if (counts.oneHundredRubleCount > 0) {
        $("input#100r").val(counts.oneHundredRubleCount);
        $("input#100r").parent().removeClass("hidden");
    } else {
        $("input#100r").parent().addClass("hidden");
    }

    if (counts.fiftyRubleCount > 0) {
        $("input#50r").val(counts.fiftyRubleCount);
        $("input#50r").parent().removeClass("hidden");
    } else {
        $("input#50r").parent().addClass("hidden");
    }

    if (counts.tenRubleCount > 0) {
        $("input#10r").val(counts.tenRubleCount);
        $("input#10r").parent().removeClass("hidden");
    } else {
        $("input#10r").parent().addClass("hidden");
    }

    if (counts.fiveRubleCount > 0) {

        $("input#5r").val(counts.fiveRubleCount);
        $("input#5r").parent().removeClass("hidden");
    } else {
        $("input#5r").parent().addClass("hidden");
    }

    if (counts.twoRubleCount > 0) {
        $("input#2r").val(counts.twoRubleCount);
        $("input#2r").parent().removeClass("hidden");
    } else {
        $("input#2r").parent().addClass("hidden");
    }

    if (counts.oneRubleCount > 0) {
        $("input#1r").val(counts.oneRubleCount);
        $("input#1r").parent().removeClass("hidden");
    } else {
        $("input#1r").parent().addClass("hidden");
    }

    if (counts.fiftyCopeckCount > 0) {
        $("input#50k").val(counts.fiftyCopeckCount);
        $("input#50k").parent().removeClass("hidden");
    } else {
        $("input#50k").parent().addClass("hidden");
    }

    if (counts.tenCopeckCount > 0) {
        $("input#10k").val(counts.tenCopeckCount);
        $("input#10k").parent().removeClass("hidden");
    } else {
        $("input#10k").parent().addClass("hidden");
    }

    if (counts.fiveCopeckCount > 0) {
        $("input#5k").val(counts.fiveCopeckCount);
        $("input#5k").parent().removeClass("hidden");
    } else {
        $("input#5k").parent().addClass("hidden");
    }

    if (counts.oneCopeckCount > 0) {
        $("input#1k").val(counts.oneCopeckCount);
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
	
	var money = {'amounts':amounts};

    $("b.total").text("Итого: " + total.toFixed(2).toString());
	var counts = BanknoteCalculator(money);
	fillBanknoteCount(counts);

    return false;
}

$("input.calculate[type=button]").on("click", calculateOnClick);
$("input.value").on("change", calculateOnClick);