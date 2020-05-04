
'use strict'

module.exports = {
    run: function () {
        let decumal = 5;
        
        var findComplement = function(num) {
            let complementNum = ['0', 'b'];
            num.toString(2).split('').forEach(el => {
                complementNum.push(1 - (+el));
            })
            return (+complementNum.join('')).toString(10);
        };

        console.time('executionTimer');
        console.log(findComplement(decumal));
        console.log("It took:");
        console.timeEnd('executionTimer');
    }
};