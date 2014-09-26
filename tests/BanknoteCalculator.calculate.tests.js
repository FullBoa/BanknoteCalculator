//Автор: Георгий Поликарпов

module("calculate() Null argument");

test("Null argument test", function () {
    throws(function() {
		new new BanknoteCalculator().calculate().calculate(null);
	}
	, new Error("Значение не может быть null"));
});

module ("calculate() Invalid argument");

test("Invalid argument {}", function () {
    throws(function() {
		new BanknoteCalculator().calculate({});
	}
	, new Error("Некорректный аргумент"));
});

test("Invalid argument [5,215]", function () {
    throws(function() {
		new BanknoteCalculator().calculate([5,215]);
	}
	, new Error("Некорректный аргумент"));
});


module("calculate() Empty argument");

test("Empty argument", function () {
    var count = new BanknoteCalculator().calculate({'amounts': []});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 0);
});


module("calculate() Negative argument");

test("-3254.2564", function () {
    var amounts = [-3254.2564];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("1500.15, -2000.87", function () {
    var amounts = [1500.15, -2000.87];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("1560, -1100.156, 2560", function () {
    var amounts = [1560, -1100.156, 2560];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});

test("-0.01, 1000, 240", function () {
    var amounts = [-0.01, 1000, 240];
    throws(function() {
	new BanknoteCalculator().calculate({'amounts': amounts});
	}
	, new Error("Сумма не может быть отрицательным числом!"));
});


module("calculate() One element");

test("6668.66", function () {
    var amounts = [6668.66];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 1);
    equal(count['1000r'], 1);
    equal(count['500r'], 1);
    equal(count['100r'], 1);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});

test("9999.99", function () {
    var amounts = [9999.99];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 1);
    equal(count['1000r'], 4);
    equal(count['500r'], 1);
    equal(count['100r'], 4);
    equal(count['50r'], 1);
    equal(count['10r'], 4);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 0);
    equal(count['50k'], 1);
    equal(count['10k'], 4);
    equal(count['5k'], 1);
    equal(count['1k'], 4);
});

test("13979.77", function () {
    var amounts = [13979.77];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 2);
    equal(count['1000r'], 3);
    equal(count['500r'], 1);
    equal(count['100r'], 4);
    equal(count['50r'], 1);
    equal(count['10r'], 2);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 0);
    equal(count['50k'], 1);
    equal(count['10k'], 2);
    equal(count['5k'], 1);
    equal(count['1k'], 2);
});

test("0", function () {
    var amounts = [0];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 0);
});

test("0.01", function () {
    var amounts = [0.01];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 1);
});

test("0.007", function () {
    var amounts = [0.007];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 0);
});

test("169346.94", function () {
    var amounts = [169346.94];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 33);
    equal(count['1000r'], 4);
    equal(count['500r'], 0);
    equal(count['100r'], 3);
    equal(count['50r'], 0);
    equal(count['10r'], 4);
    equal(count['5r'], 1);
    equal(count['2r'], 0);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 4);
    equal(count['5k'], 0);
    equal(count['1k'], 4);
});

test("16768.6432", function () {
    var amounts = [16768.6432];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 3);
    equal(count['1000r'], 1);
    equal(count['500r'], 1);
    equal(count['100r'], 2);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 0);
    equal(count['1k'], 4);
});

test("76432.16", function () {
    var amounts = [76432.16];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 15);
    equal(count['1000r'], 1);
    equal(count['500r'], 0);
    equal(count['100r'], 4);
    equal(count['50r'], 0);
    equal(count['10r'], 3);
    equal(count['5r'], 0);
    equal(count['2r'], 1);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});

test("0.002", function () {
    var amounts = [0.002];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 0);
});

test("18058.26", function () {
    var amounts = [18058.26];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 3);
    equal(count['1000r'], 3);
    equal(count['500r'], 0);
    equal(count['100r'], 0);
    equal(count['50r'], 1);
    equal(count['10r'], 0);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 0);
    equal(count['10k'], 2);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});


module("calculate() Some element");

