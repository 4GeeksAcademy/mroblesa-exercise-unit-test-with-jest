const fromEuroToDollar = (euroValue) => {
    return euroValue * 1.07;
}
module.exports = {fromEuroToDollar};

const fromDollarToYen = (dollarValue) => {
    return dollarValue * 143.70;
}

module.exports = {fromDollarToYen};

const fromYenToPound = (yenValue) => {
    return yenValue * 0.0053 ;
}

module.exports = {fromYenToPound};