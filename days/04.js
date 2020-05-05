module.exports = {
    run() {
        const decumal = 5;

        const findComplement = function(num) {
            const complementNum = ['0', 'b'];
            num.toString(2)
                .split('')
                .forEach(el => {
                    complementNum.push(1 - +el);
                });
            return (+complementNum.join('')).toString(10);
        };

        console.time('executionTimer');
        console.log(findComplement(decumal));
        console.log('It took:');
        console.timeEnd('executionTimer');
    },
};
