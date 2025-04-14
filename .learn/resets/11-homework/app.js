const fromEuroToDollar = (euroValue) => {
    let valueInDollar = euroValue * 1.07;
    return valueInDollar;
}
module.exports = {fromEuroToDollar};

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 156.5 ;
    return valueInYen;
}

module.exports = {fromDollarToYen};

const fromYenToPound = (valueInYen) => {
    let valueInPound =  valueInYen * 0.87 ;
    return valueInPound;
}

module.exports = {fromYenToPound};

console.log(fromEuroToDollar(3.5));