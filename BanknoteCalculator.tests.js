//Автор: Георгий Поликарпов

module("Null argument");

test("Null argument test", function () {
    throws(function() {
		BanknoteCalculator(null);
	}
	, new Error("Значение не может быть null"));
});

module ("Invalid argument");

test("Invalid argument {}", function () {
    throws(function() {
		BanknoteCalculator({});
	}
	, new Error("Некорректный аргумент"));
});

test("Invalid argument [5,215]", function () {
    throws(function() {
		BanknoteCalculator([5,215]);
	}
	, new Error("Некорректный аргумент"));
});


module("Test empty argument");

test("Empty argument", function () {
    var count = BanknoteCalculator({'amounts': []});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 0);
});


module("Negative argument");

test("-3254.2564", function () {
    var amounts = [-3254.2564];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("1500.15, -2000.87", function () {
    var amounts = [1500.15, -2000.87];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("1560, -1100.156, 2560", function () {
    var amounts = [1560, -1100.156, 2560];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("-0.01, 1000, 240", function () {
    var amounts = [-0.01, 1000, 240];
    throws(function() {
	BanknoteCalculator({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});


module("One element");

test("6668.66", function () {
    var amounts = [6668.66];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 1);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 1);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
});

test("9999.99", function () {
    var amounts = [9999.99];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 4);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 4);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 4);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 4);
});

test("13979.77", function () {
    var amounts = [13979.77];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 2);
    equal(count.oneThousandRubleCount, 3);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 2);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 2);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 2);
});

test("0", function () {
    var amounts = [0];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 0);
});

test("0.01", function () {
    var amounts = [0.01];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 1);
});

test("0.007", function () {
    var amounts = [0.007];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 1);
});

test("169346.94", function () {
    var amounts = [169346.94];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 33);
    equal(count.oneThousandRubleCount, 4);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 3);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 4);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 4);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 4);
});

test("16768.6432", function () {
    var amounts = [16768.6432];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 3);
    equal(count.oneThousandRubleCount, 1);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 2);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 4);
});

test("76432.16", function () {
    var amounts = [76432.16];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 15);
    equal(count.oneThousandRubleCount, 1);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 3);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
});

test("0.002", function () {
    var amounts = [0.002];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 0);
});


module("Some element");

test("2500, 2500", function () {
    var amounts = [2500, 2500];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 4);
    equal(count.fiveHundredRubleCount, 2);
    equal(count.oneHundredRubleCount, 0);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 0);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 0);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 0);
    equal(count.fiveCopeckCount, 0);
    equal(count.oneCopeckCount, 0);
});

test("6668.66, 6668.66", function () {
    var amounts = [6668.66, 6668.66];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 2);
    equal(count.oneThousandRubleCount, 2);
    equal(count.fiveHundredRubleCount, 2);
    equal(count.oneHundredRubleCount, 2);
    equal(count.fiftyRubleCount, 2);
    equal(count.tenRubleCount, 2);
    equal(count.fiveRubleCount, 2);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 2);
    equal(count.fiftyCopeckCount, 2);
    equal(count.tenCopeckCount, 2);
    equal(count.fiveCopeckCount, 2);
    equal(count.oneCopeckCount, 2);
});

test("9999.99, 16432.16", function () {
    var amounts = [9999.99, 16432.16];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 4);
    equal(count.oneThousandRubleCount, 5);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 8);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 7);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 3);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 5);
    equal(count.fiveCopeckCount, 2);
    equal(count.oneCopeckCount, 5);
});

test("163467.34, 643632.85", function () {
    var amounts = [163467.34, 643632.85];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 160);
    equal(count.oneThousandRubleCount, 6);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 5);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 4);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 6);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 4);
});

test("13643.15, 6744.96, 4000.543", function () {
    var amounts = [13643.15, 6744.96, 4000.543];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 3);
    equal(count.oneThousandRubleCount, 8);
    equal(count.fiveHundredRubleCount, 2);
    equal(count.oneHundredRubleCount, 3);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 8);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 3);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 2);
    equal(count.tenCopeckCount, 5);
    equal(count.fiveCopeckCount, 2);
    equal(count.oneCopeckCount, 5);
});

test("324.167, 111.111, 15.466", function () {
    var amounts = [324.167, 111.111, 15.466];
    var count = BanknoteCalculator({'amounts':amounts});
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 4);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 6);
    equal(count.fiveCopeckCount, 2);
    equal(count.oneCopeckCount, 5);
});


module ("With available banknote counts");

test("13979.77|5000=1", function () {
    var amounts = [13979.77];
	var counts = {
		fiveThousandRubleCount:1
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 8);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 2);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 0);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 2);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 2);
});

