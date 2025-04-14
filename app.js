let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (euro) {
    let valueInDollar = euro * oneEuroIs.USD ;
    return valueInDollar;
}

function fromDollarToYen (dollar) {
    const euroFromDollar = dollar / oneEuroIs.USD ;
    const yenFromEuro = euroFromDollar * oneEuroIs.JPY;
    return yenFromEuro;
}


function fromYenToPound (yen){
    const euroFromYen =  yen / oneEuroIs.JPY;
    const yenFromPound = euroFromYen * oneEuroIs.GBP;
    return yenFromPound;
}

module.exports = {fromEuroToDollar,fromDollarToYen ,fromYenToPound};