test("2500, 2500", function () {
    var amounts = [2500, 2500];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 4);
    equal(count['500r'], 2);
    equal(count['100r'], 0);
    equal(count['50r'], 0);
    equal(count['10r'], 0);
    equal(count['5r'], 0);
    equal(count['2r'], 0);
    equal(count['1r'], 0);
    equal(count['50k'], 0);
    equal(count['10k'], 0);
    equal(count['5k'], 0);
    equal(count['1k'], 0);
});

test("6668.66, 6668.66", function () {
    var amounts = [6668.66, 6668.66];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 2);
    equal(count['1000r'], 2);
    equal(count['500r'], 2);
    equal(count['100r'], 2);
    equal(count['50r'], 2);
    equal(count['10r'], 2);
    equal(count['5r'], 2);
    equal(count['2r'], 2);
    equal(count['1r'], 2);
    equal(count['50k'], 2);
    equal(count['10k'], 2);
    equal(count['5k'], 2);
    equal(count['1k'], 2);
});

test("9999.99, 16432.16", function () {
    var amounts = [9999.99, 16432.16];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 4);
    equal(count['1000r'], 5);
    equal(count['500r'], 1);
    equal(count['100r'], 8);
    equal(count['50r'], 1);
    equal(count['10r'], 7);
    equal(count['5r'], 1);
    equal(count['2r'], 3);
    equal(count['1r'], 0);
    equal(count['50k'], 1);
    equal(count['10k'], 5);
    equal(count['5k'], 2);
    equal(count['1k'], 5);
});

test("163467.34, 643632.85", function () {
    var amounts = [163467.34, 643632.85];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 160);
    equal(count['1000r'], 6);
    equal(count['500r'], 1);
    equal(count['100r'], 5);
    equal(count['50r'], 1);
    equal(count['10r'], 4);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 0);
    equal(count['50k'], 1);
    equal(count['10k'], 6);
    equal(count['5k'], 1);
    equal(count['1k'], 4);
});

test("13643.15, 6744.96, 4000.543", function () {
    var amounts = [13643.15, 6744.96, 4000.543];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 3);
    equal(count['1000r'], 8);
    equal(count['500r'], 2);
    equal(count['100r'], 3);
    equal(count['50r'], 0);
    equal(count['10r'], 8);
    equal(count['5r'], 0);
    equal(count['2r'], 3);
    equal(count['1r'], 1);
    equal(count['50k'], 2);
    equal(count['10k'], 5);
    equal(count['5k'], 2);
    equal(count['1k'], 5);
});

test("324.167, 111.111, 15.466", function () {
    var amounts = [324.167, 111.111, 15.466];
    var count = new BanknoteCalculator().calculate({'amounts':amounts});
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 4);
    equal(count['50r'], 0);
    equal(count['10r'], 4);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 1);
    equal(count['50k'], 0);
    equal(count['10k'], 6);
    equal(count['5k'], 2);
    equal(count['1k'], 3);
});


module ("calculate() With available banknote counts");

test("13979.77|5000=1", function () {
    var amounts = [13979.77];
	var counts = {
		'5000r':1
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 1);
    equal(count['1000r'], 8);
    equal(count['500r'], 1);
    equal(count['100r'], 4);
    equal(count['50r'], 1);
    equal(count['10r'], 2);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 0);
    equal(count['50k'], 1);
    equal(count['10k'], 2);
    equal(count['5k'], 1);
    equal(count['1k'], 2);
});

test("6668.66|5000=0,500=0", function () {
    var amounts = [6668.66];
	var counts = {
		'5000r':0,
		'500r':0
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 0);
    equal(count['1000r'], 6);
    equal(count['500r'], 0);
    equal(count['100r'], 6);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});

test("6668.66|5000=2,500=2", function () {
    var amounts = [6668.66];
	var counts = {
		'5000r':2,
		'500r':2
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 1);
    equal(count['1000r'], 1);
    equal(count['500r'], 1);
    equal(count['100r'], 1);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});