test("6668.66|5000=0,500=0", function () {
    var amounts = [6668.66];
	var counts = {
		fiveThousandRubleCount:0,
		fiveHundredRubleCount:0
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 6);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 6);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
});

test("6668.66|5000=2,500=2", function () {
    var amounts = [6668.66];
	var counts = {
		fiveThousandRubleCount:2,
		fiveHundredRubleCount:2
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 1);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 1);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
});

test("6668.66|5000=2,500=0", function () {
    var amounts = [6668.66];
	var counts = {
		fiveThousandRubleCount:2,
		fiveHundredRubleCount:0
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 1);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 6);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
});

test("13979.77|5000=1,100=3,50=5,10=1,5=2,2=3,1=10", function () {
    var amounts = [13979.77];
	var counts = {
		fiveThousandRubleCount:1,
		oneHundredRubleCount:3,
		fiftyRubleCount:5,
		tenRubleCount:1,
		fiveRubleCount:2,
		twoRubleCount:3,
		oneRubleCount:10		
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 8);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 3);
    equal(count.fiftyRubleCount, 3);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 2);
    equal(count.twoRubleCount, 3);
    equal(count.oneRubleCount, 3);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 2);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 2);
});

test("13979.77|5000=1,100=3,50=5,10=1,5=2,2=3,1=10", function () {
    var amounts = [13979.77];
	var counts = {
		fiveThousandRubleCount:1,
		oneHundredRubleCount:3,
		fiftyRubleCount:5,
		tenRubleCount:1,
		fiveRubleCount:2,
		twoRubleCount:3,
		oneRubleCount:10		
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 1);
    equal(count.oneThousandRubleCount, 8);
    equal(count.fiveHundredRubleCount, 1);
    equal(count.oneHundredRubleCount, 3);
    equal(count.fiftyRubleCount, 3);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 2);
    equal(count.twoRubleCount, 3);
    equal(count.oneRubleCount, 3);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 2);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 2);
});

test("13643.15, 6744.96, 4000.543|5000=5,1000=5,500=5,100=5,50=5", function () {
    var amounts = [13643.15, 6744.96, 4000.543];var counts = {
		fiveThousandRubleCount:5,
		oneThousandRubleCount:5,
		fiveHundredRubleCount:5,
		oneHundredRubleCount:5,
		fiftyRubleCount:5	
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 3);
    equal(count.oneThousandRubleCount, 5);
    equal(count.fiveHundredRubleCount, 5);
    equal(count.oneHundredRubleCount, 5);
    equal(count.fiftyRubleCount, 5);
    equal(count.tenRubleCount, 113);
    equal(count.fiveRubleCount, 0);
    equal(count.twoRubleCount, 3);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 2);
    equal(count.tenCopeckCount, 5);
    equal(count.fiveCopeckCount, 2);
    equal(count.oneCopeckCount, 5);
});

test("324.167, 111.111, 15.466|0.50=5,0.10=5,0.05=5,0.01=5", function () {    
    var amounts = [324.167, 111.111, 15.466];
	var counts = {
		fiftyCopeckCount:5,
		tenCopeckCount:5,
		fiveCopeckCount:5,
		oneCopeckCount:5
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 4);
    equal(count.fiftyRubleCount, 0);
    equal(count.tenRubleCount, 4);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 2);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 0);
    equal(count.tenCopeckCount, 5);
    equal(count.fiveCopeckCount, 4);
    equal(count.oneCopeckCount, 5);
});

test("324.167, 111.111, 15.466|All=1", function () {    
    var amounts = [324.167, 111.111, 15.466];
	var counts = {
		fiveThousandRubleCount:1,
		oneThousandRubleCount:1,
		fiveHundredRubleCount:1,
		oneHundredRubleCount:1,
		fiftyRubleCount:1,
		tenRubleCount:1,
		fiveRubleCount:1,
		twoRubleCount:1,
		oneRubleCount:1,
		fiftyCopeckCount:1,
		tenCopeckCount:1,
		fiveCopeckCount:1,
		oneCopeckCount:1
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = BanknoteCalculator(money);
    equal(count.fiveThousandRubleCount, 0);
    equal(count.oneThousandRubleCount, 0);
    equal(count.fiveHundredRubleCount, 0);
    equal(count.oneHundredRubleCount, 1);
    equal(count.fiftyRubleCount, 1);
    equal(count.tenRubleCount, 1);
    equal(count.fiveRubleCount, 1);
    equal(count.twoRubleCount, 1);
    equal(count.oneRubleCount, 1);
    equal(count.fiftyCopeckCount, 1);
    equal(count.tenCopeckCount, 1);
    equal(count.fiveCopeckCount, 1);
    equal(count.oneCopeckCount, 1);
	equal(count.shortage, true);
});