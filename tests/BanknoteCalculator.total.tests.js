//Автор: Георгий Поликарпов

module("total() Null argument");

test("", function () {
    throws(function() {
		new new BanknoteCalculator().total()(null);
	}
	, new Error("Значение не может быть null"));
});

module ("total() Invalid argument");

test("aaop", function () {
    throws(function() {
		new BanknoteCalculator().total("aaop");
	}
	, new Error("Некорректное значение"));
});

test("[5,aaop]", function () {
    throws(function() {
		new BanknoteCalculator().total([5,"aaop"]);
	}
	, new Error("Некорректное значение"));
});

test("[5,{}]", function () {
    throws(function() {
		new BanknoteCalculator().total([5,{}]);
	}
	, new Error("Некорректное значение"));
});

test("[5,[]]", function () {
    throws(function() {
		new BanknoteCalculator().total([5,[]]);
	}
	, new Error("Некорректное значение"));
});

test("[5,'']", function () {
    throws(function() {
		new BanknoteCalculator().total([5,'']);
	}
	, new Error("Некорректное значение"));
});

test("{}", function () {
    throws(function() {
		new BanknoteCalculator().total({});
	}
	, new Error("Некорректное значение"));
});

test("''", function () {
    throws(function() {
		new BanknoteCalculator().total("");
	}
	, new Error("Некорректное значение"));
});


module("total() Empty argument");

test("[]", function () {
    var total = new BanknoteCalculator().total([]);
    equal(total, 0);
});


module("total() Negative argument");

test("-3254.2564", function () {
    var amounts = [-3254.2564];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});

test("1500.15, -2000.87", function () {
    var amounts = [1500.15, -2000.87];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});

test("3570, 4350, -15450.15", function () {
    var amounts = [3570, 4350, -15450.15];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});

test("1560, -1100.156, 2560", function () {
    var amounts = [1560, -1100.156, 2560];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});

test("-0.01, 1000, 240", function () {
    var amounts = [-0.01, 1000, 240];
    throws(function() {
	new BanknoteCalculator().total(amounts);
	}
	, new Error("Сумма не может быть отрицательным числом"));
});


module("total() One element");

test("6668.66", function () {
    var amounts = [6668.66];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 6668.66);
});

test("9999.99", function () {
    var amounts = [9999.99];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 9999.99);
});

test("13979.77", function () {
    var amounts = [13979.77];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 13979.77);
});

test("0", function () {
    var amounts = [0];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 0);
});

test("0.01", function () {
    var amounts = [0.01];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 0.01);
});

test("0.007", function () {
    var amounts = [0.007];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 0);
});

test("169346.94", function () {
    var amounts = [169346.94];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 169346.94);
});

test("16768.6432", function () {
    var amounts = [16768.6432];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 16768.64);
});

test("76432.16", function () {
    var amounts = [76432.16];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 76432.16);
});

test("0.002", function () {
    var amounts = [0.002];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 0);
});

test("18058.26", function () {
    var amounts = [18058.26];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 18058.26);
});


module("total() Some element");

test("2500, 2500", function () {
    var amounts = [2500, 2500];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 5000);
});

test("6668.66, 6668.66", function () {
    var amounts = [6668.66, 6668.66];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 13337.32);
});

test("9999.99, 16432.16", function () {
    var amounts = [9999.99, 16432.16];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 26432.15);
});

test("163467.34, 643632.85", function () {
    var amounts = [163467.34, 643632.85];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 807100.19);
});

test("13643.15, 6744.96, 4000.543", function () {
    var amounts = [13643.15, 6744.96, 4000.543];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 24388.65);
});

test("324.167, 111.111, 15.466", function () {
    var amounts = [324.167, 111.111, 15.466];
    var total = new BanknoteCalculator().total(amounts);
    equal(total, 450.73);
});