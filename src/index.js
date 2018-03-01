// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency === 0 || currency === null) {
        return {}
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    var ex = {};
    var H = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;

    P = currency
    if (currency < 10) {
        N = Math.floor(currency / 5);
        P = Math.floor(currency % 5);
        if (N > 0) {
            ex["N"] = N;
        }
        if (P > 0) {
            ex["P"] = P;
        }
    }
    else {
        H = Math.floor(currency / 50);
        Q = Math.floor((currency - H * 50) / 25);
        D = Math.floor((currency - H * 50 - Q * 25) / 10);
        N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
        P = Math.floor(currency % 5);
        if (H > 0) {
            ex["H"] = H;
        }
        if (Q > 0) {
            ex["Q"] = Q;
        }
        if (D > 0) {
            ex["D"] = D;
        }
        if (N > 0) {
            ex["N"] = N;
        }
        if (P > 0) {
            ex["P"] = P;
        }
    }

    return ex;
}

