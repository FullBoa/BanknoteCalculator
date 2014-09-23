//Автор: Георгий Поликарпов

module("Null argument");

test("Null argument test", function () {
    throws(BanknoteCalculator(null), new Error("Значение не может быть null"), "Должно быть брошено исключение");
});


module("Test empty argument", {
    setup: function () {
        this.amounts = [];

        this.expecedCount = new BanknoteCount;
    }
});

test("Empty argument", function () {
    var count = BanknoteCalculator(this.amounts);
    deepEqual(count, this.expecedCount);
});


module("Negative argument");

test("-3254.2564", function () {
    var amounts = [];
    amounts.push(-3254.2564);
    throws(BanknoteCalculator(amounts), Error());
});

test("1500.15, -2000.87", function () {
    var amounts = [];
    amounts.push(1500.15);
    amounts.push(-2000.87);
    throws(BanknoteCalculator(amounts), Error());
});

test("3570, 4350, -15450.15", function () {
    var amounts = [];
    amounts.push(3570);
    amounts.push(4350);
    amounts.push(-15450.15);
    throws(BanknoteCalculator(amounts), Error());
});

test("3570, 4350, -15450.15", function () {
    var amounts = [];
    amounts.push(3570);
    amounts.push(4350);
    amounts.push(-15450.15);
    throws(BanknoteCalculator(amounts), Error());
});

test("1560, -1100.156, 2560", function () {
    var amounts = [];
    amounts.push(1560);
    amounts.push(-1100.156);
    amounts.push(2560);
    throws(BanknoteCalculator(amounts), Error());
});

test("-0.01, 1000, 240", function () {
    var amounts = [];
    amounts.push(-0.01);
    amounts.push(1000);
    amounts.push(240);
    throws(BanknoteCalculator(amounts), Error());
});


module("One element");

test("6668.66", function () {
    var amounts = [];
    amounts.push(6668.66);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 1,
        oneThousandRubleCount: 1,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 1,
        fiftyRubleCount: 1,
        tenRubleCount: 1,
        fiveRubleCount: 1,
        twoRubleCount: 1,
        oneRubleCount: 1,
        fiftyCopeckCount: 1,
        tenCopeckCount: 1,
        fiveCopeckCount: 1,
        oneCopeckCount: 1,
    };
    
    deepEqual(count, expectedCount);
});

test("9999.99", function () {
    var amounts = [];
    amounts.push(9999.99);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 1,
        oneThousandRubleCount: 4,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 4,
        fiftyRubleCount: 1,
        tenRubleCount: 4,
        fiveRubleCount: 1,
        twoRubleCount: 2,
        oneRubleCount: 0,
        fiftyCopeckCount: 1,
        tenCopeckCount: 4,
        fiveCopeckCount: 1,
        oneCopeckCount: 4,
    };

    deepEqual(count, expectedCount);
});

test("13979.77", function () {
    var amounts = [];
    amounts.push(13979.77);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 2,
        oneThousandRubleCount: 3,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 4,
        fiftyRubleCount: 1,
        tenRubleCount: 2,
        fiveRubleCount: 1,
        twoRubleCount: 2,
        oneRubleCount: 0,
        fiftyCopeckCount: 1,
        tenCopeckCount: 2,
        fiveCopeckCount: 1,
        oneCopeckCount: 2,
    };

    deepEqual(count, expectedCount);
});

test("0", function () {
    var amounts = [];
    amounts.push(0);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 0,
        oneThousandRubleCount: 0,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 0,
        fiftyRubleCount: 0,
        tenRubleCount: 0,
        fiveRubleCount: 0,
        twoRubleCount: 0,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 0,
        fiveCopeckCount: 0,
        oneCopeckCount: 0,
    };

    deepEqual(count, expectedCount);
});

test("0.01", function () {
    var amounts = [];
    amounts.push(0.01);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 0,
        oneThousandRubleCount: 0,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 0,
        fiftyRubleCount: 0,
        tenRubleCount: 0,
        fiveRubleCount: 0,
        twoRubleCount: 0,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 0,
        fiveCopeckCount: 0,
        oneCopeckCount: 1,
    };

    deepEqual(count, expectedCount);
});

test("0.007", function () {
    var amounts = [];
    amounts.push(0.007);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 0,
        oneThousandRubleCount: 0,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 0,
        fiftyRubleCount: 0,
        tenRubleCount: 0,
        fiveRubleCount: 0,
        twoRubleCount: 0,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 0,
        fiveCopeckCount: 0,
        oneCopeckCount: 1,
    };

    deepEqual(count, expectedCount);
});

test("169346.94", function () {
    var amounts = [];
    amounts.push(169346.94);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 33,
        oneThousandRubleCount: 4,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 3,
        fiftyRubleCount: 0,
        tenRubleCount: 4,
        fiveRubleCount: 1,
        twoRubleCount: 0,
        oneRubleCount: 1,
        fiftyCopeckCount: 1,
        tenCopeckCount:4,
        fiveCopeckCount: 0,
        oneCopeckCount: 4,
    };

    deepEqual(count, expectedCount);
});

