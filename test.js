const { fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars",() => {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

const { fromDollarToYen } = require('./app.js');

test("One dollar should be 143.70 yens", () =>{
    const expected = 3.5 * 143.70;
    expect(fromDollarToYen(3.5)).toBe(502.94999999999993);
});

const { fromYenToPound } = require('./app.js');

test("One yen should be 0.0053 pounds", () =>{
    const expected = 3.5 * 0.0053;
    expect(fromYenToPound(3.5)).toBe(0.01855);
});