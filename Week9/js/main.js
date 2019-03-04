let addnumbers = {
    sum: 0,
    starter: 1109,
    stepdown: 11,
    stopnumber: 119,
    adder: function () {
        for (starter = 1109; starter >= stopnumber; starter -= stepdown) {
            sum = sum + starter;
        }
        return sum;
    }

};