test("16768.6432", function () {
    var amounts = [];
    amounts.push(16768.6432);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 3,
        oneThousandRubleCount: 1,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 2,
        fiftyRubleCount: 1,
        tenRubleCount: 1,
        fiveRubleCount: 1,
        twoRubleCount: 1,
        oneRubleCount: 1,
        fiftyCopeckCount: 1,
        tenCopeckCount: 1,
        fiveCopeckCount: 0,
        oneCopeckCount: 4,
    };

    deepEqual(count, expectedCount);
});

test("76432.16", function () {
    var amounts = [];
    amounts.push(76432.16);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 15,
        oneThousandRubleCount: 1,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 4,
        fiftyRubleCount: 0,
        tenRubleCount: 3,
        fiveRubleCount: 0,
        twoRubleCount: 1,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 1,
        fiveCopeckCount: 1,
        oneCopeckCount: 1,
    };

    deepEqual(count, expectedCount);
});

test("0.002", function () {
    var amounts = [];
    amounts.push(0.002);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 0,
        oneThousandRubleCount: 0,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 0,
        fiftyRubleCount: 0,
        tenRubleCount: 0,
        fiveRubleCount: 0,
        twoRubleCount: 0,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 0,
        fiveCopeckCount: 0,
        oneCopeckCount: 0,
    };

    deepEqual(count, expectedCount);
});


module("Some element");

test("2500, 2500", function () {
    var amounts = [];
    amounts.push(2500);
    amounts.push(2500);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 4,
        oneThousandRubleCount: 2,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 0,
        fiftyRubleCount: 0,
        tenRubleCount: 0,
        fiveRubleCount: 0,
        twoRubleCount: 0,
        oneRubleCount: 0,
        fiftyCopeckCount: 0,
        tenCopeckCount: 0,
        fiveCopeckCount: 0,
        oneCopeckCount: 0,
    };

    deepEqual(count, expectedCount);
});

test("6668.66, 6668.66", function () {
    var amounts = [];
    amounts.push(6668.66);
    amounts.push(6668.66);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 2,
        oneThousandRubleCount: 2,
        fiveHundredRubleCount: 2,
        oneHundredRubleCount: 2,
        fiftyRubleCount: 2,
        tenRubleCount: 2,
        fiveRubleCount: 2,
        twoRubleCount: 2,
        oneRubleCount: 2,
        fiftyCopeckCount: 2,
        tenCopeckCount: 2,
        fiveCopeckCount: 2,
        oneCopeckCount: 2,
    };

    deepEqual(count, expectedCount);
});

test("9999.99, 16432.16", function () {
    var amounts = [];
    amounts.push(9999.99);
    amounts.push(16432.16);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 4,
        oneThousandRubleCount: 5,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 8,
        fiftyRubleCount: 1,
        tenRubleCount: 7,
        fiveRubleCount: 1,
        twoRubleCount: 3,
        oneRubleCount: 0,
        fiftyCopeckCount: 1,
        tenCopeckCount: 5,
        fiveCopeckCount: 2,
        oneCopeckCount: 5,
    };

    deepEqual(count, expectedCount);
});

test("163467.34, 643632.85", function () {
    var amounts = [];
    amounts.push(163467.34);
    amounts.push(643632.85);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 160,
        oneThousandRubleCount: 6,
        fiveHundredRubleCount: 1,
        oneHundredRubleCount: 5,
        fiftyRubleCount: 1,
        tenRubleCount: 4,
        fiveRubleCount: 1,
        twoRubleCount: 2,
        oneRubleCount: 0,
        fiftyCopeckCount: 1,
        tenCopeckCount: 6,
        fiveCopeckCount: 1,
        oneCopeckCount: 4,
    };

    deepEqual(count, expectedCount);
});

test("13643.15, 6744.96, 4000.543", function () {
    var amounts = [];
    amounts.push(13643.15);
    amounts.push(6744.96);
    amounts.push(4000.543);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 3,
        oneThousandRubleCount: 8,
        fiveHundredRubleCount: 2,
        oneHundredRubleCount: 3,
        fiftyRubleCount: 0,
        tenRubleCount: 8,
        fiveRubleCount: 0,
        twoRubleCount: 3,
        oneRubleCount: 1,
        fiftyCopeckCount: 2,
        tenCopeckCount: 5,
        fiveCopeckCount: 2,
        oneCopeckCount: 5,
    };

    deepEqual(count, expectedCount);
});

test("324.167, 111.111, 15.466", function () {
    var amounts = [];
    amounts.push(324.167);
    amounts.push(111.111);
    amounts.push(15.466);
    var count = BanknoteCalculator(amounts);
    var expectedCount = {
        fiveThousandRubleCount: 0,
        oneThousandRubleCount: 0,
        fiveHundredRubleCount: 0,
        oneHundredRubleCount: 4,
        fiftyRubleCount: 0,
        tenRubleCount: 4,
        fiveRubleCount: 1,
        twoRubleCount: 2,
        oneRubleCount: 1,
        fiftyCopeckCount: 0,
        tenCopeckCount: 6,
        fiveCopeckCount: 2,
        oneCopeckCount: 5,
    };

    deepEqual(count, expectedCount);
});