test("6668.66|5000=2,500=0", function () {
    var amounts = [6668.66];
	var counts = {
		'5000r':2,
		'500r':0
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 1);
    equal(count['1000r'], 1);
    equal(count['500r'], 0);
    equal(count['100r'], 6);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
});

test("13979.77|5000=1,100=3,50=5,10=1,5=2,2=3,1=10", function () {
    var amounts = [13979.77];
	var counts = {
		'5000r':1,
		'100r':3,
		'50r':5,
		'10r':1,
		'5r':2,
		'2r':3,
		'1r':10		
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 1);
    equal(count['1000r'], 8);
    equal(count['500r'], 1);
    equal(count['100r'], 3);
    equal(count['50r'], 3);
    equal(count['10r'], 1);
    equal(count['5r'], 2);
    equal(count['2r'], 3);
    equal(count['1r'], 3);
    equal(count['50k'], 1);
    equal(count['10k'], 2);
    equal(count['5k'], 1);
    equal(count['1k'], 2);
});

test("13979.77|5000=1,100=3,50=5,10=1,5=2,2=3,1=10", function () {
    var amounts = [13979.77];
	var counts = {
		'5000r':1,
		'100r':3,
		'50r':5,
		'10r':1,
		'5r':2,
		'2r':3,
		'1r':10		
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 1);
    equal(count['1000r'], 8);
    equal(count['500r'], 1);
    equal(count['100r'], 3);
    equal(count['50r'], 3);
    equal(count['10r'], 1);
    equal(count['5r'], 2);
    equal(count['2r'], 3);
    equal(count['1r'], 3);
    equal(count['50k'], 1);
    equal(count['10k'], 2);
    equal(count['5k'], 1);
    equal(count['1k'], 2);
});

test("13643.15, 6744.96, 4000.543|5000=5,1000=5,500=5,100=5,50=5", function () {
    var amounts = [13643.15, 6744.96, 4000.543];var counts = {
		'5000r':5,
		'1000r':5,
		'500r':5,
		'100r':5,
		'50r':5	
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 3);
    equal(count['1000r'], 5);
    equal(count['500r'], 5);
    equal(count['100r'], 5);
    equal(count['50r'], 5);
    equal(count['10r'], 113);
    equal(count['5r'], 0);
    equal(count['2r'], 3);
    equal(count['1r'], 1);
    equal(count['50k'], 2);
    equal(count['10k'], 5);
    equal(count['5k'], 2);
    equal(count['1k'], 5);
});

test("324.167, 111.111, 15.466|0.50=5,0.10=5,0.05=5,0.01=5", function () {    
    var amounts = [324.167, 111.111, 15.466];
	var counts = {
		'50k':5,
		'10k':5,
		'5k':5,
		'1k':5
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 4);
    equal(count['50r'], 0);
    equal(count['10r'], 4);
    equal(count['5r'], 1);
    equal(count['2r'], 2);
    equal(count['1r'], 1);
    equal(count['50k'], 0);
    equal(count['10k'], 5);
    equal(count['5k'], 4);
    equal(count['1k'], 3);
});

test("324.167, 111.111, 15.466|All=1", function () {    
    var amounts = [324.167, 111.111, 15.466];
	var counts = {
		'5000r':1,
		'1000r':1,
		'500r':1,
		'100r':1,
		'50r':1,
		'10r':1,
		'5r':1,
		'2r':1,
		'1r':1,
		'50k':1,
		'10k':1,
		'5k':1,
		'1k':1
	};
	var money = {
		'amounts':amounts,
		'availableCounts': counts
	};
    var count = new BanknoteCalculator().calculate(money);
    equal(count['5000r'], 0);
    equal(count['1000r'], 0);
    equal(count['500r'], 0);
    equal(count['100r'], 1);
    equal(count['50r'], 1);
    equal(count['10r'], 1);
    equal(count['5r'], 1);
    equal(count['2r'], 1);
    equal(count['1r'], 1);
    equal(count['50k'], 1);
    equal(count['10k'], 1);
    equal(count['5k'], 1);
    equal(count['1k'], 1);
	equal(count.shortage, true);
});