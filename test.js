const { fromEuroToDollar } = require('./app.js');

test("Convierte un euro a dolares",() => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

const { fromDollarToYen } = require('./app.js');

test("Convierte dolares a yenes", () =>{
    expect(fromDollarToYen(1)).toBeCloseTo(156.5 / 1.07);
});

const { fromYenToPound } = require('./app.js');

test("Convierte yenes a libras esterlinas", () =>{
    expect(fromYenToPound(156.5)).toBeCloseTo(156.5 * 0.87 / 156.5);
});